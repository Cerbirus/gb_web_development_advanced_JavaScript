const comp_filter = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
            <li class="menu-item menu-search">
                <form action="#" class="menu-search-form disp_block" @submit.prevent="$root.$refs.comp_catalog_products.filter(userSearch)">
                    <input class="menu-search-btn" id="menu-search-btn" type="search" v-model="userSearch">
                    <label for="menu-search-btn">
                        <svg width="27" height="28" viewBox="0 0 27 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22462 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71815 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" />
                        </svg>
                    </label>
                </form>
            </li>
    `
};

const comp_cart_item = {
    props: ['cartItem'],
    template: `
            <div class="menu-cart-form-product">
                <div>{{cartItem.product_name}}</div >
                <div class="cart-count">{{cartItem.quantity}}</div>
                <div>{{cartItem.price}}</div>
                <div class="cart-amount">{{cartItem.quantity * cartItem.price}}</div>
                <button @click="$root.$refs.comp_header.$refs.comp_cart.removeProduct(cartItem)">
                    <span>X</span>
                </button>
            </div>
    `
};

const comp_cart = {
    components: { comp_cart_item },
    data() {
        return {
            showCart: false,
            amount: 0,
            countGoods: 0,
            cartItems: []
            /*  "amount": 6700,
                "countGoods": 13,
                "contents": [
                    {
                        "quantity": 6,
                        "id_product": 1,
                        "imgProduct": "img/product_1.png",
                        "product_name": "Awesome Product",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "price": 100
                    }, */
        }
    },
    methods: {
        addProduct(product) {
            this.$root.getJson(`/api/cart/${product.id_product}`)
                .then(dataFind => {
                    if (dataFind.result) {
                        this.$root.putJson(`/api/cart/${product.id_product}`, { quantity: 1 })
                            .then(data => {
                                if (data.result) {
                                    this.updateCart();
                                }
                            })
                    }
                    else {
                        let prod = Object.assign({ quantity: 1 }, product);
                        this.$root.postJson("/api/cart/", prod)
                            .then(data => {
                                if (data.result) {
                                    this.updateCart();
                                }
                            })
                    }
                });
        },
        updateCart() {
            this.$root.getJson(`/api/cart`)
                .then(data => {
                    this.cartItems = [];
                    for (let el of data.contents) {
                        this.cartItems.push(el);
                    }
                    this.amount = data.amount;
                    this.countGoods = data.countGoods;
                });
        },
        removeProduct(product) {
            if (product.quantity > 1) {
                this.$root.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            this.updateCart();
                        }
                    })
            } else {
                this.$root.delJson(`/api/cart/${product.id_product}`, product)
                    .then(data => {
                        if (data.result) {
                            this.updateCart();
                        } else {
                            console.log('error');
                        }
                    })
            }
        },
    },
    mounted() {
        this.updateCart();
    },
    template: `
            <li class="menu-item menu-cart">
                <button class="menu-item-btn disp_block" @click="showCart = !showCart">
                    <!-- onclick="location.href='cart.html';" -->
                    <svg class="menu-svg-icon" width="32" height="29" viewBox="0 0 32 29"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.1998 29C25.5521 28.9738 24.9404 28.6948 24.4961 28.2227C24.0518 27.7506 23.8103 27.1232 23.8234 26.475C23.8365 25.8269 24.1032 25.2097 24.5662 24.7559C25.0292 24.3022 25.6516 24.048 26.2999 24.048C26.9482 24.048 27.5706 24.3022 28.0336 24.7559C28.4966 25.2097 28.7633 25.8269 28.7764 26.475C28.7895 27.1232 28.5479 27.7506 28.1036 28.2227C27.6593 28.6948 27.0477 28.9738 26.3999 29H26.1998ZM6.75183 26.32C6.75183 25.79 6.90901 25.2718 7.20349 24.8311C7.49797 24.3904 7.91654 24.0469 8.40625 23.844C8.89596 23.6412 9.43484 23.5881 9.95471 23.6915C10.4746 23.7949 10.9521 24.0502 11.3269 24.425C11.7017 24.7998 11.957 25.2773 12.0604 25.7972C12.1638 26.317 12.1107 26.8559 11.9078 27.3456C11.705 27.8353 11.3615 28.2539 10.9208 28.5483C10.4801 28.8428 9.96194 29 9.43188 29C9.07977 29.0003 8.73102 28.9311 8.40564 28.7966C8.08026 28.662 7.7846 28.4646 7.53552 28.2158C7.28645 27.9669 7.08891 27.6713 6.9541 27.3461C6.81929 27.0208 6.74988 26.6721 6.74988 26.32H6.75183ZM10.5519 20.686C10.2924 20.6868 10.0398 20.6024 9.83301 20.4457C9.62617 20.2891 9.47648 20.0689 9.40686 19.819L4.57385 2.36401H1.18091C0.867422 2.36401 0.566761 2.23947 0.345093 2.01781C0.123425 1.79614 -0.00109863 1.49549 -0.00109863 1.18201C-0.00109863 0.868519 0.123425 0.567873 0.345093 0.346205C0.566761 0.124537 0.867422 5.81268e-06 1.18091 5.81268e-06H5.46191C5.7214 -0.00080736 5.97394 0.0837201 6.18066 0.240568C6.38739 0.397416 6.53674 0.617884 6.60583 0.868006L11.4388 18.323H24.6168L28.9999 8.27501H14.3999C14.2417 8.27961 14.0843 8.25242 13.9368 8.19507C13.7893 8.13771 13.6548 8.05134 13.5413 7.94108C13.4277 7.83082 13.3375 7.69891 13.2759 7.55315C13.2143 7.40739 13.1825 7.25075 13.1825 7.0925C13.1825 6.93426 13.2143 6.77762 13.2759 6.63186C13.3375 6.4861 13.4277 6.35419 13.5413 6.24393C13.6548 6.13367 13.7893 6.0473 13.9368 5.98994C14.0843 5.93259 14.2417 5.90541 14.3999 5.91001H30.8129C31.0086 5.90996 31.2011 5.95866 31.3733 6.05172C31.5454 6.14478 31.6917 6.27926 31.7988 6.44301C31.9067 6.60729 31.9723 6.79569 31.9897 6.99145C32.0072 7.18721 31.976 7.38424 31.8989 7.565L26.4939 19.977C26.4015 20.1876 26.2499 20.3668 26.0574 20.4927C25.8649 20.6186 25.6399 20.6858 25.4099 20.686H10.5519Z" />
                    </svg>
                    <span class="menu-cart-txt">{{countGoods}}</span>
                </button>
                <div class="menu-cart-form" v-show="showCart">
                    <div class="menu-cart-form-header">
                        <div>Товар</div>
                        <div>Количество</div>
                        <div>Цена</div>
                        <div>Итого</div>
                    </div>

                    <div class="menu-cart-form-body">
                        <p v-if="!cartItems.length">Корзина пуста</p>
                        <comp_cart_item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
                        </comp_cart_item>
                    </div>

                    <div class="menu-cart-form-footer">
                        <span>Общая сумма: {{amount}}</span>
                        <span class="menu-cart-form-total"></span>
                    </div>
                </div>
            </li>
    `
};

const comp_header = {
    components: { comp_filter, comp_cart },
    template: `
            <header class="header-global">
                <!-- Видим, что все элементы имеют максимальную ширину - оборачиваем в контейнер -->
                <!-- прописал в теге nav, не увидел зачем оборачивать отдельно -->
                <!-- картинки меню являются декоративными, поэтому необходимо располагать в backgroung-image -->
                <div class="menu container">
                    <ul class="menu-listing">
                        <li class="menu-item menu-item-logo">
                            <a href="index.html" class="menu_logo disp_block">
                                <img src="img/logo.svg" alt="Логотип">
                            </a>
                        </li>
                        <comp_filter></comp_filter>
                    </ul>
                    <ul class="menu-listing">
                        <li class="menu-item menu-trigger">
                            <nav class="menu-item-nav">
                                <input class="menu-switch" id="menu-switch" type="checkbox">
                                <label class="menu-btn" for="menu-switch">
                                    <svg class="menu-svg-icon" width="32" height="23" viewBox="0 0 32 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
                                    </svg>
                                </label>
                                <div class="menu-list">
                                    <button class="menu-list-close-btn">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z" />
                                        </svg>
                                    </button>
                                    <span class="menu-list-title">menu</span>
                                    <ul class="menu-list-listing">
                                        <li class="menu-list-item">
                                            <a href="catalog.html">man</a>
                                            <ul class="menu-sublist">
                                                <li class="menu-sublist-item">
                                                    <a href="catalog.html">Accessories</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="catalog.html">Bags</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="catalog.html">Denim</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="catalog.html">T-Shirts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-list-item">
                                            <a href="#">woman</a>
                                            <ul class="menu-sublist">
                                                <li class="menu-sublist-item">
                                                    <a href="#">Accessories</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Jackets &amp;&nbsp;Coats</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Polos</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">T-Shirts</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Shirts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-list-item">
                                            <a href="#">kids</a>
                                            <ul class="menu-sublist">
                                                <li class="menu-sublist-item">
                                                    <a href="#">Accessories</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Jackets &amp;&nbsp;Coats</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Polos</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">T-Shirts</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Shirts</a>
                                                </li>
                                                <li class="menu-sublist-item">
                                                    <a href="#">Bags</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </li>
                        <li class="menu-item menu-user">
                            <button class="menu-item-btn disp_block" onclick="location.href='registration.html';">
                                <svg class="menu-svg-icon" width="29" height="29" viewBox="0 0 29 29"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" />
                                </svg>
                            </button>
                        </li>
                        <comp_cart ref="comp_cart"></comp_cart>
                    </ul>
                </div>
            </header>`
}
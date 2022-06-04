const comp_header_secondary = {
    template: `
        <section class="page-header page-header-secondary">

            <div class="container">
                <div class="page-header-secondary-position">
                    <h2 class="page-header-secondary-position-title color_brand_2">New arrivals</h2>
                    <ul class="page-header-secondary-position-breadcrumb">
                        <li class="page-header-secondary-position-breadcrumb-item"><a href="index.html">Home</a>
                        </li>
                        <li class="page-header-secondary-position-breadcrumb-item"><a href="catalog.html">Men</a>
                        </li>
                        <li class="page-header-secondary-position-breadcrumb-item"><span
                                class="color_brand_2 txt-bold">New arrivals</span>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    `
};

const comp_products_sorting = {
    template: `
        <div class="products-header products-header-inlineflex">

            <div class="products-header-filter">

                <form class="products-header-filter-form">
                    <input class="filter" type="checkbox" id="filter">
                    <label for="filter">
                        <span>filter</span>
                        <svg width="15" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
                        </svg>
                    </label>

                    <ul class="filter-list">
                        <li class="filter-item">
                            <input class="filter-item-input" type="radio" id="subfilter1" name="subfilter">
                            <label for="subfilter1"><span>category</span></label>
                            <ul class="filter-sublist">
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                                <li class="filter-subitem">qwerty1</li>
                            </ul>
                        </li>

                        <li class="filter-item">
                            <input class="filter-item-input" type="radio" id="subfilter2" name="subfilter">
                            <label for="subfilter2"><span>brand</span></label>
                            <ul class="filter-sublist">
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                                <li class="filter-subitem">qwerty2</li>
                            </ul>
                        </li>

                        <li class="filter-item">
                            <input class="filter-item-input" type="radio" id="subfilter3" name="subfilter">
                            <label for="subfilter3"><span>designer</span></label>
                            <ul class="filter-sublist">
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                                <li class="filter-subitem">qwerty3</li>
                            </ul>
                        </li>
                    </ul>
                </form>
            </div>

            <div class="products-header-sorting">
                <ul class="products-header-sorting-listing">
                    <li class="products-header-sorting-item">
                        <input class="products-header-sorting-item-btn" type="checkbox" id="trending">
                        <label class="products-header-sorting-item-label" for="trending">
                            <span>trending now</span>
                            <i class="products-header-sorting-item-check"></i>
                        </label>
                        <ul class="products-header-sorting-item-list products-header-sorting-item-trending">
                            <li class="products-header-sorting-item-trending-item">
                                <input class="products-header-sorting-item-trending-item-input"
                                    type="checkbox" value="" id="TrendingCheckChecked1">
                                <label class="products-header-sorting-item-trending-item-label"
                                    for="TrendingCheckChecked1">
                                    <span>2022</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-trending-item">
                                <input class="products-header-sorting-item-trending-item-input"
                                    type="checkbox" value="" id="TrendingCheckChecked2">
                                <label class="products-header-sorting-item-trending-item-label"
                                    for="TrendingCheckChecked2">
                                    <span>2021</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-trending-item">
                                <input class="products-header-sorting-item-trending-item-input"
                                    type="checkbox" value="" id="TrendingCheckChecked3">
                                <label class="products-header-sorting-item-trending-item-label"
                                    for="TrendingCheckChecked3">
                                    <span>2020...</span>
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li class="products-header-sorting-item">
                        <input class="products-header-sorting-item-btn" type="checkbox" id="size">
                        <label class="products-header-sorting-item-label" for="size">
                            <span>size</span>
                            <i class="products-header-sorting-item-check"></i>
                        </label>
                        <ul class="products-header-sorting-item-list products-header-sorting-item-size">
                            <li class="products-header-sorting-item-size-item">
                                <input class="products-header-sorting-item-size-item-input" type="checkbox"
                                    value="" id="sizeCheckChecked1">
                                <label class="products-header-sorting-item-size-item-label"
                                    for="sizeCheckChecked1">
                                    <span>xs</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-size-item">
                                <input class="products-header-sorting-item-size-item-input" type="checkbox"
                                    value="" id="sizeCheckChecked2">
                                <label class="products-header-sorting-item-size-item-label"
                                    for="sizeCheckChecked2">
                                    <span>s</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-size-item">
                                <input class="products-header-sorting-item-size-item-input" type="checkbox"
                                    value="" id="sizeCheckChecked3">
                                <label class="products-header-sorting-item-size-item-label"
                                    for="sizeCheckChecked3">
                                    <span>m</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-size-item">
                                <input class="products-header-sorting-item-size-item-input" type="checkbox"
                                    value="" id="sizeCheckChecked4">
                                <label class="products-header-sorting-item-size-item-label"
                                    for="sizeCheckChecked4">
                                    <span>l</span>
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li class="products-header-sorting-item">
                        <input class="products-header-sorting-item-btn" type="checkbox" id="price">
                        <label class="products-header-sorting-item-label" for="price">
                            <span>price</span>
                            <i class="products-header-sorting-item-check"></i>
                        </label>
                        <ul class="products-header-sorting-item-list products-header-sorting-item-price">
                            <li class="products-header-sorting-item-price-item">
                                <input class="products-header-sorting-item-price-item-input" type="checkbox"
                                    value="" id="priceCheckChecked1">
                                <label class="products-header-sorting-item-price-item-label"
                                    for="priceCheckChecked1">
                                    <span>Lowest price</span>
                                </label>
                            </li>
                            <li class="products-header-sorting-item-price-item">
                                <input class="products-header-sorting-item-price-item-input" type="checkbox"
                                    value="" id="priceCheckChecked2">
                                <label class="products-header-sorting-item-price-item-label"
                                    for="priceCheckChecked2">
                                    <span>Highest Price</span>
                                </label>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
    `
};

const comp_products_spagination = {
    template: `
        <nav class="products-pagination">
            <ul class="products-pagination-list">
                <li class="products-pagination-list-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" />
                        </svg>
                    </a>
                </li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">1</a></li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">2</a></li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">3</a></li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">4</a></li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">5</a></li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">6</a></li>
                <li class="products-pagination-list-item products-pagination-list-item-ellipsis">
                    <span class="products-pagination-list-item-txt">.....</span>
                </li>
                <li class="products-pagination-list-item"><a
                        class="page-link products-pagination-list-item-txt" href="#">20</a></li>
                <li class="products-pagination-list-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" />
                        </svg>

                    </a>
                </li>
            </ul>
        </nav>
    `
};

const comp_products_item = {
    props: ['product'],
    methods: {
        filter(userSearch2) {
            console.log(userSearch2);
        }
    },
    template: `
        <li class="products-item" data-id="2" data-name="Product 2" data-price="20">
            <article class="products-item-article">
                <div class="products-item-img-container">
                    <a href="product.html" class="products-item-link">
                        <img :src="product.imgProduct" alt="product-image"
                            class="products-item-img">
                    </a>
                </div>
                <div class="products-item-details">
                    <a href="product.html" class="products-item-link products-item-details-header">
                        <h3>{{ product.product_name }}</h3>
                    </a>
                    <a href="product.html" class="products-item-link products-item-details-title">
                        <p class="text">{{ product.description }}</p>
                    </a>
                    <a href="product.html"
                        class="products-item-link color_brand_2 products-item-details-price">
                        $ {{ product.price }}
                    </a>
                </div>
               <!-- <button class="products-item-cart-btn" @click="$root.$refs.comp_cart.addProduct(product)">
                                 <form action="#" class="menu-search-form disp_block" @submit.prevent="$root.filter"> -->
                 <button class="products-item-cart-btn" @click="$root.$refs.comp_header.$refs.comp_cart.addProduct(product)">
                    <svg width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" />
                    </svg>
                    <span>Add to Cart</span>
                </button>
            </article>
        </li>
    `
};

const comp_catalog_products = {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$root.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    components: {
        comp_header_secondary,
        comp_products_sorting,
        comp_products_item,
        comp_products_spagination
    },
    template: `
        <div>
            <comp_header_secondary></comp_header_secondary>

            <!-- Раздел с продукцией -->
            <section class="products">
                <div class="container ">
           
                    <comp_products_sorting></comp_products_sorting>

                    <header class="visibility-hidden">
                        <h2 class="products-header-title">Fetured Items</h2>
                    </header>

                    <ul class="products-listing">
                        <comp_products_item v-for="product of filtered" :key="product.id_product" :product="product">
                        </comp_products_item>
                    </ul>
                    
                    <comp_products_spagination></comp_products_spagination>
                
                </div>
            </section>

        </div>
    `
}
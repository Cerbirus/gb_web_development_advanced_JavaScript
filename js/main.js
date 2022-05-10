const API = 'https://raw.githubusercontent.com/Cerbirus/gb_web_development_advanced_JavaScript/main';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.products = []; // массив товаров из JSON документа
        this.productsObject = new Map(); // соответствие созданных продуктов
        this._getProducts()
            .then(data => { //data - объект js
                this.products = data;
                this.render();
            });
    }

    /*_fetchProducts() {
            this.products = [
                {
                    id: 1, title: 'Notebook', price: 2000, img: "img/Notebook.jpg",
                    description: "Notebook"
                },
                {
                    id: 2, title: 'Mouse', price: 20, img: "img/Mouse.jpg",
                    description: "Mouse"
                },
                {
                    id: 3, title: 'Keyboard', price: 200, img: "img/Keyboard.jpg",
                    description: "Keyboard"
                },
                {
                    id: 4, title: 'Gamepad', price: 50, img: "img/Gamepad.jpg",
                    description: "Gamepad"
                },
            ];
        } */

    _getProducts() {
        return fetch(`${API}/json/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productObject = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", productObject.render());
            this.productsObject.set(product.id, productObject);
        }
    }

    getSumm() {
        // reduce используется для последовательной обработки каждого элемента 
        // массива с сохранением промежуточного результата.
        return this.products.reduce((sum, item) => sum + item.price, 0);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
        this.description = product.description;
    }
    render() {
        return `<li class="products-item" 
                        data-id="${this.id}"
                        data-title="${this.title}" 
                        data-price="${this.price}">
                <article class="products-item-article">
                    <div class="products-item-img-container">
                        <a href="" class="products-item-link">
                            <img src="${this.img}" alt="${this.title}" class="products-item-img">
                        </a>
                    </div>
                    <div class="products-item-details">
                        <a href="" class="products-item-link products-item-details-header">
                            <h3>${this.title}</h3>
                        </a>
                        <a href="" class="products-item-link products-item-details-title">
                            <p class="text">${this.description}</p>
                        </a>
                        <a href="" class="products-item-link color_brand_2 products-item-details-price">
                            $<span class="price">${this.price}</span>
                        </a>
                    </div>
                    <button class="products-item-cart-btn">
                        <svg width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" />
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </article>
            </li>`
    }
}

class Cart {

    constructor(container = '.cart-list') {
        this.container = container;
        this.cartItems = []; // массив товаров из JSON документа
        this.cartItemsObject = new Map(); // созданные продукты в корзине
        this._getProducts()
            .then(data => {
                this.cartItems = data.contents;
                this.amount = data.amount;
                this.count = data.count;
                this.render();
            });
    }

    _getProducts() {
        return fetch(`${API}/json/cartData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    addToCart(product, amount = 1) {
        let cartItemObject = null;

        if (this.cartItemsObject.has(product.id)) {
            cartItemObject = this.cartItemsObject.get(product.id);
            cartItemObject.count++;
            cartItemObject.amount =
                +cartItemObject.product.price
                * +cartItemObject.count
        }
        else {
            const block = document.querySelector(this.container);
            cartItemObject = new CartItem(product, amount);
            block.insertAdjacentHTML("beforeend", cartItemObject.render());
            cartItemObject.elem = cartBodyEl.querySelector(`#product_${product.id}`);
            this.cartItemsObject.set(product.id, cartItemObject);
        }

        this.changeProduct(cartItemObject);
    }

    removeToCart(product) {
        const cartItemObject = this.cartItemsObject.get(product.id);

        cartItemObject.count--;
        cartItemObject.amount = +cartItemObject.product.price
            * +cartItemObject.count;
        this.changeProduct(cartItemObject);

        if (cartItemObject.count <= 0) {
            cartItemObject.elem.remove();
            this.cartItemsObject.delete(product.id);
        }
    }

    changeProduct(cartItem) {
        cartItem.elem.querySelector(`.cart-count`).textContent = cartItem.count;
        cartItem.elem.querySelector(`.cart-total`).textContent = cartItem.amount;
        cartTotalEl.textContent = this.getSum();
        cartCountEl.textContent = this.getCount();
    }

    getSum() {
        let result = 0;
        this.cartItemsObject.forEach((value) => result += value.amount);
        return result;
    }

    getCount() {
        let result = 0;
        this.cartItemsObject.forEach((value) => result += value.count);
        return result;
    }

    render() {
        const block = document.querySelector(this.container);
        for (let cartItem of this.cartItems) {
            const product = productList.productsObject.get(cartItem.id_product);
            const cartItemObject = new CartItem(product, cartItem.quantity);

            block.insertAdjacentHTML("beforeend", cartItemObject.render());
            cartItemObject.elem = cartBodyEl.querySelector(`#product_${product.id}`);

            this.cartItemsObject.set(product.id, cartItemObject);
        }
        cartTotalEl.textContent = this.getSum();
        cartCountEl.textContent = this.getCount();
    }
}

class CartItem {
    constructor(product, count = 1) {
        this.product = product;
        this.count = +count;
        this.amount = +product.price * +count;
    }

    render() {
        return `<div id="product_${this.product.id}" 
                        class="menu-cart-form-product"
                        data-id="${this.product.id}">
                    <div>${this.product.title}</div >
                    <div class="cart-count">${this.count}</div>
                    <div>${this.product.price}</div>
                    <div class="cart-total">${this.amount}</div>
                    <button class="menu-cart-form-close-btn">
                        <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"></path>
                        </svg>
                    </button>
                </div>`;
    }
}

const productsEl = document.querySelector('.products-listing');
const cartEl = document.querySelector('.menu-cart');
const cartFormEl = document.querySelector('.menu-cart-form');
const cartCountEl = document.querySelector('.menu-cart-txt');
const cartBodyEl = document.querySelector('.menu-cart-form-body');
const cartTotalEl = document.querySelector('.menu-cart-form-total');

const productList = new ProductList('.products-listing');
const cart = new Cart('.menu-cart-form-body');

cartEl.addEventListener('click', () => {
    cartFormEl.classList.toggle('visibility-hidden');
})

productsEl.addEventListener('click', ({ target }) => {
    if (!target.closest('.products-item-cart-btn')) {
        return;
    }

    const productEl = target.closest('.products-item');
    const productObject = productList.productsObject.get(+productEl.dataset.id);

    cart.addToCart(productObject);
})

document.querySelector('.menu-cart-form').addEventListener('click',
    ({ target }) => {
        if (!target.closest('.menu-cart-form-close-btn')) {
            return;
        }

        const productEl = target.closest('.menu-cart-form-product');
        const productObject = productList.productsObject.get(+productEl.dataset.id);

        cart.removeToCart(productObject);
    })

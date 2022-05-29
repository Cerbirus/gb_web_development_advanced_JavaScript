const API = 'https://raw.githubusercontent.com/Cerbirus/gb_web_development_advanced_JavaScript/main/json';

// - Создание основного объекта класса Vue, для работы с фреймворком
const app = new Vue({

    // - ИД элемента HTML для которого применены все свойства и методы Vue
    el: '#app',

    // - свойства объекта Vue
    data: {
        error: false,
        errorText: ''
    },

    // - методы объекта Vue
    methods: {
        getJson(url) {
            this.errorText = '';
            this.error = false;
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.errorText = error;
                    this.error = true;
                })

        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.comp_error.setText(error))
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.comp_error.setText(error))
        },
        delJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.comp_error.setText(error))
        },
    },

    // - процедура, которая будет выполнена при инициализации объекта Vue
    mounted() { },

    // - список компонент данного объекта Vue, задается как const во вне,
    //  обращение к данным компонентам через:
    //      HTML - <products ref="products" ></products >, установка ссылки.
    //      JS - $refs - структура всех ссылок компонент
    components: {
        comp_header,
        comp_features,
        comp_subscribe,
        comp_footer,
        comp_catalog_products,
        comp_error
    }
});
Vue.component('myerror', {
    template: `
    <div class="myError" v-show="$root.error">
            <h4>Внимание, произошла ошибка!</h4>
            <p> {{$root.errorText}}</p>
        </div>
    `
})  
Vue.createApp({
    data() {
        return {
            producto: '',
            carrito: [
                'cebolla',
                'tomates',
                'uvas'
            ]
        }
    },
    methods: {
        agregar() {
            this.carrito.push(this.producto);
            this.producto = '';
        }
    }
}).mount('#app')
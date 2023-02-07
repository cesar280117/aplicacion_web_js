Vue.createApp({
    data() {
        return {
            nombre: '',
            precio: '',
            cantidad: '',
            url: '',
            productos: []
        }
    },
    methods: {
        agregar() {
            const producto = {
                nombre: this.nombre,
                precio: this.precio,
                cantidad: this.cantidad,
                url: this.url
            }
            this.productos.push(producto);
        }
    },
 
}).mount('#app')
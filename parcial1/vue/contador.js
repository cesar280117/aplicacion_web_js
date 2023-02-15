Vue.createApp({
    data() {
        return {
            contador: 20,
        }
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        saludo() {

        },

    }
}).mount('#app');
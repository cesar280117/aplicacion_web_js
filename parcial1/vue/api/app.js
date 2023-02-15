Vue.createApp({
    data() {
        return {
            amiibos: []
        }
    },
    methods: {
        async obtener() {
            const response = await fetch('https://amiiboapi.com/api/amiibo', {
                method: 'GET'
            });

            //sacar de la peticion el json(serian los datos en donde viene la informacion)
            const data = await response.json();
            this.amiibos = data.amiibo;
        }
    },

}).mount('#app')
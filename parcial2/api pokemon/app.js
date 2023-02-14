Vue.createApp({
    data() {
        return {
            pokemon: null
        }
    },
    methods: {
        async getPokemon() {
            //GET     ----- Obtener recursos
            //POST    ----- para crear recursos
            //PUT     ---- Modificar recursos
            //DELETE  ---- Eliminar Recuersos


            const random = Math.floor(Math.random() * 630);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+random, {
                method: 'GET'
            });
            const data = await response.json();
            this.pokemon = data;
        }
    }
}).mount('#app')
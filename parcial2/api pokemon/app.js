Vue.createApp({
    data() {
        return {
            pokemones: []
        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon() {

            //GET     ----- Obtener recursos
            //POST    ----- para crear recursos
            //PUT     -----  Modificar recursos
            //DELETE  -----  Eliminar Recuersos

            var i = 1;
            while (i <= 200) {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                });
                const pokemon = await response.json();
                this.pokemones.push(pokemon);
                i++;
            }

        }
    }
}).mount('#app')
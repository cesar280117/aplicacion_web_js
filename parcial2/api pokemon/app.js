Vue.createApp({
    data() {
        return {
            pokemones: [],
            loading: null,
            limit: 50
        }
    },
    mounted() {
        this.getPokemon(this.limit);
    },
    methods: {
        async getPokemon(limite) {
            this.pokemones = [];
            this.loading = true;
            var i = 1;
            while (i <= limite) {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                });
                const pokemon = await response.json();
                this.pokemones.push(pokemon);
                i++;
            }
            this.loading = false;
        }
    },
    computed: {
        pokemonLimit() {
            this.getPokemon(this.limit);
        }
    }
}).mount('#app')
Vue.createApp({
    data() {
        return {
            pokemones: [],
            loading: null,
            limit: 20
        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon() {
            this.loading = true;
            var i = 1;
            while (i <= this.limit) {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                });
                const pokemon = await response.json();
                this.pokemones.push(pokemon);
                i++;
            }
            this.loading = false;
        },

    },

    watch: {
        limit() {
            this.getPokemon();
        }
    }

}).mount('#app')
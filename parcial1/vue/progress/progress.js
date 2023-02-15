Vue.createApp({
    data() {
        return {
            valor: 0
        }
    },
    computed: {
        color() {
            if (this.valor > 0 && this.valor <= 40) {
                return 'success';
            } else if (this.valor > 41 && this.valor <= 80) {
                return 'warning';
            } else if (this.valor > 81 && this.valor <= 100) {
                return 'danger';
            }
        }
    }
}).mount('#app')
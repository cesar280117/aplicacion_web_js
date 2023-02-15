Vue.createApp({
    data() {
        return {
            cursos: [],
            nombre: '',
            url: '',
            descripcion: '',
            precio: '',
            cantidad: ''
        }
    },
    methods: {
        agregar() {
            let curso = {
                nombre: this.nombre,
                url: this.url,
                descripcion: this.descripcion,
                precio: this.precio,
                cantidad: this.cantidad
            }
            this.cursos.push(curso);
        }
    },
    computed: {
        calcular() {

          
            total = 0;
            this.cursos.forEach(curso => {
                total += curso.precio * curso.cantidad;
            });
            return total;
        }


    }
}).mount('#app')

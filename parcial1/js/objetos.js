const persona = {
    nombre: 'cesar',
    edad: 25,
    genero: 'Masculino',
    email: 'cesar@gmail.com',
    carrera: 'Ingenieria en software',
    becado: true
}

//const nombre = persona.nombre;
//const edad = persona.edad;
//const genero = persona.genero;
//const email = persona.email;
//const carrera = persona.carrera;
//const becado = persona.becado;

const { nombre, edad, genero, email, carrera, becado } = persona;


console.log(`mi nombre es ${nombre} `)
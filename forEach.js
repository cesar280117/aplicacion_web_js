const numeros = [1, 24, 77];
const boolean = [true, false, true];

//numeros.forEach((numero) => {
//console.log(numero);
//});



const alumnos = [{
    id: 1,
    nombre: 'Cesar',
    edad: 25
}, {
    id: 2,
    nombre: 'Fabian',
    edad: 21
},
{
    id: 3,
    nombre: 'Ana',
    edad: 50
}];

alumnos.forEach((alumno) => {
    console.log(alumno.id);
    console.log(alumno.nombre);
    console.log('-----------------------------------')
});
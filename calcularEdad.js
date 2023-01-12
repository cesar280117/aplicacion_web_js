

const CalculoEdad = (edad) => {
    if (edad >= 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad');
    }
}
const edad = prompt('Dame tu edad');
CalculoEdad(19);
CalculoEdad(8);
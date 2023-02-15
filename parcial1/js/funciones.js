const edad = prompt('Captura tu edad');

const calculoEdad = (edad) => {
    if (edad < 0 || edad > 100) {
        console.log('Error. Edad erronea');
    } else if (edad < 18) {
        console.log('Eres menor de edad');
    } else if (edad >= 18) {
        console.log('Eres mayor de edad');
    }
}
calculoEdad(edad);
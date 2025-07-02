// Destrucction de objetos
const persona = {
    name: "Pedro",
    lastName: "Torres",
    age: 20,
    isEstudent: true,
    hobbies: ["swim", "play futbol", "Estudy"],
    address: {
        city: "Quillacollo",
        country: "Bolivia", 
        state: "Cochabamba"
    }
}

// la forma de destructuracion es la siguiente
const {name, lastName, age, isEstudent, hobbies, address} = persona;
console.log(name);

// obtencion de datos con destructuracion
const {address: {city, country, state}} = persona;
console.log(city);

// aplicacdo a funciones
const imprimirPersona = ({name, lastName, address: {country}}) => {
    return {
        name, lastName, country
    }
}

const datosRequeridos = imprimirPersona(persona);
console.log({datosRequeridos});

// destructutacion de arrays
const array = [1, 2, ,3 ,4 ,5, 6, 7, 8, 9, 10];
const [, , , pos ] = array;
console.log(`El número que se ubica en la posición 3 es: ${pos}`);

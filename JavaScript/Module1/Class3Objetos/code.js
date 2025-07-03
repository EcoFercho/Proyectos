// Esta es la menera de crear objetos, se puede tener objetos dentro de otro
const persona = {
    name: "Pedro",
    secondName: "Andres Torres",
    age: 20 + "años",
    isEstudent: true,
    hobbies: ["swim", "play futbol", "Estudy"],
    address: {
        city: "Quillacollo",
        country: "Bolivia", 
        state: "Cochabamba"
    }
}

console.log({persona});
console.table(persona);
console.error(persona);

// se puede acceder al objeto que se encuantra dentro del objeto principal
console.log(persona.address);
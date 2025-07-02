// Array en javascript

// Array de numeros
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.table(array)
console.log(`El valor del indice 2 es: ${array[2]}`);

// Array de de arrys -> un array dentro de otro array
const cajaNumeros = [];
const caja1 = [1, 2, 3, 4];
const caja2 = [10, 11, 12];
const caja3 = [20, 21, 22];

// metod de push, añade uno o varios elementos
cajaNumeros.push(caja1, caja2, caja3);
console.table(cajaNumeros);
console.log(`El valor del indice 2 es: ${cajaNumeros[2]}`);

// otra forma de añadir elementos de manera manual es de la siguiente manera
const nuevaCaja = [caja1, caja2, caja3];

console.table(nuevaCaja);
// hay 3 meneras de usar funciones en javaScript, veremos las 3 formas

// forma numero 1:  se define con la palabra reservada function y posterior el nombre
function imprimirSaludo(){
    return "Hola mundo";
}

console.table(imprimirSaludo());

// esto generara un error por que ya esta definido el nombre imprimirSaludo en la funcion
//const imprimirSaludo = "hola mundo";
//console.log(imprimirSaludo);

// forma numero 2: se define una funcnion con la palabra reservada const y posterior el nombre
const suma = function(valor1, valor2){
    let resultado = valor1 + valor2;

    return resultado
}

console.table(`El resultado de la suma es: ${suma(5, 6)}`);

// forma numero 3: son funcniones flecha, se usa la forma 2 en su declaracion, la mas usada
const  resta = (valor1, valor2) => {
    let resultado = valor1 - valor2;

    return resultado;
}

console.table(`El resultado de la resta es: ${resta(10, 11)}`);

// otro alternativa de usar las funciones flecha
const  resta2 = (valor1, valor2) => valor1 - valor2;

console.table(`El valor de la resta es: ${resta2(2, 6)}`);
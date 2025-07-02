// Las condiciones en java scriopt se usan con el condicional if, else if y else

const edad = 20;
const edadMinima = 10;

// condicional de forma clasico if y else
if (edad <= edadMinima){
    console.log("La persona es menor de edad, por lo que no puedes conducir");
}else{
    console.log("La persona puede conducir el vehiculo, es mayor de edad");
}

// condicional con operador ternario
const respuesta = (edad <= edadMinima) ? "No puedes conducir" : "Puedes conducir";
console.log(respuesta);


// haciendo una peticion a una api

const url = "https://microservice-estudiante.onrender.com/";

fetch(url + "api/estudiantes/10")
.then((resultado) => {
    return resultado.json()})
.then((data) => {
    console.log(data)})

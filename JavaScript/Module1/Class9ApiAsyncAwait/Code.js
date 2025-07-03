const url = "https://microservice-estudiante.onrender.com/";

const getEstudiantes = async () =>{
    try{
        const response = await fetch(url + "api/estudiantes/");
        if(!response.ok){
            throw new Error(`Error en la solicutud HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log('Ocurrió un error al obtener los datos:', error.message);
        return {error: `Ocurrió un error al obtener los datos: ${error.message}`};
    }
}

// const estudiantes = async () => {
//     const estudiantes = await getEstudiantes();
//     console.log(estudiantes);
// }

console.log("esta funcionando");

getEstudiantes();
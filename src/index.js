//Funcion para simular la descarga de un archivo, utilizando promesas
function descargarArchivo(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Archivo descargado con exito")
        }, 3000);
    })
}

// console.log(descargarArchivo().then((resultado)=>{console.log(resultado)}))


//Funcion con Async 
async function ejecutar(){
    //esta promesa tiene dos tiempos, la funcion "ejecutar" debe esperar todo lo que esta adentro de ella se ejecute
    //a su vez, el try catch tiene que esperar a que la otra funcion se ejecute
    try {
        console.log("Descarga en proceso")
        const respuesta = await descargarArchivo()
        console.log(respuesta)
    } catch (error) {
        console.error("La descarga ha fallado con exito", error)
    }
}

ejecutar()
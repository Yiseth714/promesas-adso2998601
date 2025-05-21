//Funcion con Async 

async function ejecutar(){
    //esta promesa tiene dos tiempos, la funcion "ejecutar" debe esperar todo lo que esta adentro de ella se ejecute
    //a su vez, el try catch tiene que esperar a que la otra funcion se ejecute
    try {
        console.log("Descarga en proceso")
        const respuesta = await 
    } catch (error) {
        console.log("La descarga ha fallado con exito")
    }
}
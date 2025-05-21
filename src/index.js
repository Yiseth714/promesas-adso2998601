function eliminarArchivo(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Archivo eliminado")
        }, 8000);
    })
}

async function eliminarE(){
    try{
        console.log("Archivo eliminandose...")
        const respuesta = await eliminarArchivo()
        console.log(respuesta)
    } catch(error){
        console.log("El archivo no pudo ser eliminado", error)
    }
}

eliminarE()
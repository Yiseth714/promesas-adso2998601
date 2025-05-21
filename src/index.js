//Funcion para simular la descarga de un archivo, utilizando promesas

function descargarArchivo(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Archivo descargado con exito")
        }, 3000);
    })
}

console.log(descargarArchivo().then((resultado)=>{console.log(resultado)}))


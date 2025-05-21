const verificarContraseña=(con)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(con.length>=2){
                resolve("la contraseña es valida")}
            else{
                reject("la contraseña no cumple")
            }
        }, 1000);
    })
}

async function eliminarE(){
    try{
        console.log("Contraseña verificandose...")
        const respuesta = await verificarContraseña("01234567");
        console.log(respuesta)
    } catch(error){
        console.log("El archivo no pudo ser eliminado", error)
    }
}

eliminarE()
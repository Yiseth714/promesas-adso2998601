// const boolean = (valor)=> {
//     return new Promise((resolve, reject) =>{
        
//         setTimeout(() => {
//             if(valor==true){
//             resolve("el valor es positivo")
//             }else{
//                 reject("el valor es falso")
//             }
//         }, 2000);
//     })
// }

// async function ejecutarBoleean(){
//     try{
//         console.log("Verificando...")
//         const a= false;
//         const respuesta = await boolean(a)
//         console.log(respuesta)
//     } catch(error){
//         console.log("El valor no pudo verificarse", error)
//     }
// }

// ejecutarBoleean()

function boolean () {
    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            const valor= true;
            if(valor==true){
            resolve("el valor es positivo")
            }else{
            reject("el valor es falso")
            }
        }, 2000);
    })
}


boolean()
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
window.onload = ()=>{
    let salidat = document.querySelector(".texto");

    let origen = ("https://www.jaimeweb.es/medac/blackwater.txt");
    fetch(origen)
    .then(function(respuesta){
        //Si hay error, devuelvo ERROR
        if(!respuesta.ok){
            throw new Error("Error al cargar datos del archivo")
        }
        //Si hay datos, devuelvo los datos en el formato que yo quiera
        //return respuesta.text();
        return respuesta.text();
    })
    .then(function(datos){
        //let res = JSON.stringify(datos);
        salidat.textContent = datos;
    })
    .catch(function(errorcito){ 
        console.error(errorcito)
    })


}
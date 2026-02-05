window.onload = function(){

    let salida = document.querySelector("section");

    document.querySelector("input").addEventListener("click",function(e){

        let origen = "libros.json";

        fetch(origen)
        .then(function(respuesta){
            //Si hay error, devuelvo ERROR
            if(!respuesta.ok){
                throw new Error("Error al cargar datos del archivo")
            }
            //Si hay datos, devuelvo los datos en el formato que yo quiera
            //return respuesta.text();
            return respuesta.json();
        })
        .then(function(datos){
            //TRATAR los datos que me han llegado
            for(libro of datos){     
                let caja = document.createElement("article");
                caja.textContent = libro.title;
                salida.appendChild(caja)
            }
        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })


    })


}
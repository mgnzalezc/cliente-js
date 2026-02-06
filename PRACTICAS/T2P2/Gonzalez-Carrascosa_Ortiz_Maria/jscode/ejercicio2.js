window.onload = ()=>{
    let boton = document.querySelector("input");

    let origen = ("https://www.jaimeweb.es/medac/datos.json");

    boton.addEventListener("click", ()=>{
        fetch(origen)
        .then(function(respuesta){
            //Si hay error, devuelvo ERROR
            if(!respuesta.ok){
                throw new Error("Error al cargar datos del archivo")
            }
            //Si hay datos, devuelvo los datos en el formato que yo quiera
            //return respuesta.text();

            //apartado 1

            console.log(respuesta);
            return respuesta.json();
        })
        .then(function(datos){

                //apartado 2
                for (const key in datos) {
                    console.log(datos[key])
                };

                //apartado 3
                let res = "";
                for (const element of datos) {
                    for (const key in element) {

                        res += key + ": "
                        res += element[key];
                        res += "\n"
                    };
                    res += "===============\n"
                }
                console.log(res);
        })
        .catch(function(errorcito){ 
        console.error(errorcito)
        })
    
    
    });


}
window.onload = function(){

    let boton = document.querySelector("#btnCargar");
    let salida = document.querySelector(".catalogo");

    let origen = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";

    //BOTON B
    boton.addEventListener("click",function(e){

        fetch(origen)
        .then(function(respuesta){
            //Si hay error, devuelvo ERROR
            if(!respuesta.ok){
                throw new Error("Error al cargar datos del archivo")
            }
            //Si hay datos, devuelvo los datos en el formato que yo quiera
            console.log(respuesta);
            return respuesta.text();
        })
        .then(function(datos){
            //resetear
            datos = JSON.parse(datos);
            salida.textContent = "";
            
            for (const current of datos) {
                let tarjeta = document.createElement("article");
                tarjeta.setAttribute("class","juego");

                let foto = document.createElement("img");
                foto.setAttribute("src",current.imagen);

                let titulo = document.createElement("h2");
                titulo.textContent = current.nombre;

                let descrip = document.createElement("p");
                descrip.textContent = current.descripcion;

                tarjeta.appendChild(foto);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(descrip);

                salida.appendChild(tarjeta);

            }
             
        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })

    })

}
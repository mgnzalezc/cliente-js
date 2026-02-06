window.onload = function(){

    let botones = document.querySelectorAll("input");
    let salida = document.querySelector("div");

    let origen = "https://randomuser.me/api";
    
    //BOTON A
    botones[0].addEventListener("click",function(e){
        
        fetch(origen)
        .then(function(respuesta){
            //Si hay error, devuelvo ERROR
            if(!respuesta.ok){
                throw new Error("Error al cargar datos del archivo")
            }
            //Si hay datos, devuelvo los datos en el formato que yo quiera
            
            console.log(respuesta);
            return respuesta.json();
        })
        .then(function(datos){

        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })

    })

    //BOTON B
    botones[1].addEventListener("click",function(e){

        fetch(origen)
        .then(function(respuesta){
            //Si hay error, devuelvo ERROR
            if(!respuesta.ok){
                throw new Error("Error al cargar datos del archivo")
            }
            //Si hay datos, devuelvo los datos en el formato que yo quiera
            return respuesta.json();
        })
        .then(function(datos){
            //GUARDAR EN SALIDA
            //ARTICULOS:
            let card = document.createElement("article");
            card.setAttribute("class", "usuario")
            //queremos nombre, apellidos, edad, img
            let res = document.createElement("p");
            let nombre = datos["results"][0]["name"];
            let dob = datos["results"][0]["dob"];
            let foto = datos["results"][0]["picture"];
            
            let imagen = document.createElement("img")
            imagen.setAttribute("src", foto.medium);
            
            res.textContent += nombre.first + " ";
            res.textContent += nombre.last + ": ";
            res.textContent += dob.age + " años";

            card.appendChild(res);
            card.appendChild(imagen);
            salida.appendChild(card);
            
        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })

    })

}
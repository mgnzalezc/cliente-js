window.onload = function(){

    let salida = document.querySelector("section");
    

        let origen = "https://dragonball-api.com/api/characters";

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
            
            for (const key in datos["items"]) { //aqui es un array con muchos objetos
                let caja = document.createElement("article");
                caja.innerHTML += datos["items"][key]["name"]+"<br>";
                caja.innerHTML += datos["items"][key]["maxKi"]+"<br>";

                let foto = document.createElement("img");
                foto.src = datos["items"][key]["image"];
                caja.appendChild(foto);
                salida.appendChild(caja);

                let id = datos["items"][key]["id"];
                caja.setAttribute("id", id);

                caja.addEventListener("click", ()=>{
                    let res = caja.id;
                    sessionStorage.setItem("id", res);
                    //console.log(res)
                    location.href = "personaje.html";
                });

            }

        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })

}
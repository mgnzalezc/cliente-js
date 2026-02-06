window.onload = ()=>{

    let volver = document.querySelector("button");
    volver.addEventListener("click", ()=>{
        location.href="index.html"
    })
    

    let personaje = sessionStorage.getItem("id");

    let salida = document.querySelector("#detalles");

    let origen = "https://dragonball-api.com/api/characters/"+personaje;

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
            let nombre = document.createElement("h1");
            nombre.textContent = (datos.name);

            // añado
            salida.appendChild(nombre);

            let article = document.createElement("div"); //foto y descr
            //dentro de article - descrip
            let p = document.createElement("p");
            p.textContent = (datos.description);
            article.appendChild(p);
            let imagen = document.createElement("img");
            imagen.setAttribute("src", datos.image);
            article.appendChild(imagen);

            article.setAttribute("class", "info-principal");

            // añado
            salida.appendChild(article);

            // PLANETAS
            let pla = document.createElement("h2");
            pla.textContent = "Planeta de origen";
            // añado
            salida.appendChild(pla);

            let planetaname = document.createElement("h3");
            planetaname.textContent = (datos.originPlanet.name);
            // añado nombre planeta
            salida.appendChild(planetaname);

            //div para meter todo

            let divplaneta = document.createElement("div");

            //
            let planetades = document.createElement("p");
            planetades.textContent = (datos.originPlanet.description);
            //añado descrp planeta
            divplaneta.appendChild(planetades);

            //let 
            planetafoto = document.createElement("img");
            planetafoto.src = (datos.originPlanet.image);
            //añado foto planeta
            divplaneta.appendChild(planetafoto);

            
            divplaneta.setAttribute("class", "planeta");
            salida.appendChild(divplaneta);


            //TANSFORMACIONES
            let divtrans = document.createElement("div");

            let tr = document.createElement("h2");
            tr.textContent = "Transformaciones";
            // añado
            salida.appendChild(tr);

            //for de transformaciones
            for (const tra of datos.transformations) {
                let caja = document.createElement("article");
                caja.innerHTML = tra.name +"<br>";
                tfoto = document.createElement("img");
                tfoto.src = tra.image;
                //añado foto
                caja.appendChild(tfoto);
                caja.innerHTML += tra.ki +"<br>";

                divtrans.appendChild(caja);
            }


            //añado a dom
            divtrans.setAttribute("class", "planeta");
            salida.appendChild(divtrans);


        })
        .catch(function(errorcito){ 
            console.error(errorcito)
        })








    

}
window.onload = ()=> {
    crearTitulo();
    mostrarBiblioteca();

}

function crearTitulo(){
    let tam = library.length;
    let frase = "Hay "+tam+" libros en la biblioteca";
    document.querySelector("h1").textContent = frase;

}

function mostrarBiblioteca(){
    let papi = document.querySelector("section");

    for(const libro of library){
        let articulo = document.createElement("article");
        articulo.setAttribute("class","presentacion");
        papi.appendChild(articulo);

        //dentro de cada article
        let titulo = document.createElement("h3");
        titulo.textContent = libro.title;
        articulo.appendChild(titulo);


        //imagen dentro de article
        let foto = document.createElement("img");
        foto.setAttribute("src", libro.cover);
        articulo.appendChild(foto);

        //info del libro
        foto.addEventListener("click", ()=>{
            //1. guardo info de ese libro en sessionStorage
            //2. me muevo a la pagina de mostrar.html
            location.href = "mostrar.html"; //location es un objeto del navegador
        })

    }

}
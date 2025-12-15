window.onload = ()=>{
    let boton = document.querySelector("input[type='button']");
    let text = document.querySelector("#text");

    boton.addEventListener("click", ()=> {
        //crear nodo div con texto
        let toAdd = text.value;

        let nuevo = document.createElement("div");
        nuevo.style.textAlign="center";
        nuevo.style.width="800px";
        nuevo.style.height="100px";
        nuevo.style.backgroundColor="burlywood";
        nuevo.style.margin="50px";
        nuevo.style.padding="50px";
        nuevo.style.justifySelf="center";

        let textoNuevo = document.createTextNode(toAdd);
        nuevo.appendChild(textoNuevo);

        let padre = document.querySelector("body");
        padre.appendChild(nuevo);


    });
}
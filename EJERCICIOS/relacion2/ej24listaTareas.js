window.onload = () => {
    const aPpio = document.querySelector("#aPpio");
    const aFinal = document.querySelector("#aFinal");
    const bPpio = document.querySelector("#bPpio");
    const bFinal = document.querySelector("#bFinal");
    
    aPpio.onclick = ()=>{
        let nuevoLi = document.createElement("li");
        let texto = document.createTextNode(prompt("Añade texto al principio:"));
        nuevoLi.appendChild(texto);
        let lista = document.querySelector("ul");
        lista.insertBefore(nuevoLi, lista.firstChild); //porque no va lista.elements[0]? porque elements es solo para form
    }

    aFinal.onclick = ()=>{
        let nuevoLi = document.createElement("li");
        let texto = document.createTextNode(prompt("Añade texto al final:"));
        nuevoLi.appendChild(texto);
        let lista = document.querySelector("ul");
        lista.appendChild(nuevoLi);
    }

    bPpio.onclick = ()=>{
        let aBorrar = document.querySelectorAll("li")[0];
        aBorrar.parentNode.removeChild(aBorrar); 
    }

    bFinal.onclick = ()=>{
        let lista = document.querySelectorAll("li");
        let aBorrar = lista[lista.length-1];
        aBorrar.parentNode.removeChild(aBorrar); 
    }
}
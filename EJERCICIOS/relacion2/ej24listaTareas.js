window.onload = () => {
    const aPpio = document.querySelector("#aPpio");
    const aFinal = document.querySelector("#aFinal");
    const bPpio = document.querySelector("#bPpio");
    const bFinal = document.querySelector("#bFinal");
    
    aPpio.onclick = ()=>{
        let nuevoLi = document.createElement("li");
        let texto = prompt("Añade texto al final:");
        nuevoLi.appendChild(texto);
        
    }
    

}
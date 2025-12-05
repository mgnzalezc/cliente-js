window.onload = () => {
    let opciones = document.querySelectorAll("input[type='checkbox']"); //aqui se puede seguir añadiendo?
    let copyTo = document.querySelector("textarea");
    let boton = document.querySelector("input[type='button']");

    boton.onclick = ()=>{
        copyTo.value = "";
        for (let i = 0; i < opciones.length; i++) {
            if(opciones[i].checked){
                copyTo.value += opciones[i].value + "\n";
            }
        }
        
    }

}
window.onload = ()=>{
    let botones = document.querySelectorAll("input");
    let botonAnadir = botones[0];
    let botonLimpiar = botones[1];
    let galeria = document.querySelector("#contenedor");

    botonAnadir.onclick = ()=>{

        botonLimpiar.disabled = false;
        let nombreFoto = prompt("Introduce el nombre de la foto a añadir y su extension") || "terra.jpg";

        let nuevaFoto = document.createElement("img");
        nuevaFoto.setAttribute("src", "img/"+nombreFoto);
        nuevaFoto.className = "foto";

        galeria.appendChild(nuevaFoto);

    }

    botonLimpiar.onclick = ()=>{
        let limpiarGaleria = document.querySelectorAll("img");
        let padre = limpiarGaleria[0].parentNode;
        
        limpiarGaleria.forEach(element => {
            padre.removeChild(element);
        });
        
    }
    
}
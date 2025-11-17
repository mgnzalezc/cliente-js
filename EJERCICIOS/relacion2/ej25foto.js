window.onload = ()=>{
    let foto = document.querySelector("img");

    
    foto.onclick = ()=>{
        let fondo = document.createElement("div");
        fondo.style.setProperty("position", "fixed");
        fondo.style.setProperty("top", "0");
        fondo.style.setProperty("left", "0");
        fondo.style.setProperty("width", "100vw");
        fondo.style.setProperty("height", "100vh");
        fondo.style.setProperty("background-color", "rgba(0,0,0,0.5)");
        fondo.style.setProperty("z-index", "2");
        fondo.style.setProperty("display", "flex");
        fondo.style.setProperty("align-items", "center");
        fondo.style.setProperty("justify-content", "center");

        let nuevaFoto = document.createElement("img");
        nuevaFoto.setAttribute("src", "foto/Otter1.jpg");
        nuevaFoto.style.setProperty("width","1280px");
        nuevaFoto.style.setProperty("height","720px");
        nuevaFoto.style.setProperty("margin-left","60px");
        nuevaFoto.style.setProperty("margin-right","60px");

        fondo.appendChild(nuevaFoto);

        document.body.appendChild(fondo);

        fondo.onclick = () =>{
        document.body.removeChild(fondo);
    }
        
    }

    
}
window.onload = ()=>{
    let libro = JSON.parse(sessionStorage.getItem("libroMostrar"));

    // cambiamos enlace
    let enlace = document.querySelector("footer a").href="inicio.html";
    // cogemos padre
    let info = document.querySelector("#info");
    
    // TITULO
    let titulo = document.createElement("h3");
    titulo.textContent = libro.title;
    info.appendChild(titulo);


    // TABLA
    let table = document.createElement("table");
    info.appendChild(table);

    for (const key in libro) {
        if (key != "cover" && key!= "title"){
            let tr = document.createElement("tr");
            let tdI = document.createElement("td");
            let tdD = document.createElement("td");
                
            if(key == "author"){
                tdI.textContent = key;
                tdD.textContent = libro[key]["name"];
            }else{
                tdI.textContent = key;
                tdD.textContent = libro[key];
            }

            tr.appendChild(tdI);
            tr.appendChild(tdD);

            table.appendChild(tr);

            
        } 
        // FOTO
        else if(key == "cover"){
            let foto = document.createElement("img");
            foto.setAttribute("src", libro['cover']);
            foto.setAttribute("alt", "foto portada");
            info.appendChild(foto);
        }
        
    }

    
}
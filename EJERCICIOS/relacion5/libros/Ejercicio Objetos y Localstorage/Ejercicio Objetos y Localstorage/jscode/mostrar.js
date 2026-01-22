window.onload = ()=>{
    let libro = JSON.parse(sessionStorage.getItem("libroMostrar"));
    console.log(libro);
    console.log(libro.key);
    let table = document.createElement("table")
    let info = document.querySelector("#info")

    info.appendChild(table);


    for (const key in libro) {
        
        let tr = document.createElement("tr")
        let tdI = document.createElement("td")
        let tdD = document.createElement("td")
        
            
        if(key == "author"){
            tdI.textContent = key 
            tdD.textContent = libro[key]["name"] 
        }else{
            tdI.textContent = key 
            tdD.textContent = libro[key]
        }

        tr.appendChild(tdI)
        tr.appendChild(tdD)

        table.appendChild(tr)


        
        
    }


    


    
}
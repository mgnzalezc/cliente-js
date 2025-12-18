window.onload = () =>{
    let opciones = document.querySelectorAll("input[type='checkbox']"); //aqui se puede seguir añadiendo?
    let desplegable = document.querySelector("#desplegable");

    // TERMINAR ESTO

    for(element of opciones) { //cada vez que se pulse un check
        element.onclick = () => {
            
            if(element.checked){
                let text = element.name;
                let nuevaOpcion = document.createElement("option");
                nuevaOpcion.value = text;
                nuevaOpcion.className = text;
                desplegable.appendChild(nuevaOpcion);
                
            }else{
                let nombre = element.name;
                let toDelete = document.querySelector("option[name='"+nombre+"']");
                let padre = document.querySelector("#desplegable");
                padre.removeChild(toDelete);

            }
            


            
            //let pais = document.createTextNode(text);̣ ̣
            
            

        }
    }
}
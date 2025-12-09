window.onload = () => {
    let opciones = document.querySelectorAll("input[type='checkbox']"); //aqui se puede seguir añadiendo?
    let copyTo = document.querySelector("textarea");
    let res = "";

    for(element of opciones) { //asi se hace el foreach aqui
        element.onclick = () => {
            copyTo.value = "";
            res = "";
                
            for(toAdd of opciones) {
                if(toAdd.checked){
                    res += toAdd.value + "\n";
                }
            };

            copyTo.value = res;
            
        }
    };


    /*
    lo mismo pero con el foreach antiguo:

        opciones.forEach(element => {
        element.onclick = () => {
            copyTo.value = "";
            res = "";
            
            opciones.forEach(toAdd => {
                if(toAdd.checked){
                    res += toAdd.value + "\n";
                }
            });

            copyTo.value = res;
        
        }
    });

    
    */


}
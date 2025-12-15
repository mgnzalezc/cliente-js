window.onload = ()=>{
    //let opciones = document.querySelectorAll("input[type='radio']");
    let opcionesBoton = document.getElementsByName("color");
    let opcionesSelect = document.getElementsByTagName("option");
    let cuadro = document.querySelector("#cuadro");
    let boton = document.querySelector("input[type='button']");

    //hay que controlar muchas cosas como q haya color en ambos o ambos sea "selecciona el otro"

    boton.addEventListener("click", ()=>{
        for(element of opcionesBoton) {
            if(element.checked){
                if(element.value == "desplegable"){
                    for(seleccionado of opcionesSelect) {
                        if(seleccionado.selected){
                            let colorNuevo = seleccionado.value;
                            cuadro.style.backgroundColor = colorNuevo;
                        }
                    } 
                } else {
                    let colorNuevo = element.value;
                    cuadro.style.backgroundColor = colorNuevo;
                }
                
            }
        }

        for(seleccionado of opcionesSelect) {
            if(seleccionado.selected){
                if(seleccionado.value == "radio"){
                    for(element of opcionesBoton) {
                        if(element.checked){
                            let colorNuevo = element.value;
                            cuadro.style.backgroundColor = colorNuevo;
                        }
                    }
                } else {
                    let colorNuevo = seleccionado.value;
                    cuadro.style.backgroundColor = colorNuevo;
                }
                
            }
        }

    });



}
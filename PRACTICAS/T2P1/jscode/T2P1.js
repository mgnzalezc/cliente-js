window.onload = ()=>{
    let formu = document.querySelector("form");

    // FUNCIONALIDADES
    formu.email.onkeyup = () => {
        formu.remail.value = formu.email.value;
    }

    let opciones = document.querySelectorAll("input[type='checkbox']");
    let copyTo = document.querySelector("#afiText");

    for(element of opciones) { //asi se hace el foreach aqui
        element.onclick = () => {
            copyTo.value = "";
            res = "";
                
            for(toAdd of opciones) {
                if(toAdd.checked && toAdd != opciones[3]){
                    res += toAdd.value + "\n";
                }
            };

            copyTo.value = res;
            
        }
    };

    let resetear = document.querySelector('input[type="reset"]');
    let enviar = document.querySelector("input[type='submit']");

    resetear.addEventListener("click", (e)=>{
        e.preventDefault();
        let confirmacion = confirm("Estas seguro que quires borrar todo?");
        if (confirmacion){
            formu.reset();
        }
    });

    
    // VALIDAR 

    enviar.addEventListener("click", (e)=>{
        e.preventDefault();
        borrar(formu);

        let count = 0;

        let nombre = formu.nombre;
        nombre.value = nombre.value.trim();
        if(nombre.value == ""){
            formu.nombre.style.border = "2px solid #b00020";
            let errorNombrev = document.createElement("p");
            errorNombrev.textContent = "El nombre no puede estar vacío";
            errorNombrev.id = "errores";
            errorNombrev.style.color = "#b00020";
            errorNombrev.style.fontSize = "10px";
            errorNombrev.style.margin = "2px";
            errorNombrev.style.padding = "2px";
            errorNombrev.style.backgroundColor = "#fdecea";
            errorNombrev.style.borderLeft = "5px solid #b00020";
            errorNombrev.style.borderRadius = "4px";
            errorNombrev.style.width = "fit-content";
            let error = document.querySelectorAll(".letras")[0];
            error.appendChild(errorNombrev);
           return;
        } else{
            count++;
            borrar(formu);
        }

        let clave = formu.clave;
        clave.value = clave.value.trim();
        if(clave.value == "" || clave.value.length<8){
            formu.clave.style.border = "2px solid #b00020";
            let errorClave = document.createElement("p");
            errorClave.textContent = "Clave erronea";
            errorClave.className = "errores";
            errorClave.style.color = "#b00020";
            errorClave.style.fontSize = "10px";
            errorClave.style.margin = "2px";
            errorClave.style.padding = "2px";
            errorClave.style.backgroundColor = "#fdecea";
            errorClave.style.borderLeft = "5px solid #b00020";
            errorClave.style.borderRadius = "4px";
            errorClave.style.width = "fit-content";
            let error = document.querySelectorAll(".letras")[1];
            error.appendChild(errorClave);
            return;
        } else if(clave.value == nombre.value){
            formu.clave.style.border = "2px solid #b00020";
            let errorClave = document.createElement("p");
            errorClave.textContent = "Clave no puede coincidir con nombre";
            errorClave.id = "errores";
            errorClave.style.color = "#b00020";
            errorClave.style.fontSize = "10px";
            errorClave.style.margin = "2px";
            errorClave.style.padding = "2px";
            errorClave.style.backgroundColor = "#fdecea";
            errorClave.style.borderLeft = "5px solid #b00020";
            errorClave.style.borderRadius = "4px";
            errorClave.style.width = "fit-content";
            let error = document.querySelectorAll(".letras")[1];
            error.appendChild(errorClave);
            return;
        }
        else {
            count++;
            borrar(formu);
        }

        let repiteclave = document.querySelectorAll("input[type='password']")[1];
        repiteclave.value = repiteclave.value.trim();
        if(repiteclave.value == "" || repiteclave.value != clave.value){
            repiteclave.style.border = "2px solid #b00020";
            let errorClave = document.createElement("p");
            errorClave.textContent = "Clave no puede estar vacía";
            errorClave.id = "errores";
            errorClave.style.color = "#b00020";
            errorClave.style.fontSize = "10px";
            errorClave.style.margin = "2px";
            errorClave.style.padding = "2px";
            errorClave.style.backgroundColor = "#fdecea";
            errorClave.style.borderLeft = "5px solid #b00020";
            errorClave.style.borderRadius = "4px";
            errorClave.style.width = "fit-content";
            let error = document.querySelectorAll(".letras")[2];
            error.appendChild(errorClave);
            if(repiteclave.value != clave.value){
                errorClave.textContent = "Clave no coincide";
                repiteclave.value = "";
                clave.value = "";
            }
            
            return;
        } else{
            count++;
            borrar(formu);
        }
        
        if(formu.pregunta.selectedIndex == 0){
            let error = document.createElement("p");
            error.textContent = "Elige una pregunta";
            error.id = "errores";
            error.style.color = "#b00020";
            error.style.fontSize = "10px";
            error.style.margin = "2px";
            error.style.padding = "2px";
            error.style.backgroundColor = "#fdecea";
            error.style.borderLeft = "5px solid #b00020";
            error.style.borderRadius = "4px";
            error.style.width = "fit-content";
            let werror = document.querySelectorAll(".letras")[3];
            werror.appendChild(error);
            return;
        } else{
            count++;
            borrar(formu);
        }
        


        let respuesta = formu.respuesta;
        respuesta.value = respuesta.value.trim();
        if(respuesta.value == "" || respuesta.value.length<6){
            respuesta.style.border = "2px solid #b00020";
            let error = document.createElement("p");
            error.textContent = "Este campo no puede estar vacío";
            error.id = "errores";
            error.style.color = "#b00020";
            error.style.fontSize = "10px";
            error.style.margin = "2px";
            error.style.padding = "2px";
            error.style.backgroundColor = "#fdecea";
            error.style.borderLeft = "5px solid #b00020";
            error.style.borderRadius = "4px";
            error.style.width = "fit-content";
            if(respuesta.value.length<6){
                error.textContent = "Este campo no puede ser tan corto";
            }
            let werror = document.querySelectorAll(".letras")[4];
            werror.appendChild(error);
            return;
        } else{
            count++;
            borrar(formu);
        }

        if(formu.sexo.value==""){
            let error = document.createElement("p");
            error.textContent = "Selecciona un boton porfavor";
            error.id = "errores";
            error.style.color = "#b00020";
            error.style.fontSize = "10px";
            error.style.margin = "2px";
            error.style.padding = "2px";
            error.style.backgroundColor = "#fdecea";
            error.style.borderLeft = "5px solid #b00020";
            error.style.borderRadius = "4px";
            error.style.width = "fit-content";
            let werror = document.querySelectorAll(".letras")[5];
            werror.appendChild(error);
            return;
        }else{
            count++;
            borrar(formu);
    
        }

        let edad = formu.edad;
        edad.value = edad.value.trim();
        if(edad.value == "" || edad.value<9){
            edad.style.border = "2px solid #b00020";
            let error = document.createElement("p");
            error.textContent = "La edad no valida";
            error.id = "errores";
            error.style.color = "#b00020";
            error.style.fontSize = "10px";
            error.style.margin = "2px";
            error.style.padding = "2px";
            error.style.backgroundColor = "#fdecea";
            error.style.borderLeft = "5px solid #b00020";
            error.style.borderRadius = "4px";
            error.style.width = "fit-content";
            let werror = document.querySelectorAll(".letras")[6];
            werror.appendChild(error);
            return;
        } else{
            count++;
            borrar(formu);
        }

        
        let capcha = document.querySelectorAll("input[type='text']")[5];
        capcha.value = capcha.value.trim();
        if(capcha.value != "QGPHJD"){
            capcha.style.border = "2px solid #b00020";
            let error = document.createElement("p");
            error.textContent = "Capcha no valido";
            error.id = "errores";
            error.style.color = "#b00020";
            error.style.fontSize = "10px";
            error.style.margin = "2px";
            error.style.padding = "2px";
            error.style.backgroundColor = "#fdecea";
            error.style.borderLeft = "5px solid #b00020";
            error.style.borderRadius = "4px";
            error.style.width = "fit-content";
            let werror = document.querySelectorAll(".letras")[10];
            werror.appendChild(error);
            return;
        } else{
            count++;
            borrar(formu)
        }

        borrar(formu);

        if(count==8){
            formu.setAttribute("method", "GET");
            formu.setAttribute("action", "bien.html");
            formu.submit();
        }
        

    });

}

function borrar(formu){
    let parra = document.querySelectorAll("p");
    for (const current of parra) {
       let papa = current.parentNode;
        papa.removeChild(current);
    }

    for (const element of formu) {
        element.style.border = "1pt";
    }
}
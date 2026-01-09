window.onload = ()=>{
    let formu = document.querySelector("form");
    let inputs = document.querySelectorAll("input");
    let count = false; // si es negativo han habido errores y no se manda el form

    inputs.forEach(element => {
        element.addEventListener("blur", () => {
            borrar(formu);
            count = false;

            let dni = formu.dni;
            dni.value = dni.value.trim(); //esto se puede hacer en una linea pero prefiero acostumbrarme al .value
            let apellidos = formu.apellidos;
            apellidos.value = apellidos.value.trim();
            let nombre = formu.nombre;
            nombre.value = nombre.value.trim();
            let fecha = formu.fecha;
            fecha.value = fecha.value.trim();
            let web = formu.web;
            web.value = web.value.trim();
            let password = formu.password;
            password.value = password.value.trim();

            if(dni.value == "" || dni.value.length != 9){
                let errorDNIv = document.createElement("p");
                if(dni.value == ""){
                    errorDNIv.textContent = "El DNI no puede estar vacío";
                } else {
                    errorDNIv.textContent = "Inserta un DNI válido";
                }
                errorDNIv.style.color = "#b00020";
                errorDNIv.style.fontSize = "10px";
                errorDNIv.style.margin = "5px";
                errorDNIv.style.padding = "6px";
                errorDNIv.style.backgroundColor = "#fdecea";
                errorDNIv.style.borderLeft = "5px solid #b00020";
                errorDNIv.style.borderRadius = "4px";
                errorDNIv.style.width = "fit-content";
                formu.insertBefore(errorDNIv, formu.dni);
                
                return;
            } else {
                count = true;
            }

            let checkNombre = nombre.value.split(" ");

            if(nombre.value == "" || checkNombre.length>2){
                let errorNombrev = document.createElement("p");
                if(nombre.value == "" ){
                    errorNombrev.textContent = "El nombre no puede estar vacío";
                } else {
                    errorNombrev.textContent = "Insertar máximo dos nombres";
                }
                errorNombrev.style.color = "#b00020";
                errorNombrev.style.fontSize = "10px";
                errorNombrev.style.margin = "5px";
                errorNombrev.style.padding = "6px";
                errorNombrev.style.backgroundColor = "#fdecea";
                errorNombrev.style.borderLeft = "5px solid #b00020";
                errorNombrev.style.borderRadius = "4px";
                errorNombrev.style.width = "fit-content";
                formu.insertBefore(errorNombrev, formu.nombre);
                
                return;
            }else {
                count = true;
            }

            let checkApellidos = apellidos.value.split(" ");

            if(apellidos.value == "" || checkApellidos.length>2){
                let errorAp = document.createElement("p");
                if(apellidos.value == "" ){
                    errorAp.textContent = "El apellido no puede estar vacío";
                } else {
                    errorAp.textContent = "Insertar máximo dos apellidos";
                }
                errorAp.style.color = "#b00020";
                errorAp.style.fontSize = "10px";
                errorAp.style.margin = "5px";
                errorAp.style.padding = "6px";
                errorAp.style.backgroundColor = "#fdecea";
                errorAp.style.borderLeft = "5px solid #b00020";
                errorAp.style.borderRadius = "4px";
                errorAp.style.width = "fit-content";
                formu.insertBefore(errorAp, formu.apellidos);
                
                return;
            }else {
                count = true;
            }


            let arrayFecha = fecha.value.split("/");
            // array[0] dia, array[1] mes, array[2] año, 
            if(arrayFecha[0].length != 2 || arrayFecha[1].length !=2 || arrayFecha[2].length !=4 ){
                let errorFecha = document.createElement("p");
                errorFecha.textContent = "La fecha es incorrecta";
                
                errorFecha.style.color = "#b00020";
                errorFecha.style.fontSize = "10px";
                errorFecha.style.margin = "5px";
                errorFecha.style.padding = "6px";
                errorFecha.style.backgroundColor = "#fdecea";
                errorFecha.style.borderLeft = "5px solid #b00020";
                errorFecha.style.borderRadius = "4px";
                errorFecha.style.width = "fit-content";

                if(isNaN(arrayFecha[0]) || isNaN(arrayFecha[1]) || isNaN(arrayFecha[2])){
                    errorFecha.textContent = "La fecha no puede contener letras";
                    if (fecha.value == ""){
                    errorFecha.textContent = "La fecha esta vacía";
                    }
                }

                formu.insertBefore(errorFecha, formu.fecha);
                
                return;
            } else {
                count = true;
            }


            let webArray = web.value.split("//");
            if(webArray[0] != "https:"){
                let errorWeb = document.createElement("p");
                errorWeb.textContent = "La web es incorrecta";
                errorWeb.style.color = "#b00020";
                errorWeb.style.fontSize = "10px";
                errorWeb.style.margin = "5px";
                errorWeb.style.padding = "6px";
                errorWeb.style.backgroundColor = "#fdecea";
                errorWeb.style.borderLeft = "5px solid #b00020";
                errorWeb.style.borderRadius = "4px";
                errorWeb.style.width = "fit-content";

                if(web.value == ""){
                    errorWeb.textContent = "La web no puede estar vacía";
                }

                formu.insertBefore(errorWeb, formu.web);
                
                return;
            } else {
                count = true;
            }

            if(password.value.length < 8 || password.value.length > 12){
                let errorPass = document.createElement("p");
                errorPass.textContent = "La contraseña es incorrecta";
                errorPass.style.color = "#b00020";
                errorPass.style.fontSize = "10px";
                errorPass.style.margin = "5px";
                errorPass.style.padding = "6px";
                errorPass.style.backgroundColor = "#fdecea";
                errorPass.style.borderLeft = "5px solid #b00020";
                errorPass.style.borderRadius = "4px";
                errorPass.style.width = "fit-content";

                if(password.value == ""){
                    errorPass.textContent = "La contraseña no puede estar vacía";
                }

                formu.insertBefore(errorPass, formu.password);
               
                return;
            } else {
                count = true;
            }


        });
    });

    // BOTONES

    let resetear = document.querySelector('button[type="reset"]');
    let enviar = document.querySelector("button[type='submit']");
    console.log(enviar)

    resetear.addEventListener("click", (e)=>{
        e.preventDefault();
        let confirmacion = confirm("Estas seguro que quires borrar todo?");
        if (confirmacion){
            borrar(formu);
            formu.reset();
        }
    });

    enviar.addEventListener("click", (e)=>{
        e.preventDefault();
        //console.log(validarDNI(formu));


        if(count){
            formu.setAttribute("action", "ej11bien.html");
            formu.submit();
        } else{
            alert("Por favor, rellena todos los campos");
        }
    });
    

}

function borrar(formu){
    let parra = document.querySelectorAll("p");
    for (const current of parra) {
        formu.removeChild(current);
    }
}


function validarDNI(formu){
    let dni = formu.dni;
    dni.value = dni.value.trim();
    if(dni.value == "" || dni.value.length != 9){
                let errorDNIv = document.createElement("p");
                if(dni.value == ""){
                    errorDNIv.textContent = "El DNI no puede estar vacío";
                } else {
                    errorDNIv.textContent = "Inserta un DNI válido";
                }
                errorDNIv.style.color = "#b00020";
                errorDNIv.style.fontSize = "10px";
                errorDNIv.style.margin = "5px";
                errorDNIv.style.padding = "6px";
                errorDNIv.style.backgroundColor = "#fdecea";
                errorDNIv.style.borderLeft = "5px solid #b00020";
                errorDNIv.style.borderRadius = "4px";
                errorDNIv.style.width = "fit-content";
                formu.insertBefore(errorDNIv, formu.dni);
                
                return;
            }

}
window.onload = ()=>{

    //CREO DIV ERRORES Y AJUSTO EL RESTO DEL FORMULARIO

    let divErrores = document.createElement("div");
    divErrores.style.position = "absolute";
    divErrores.style.top = "130px";
    divErrores.style.left = "620px";
    divErrores.style.width = "350px";
    divErrores.style.height = "500px";
    //divErrores.style.border = "1px solid red";

    let formu = document.querySelector("form");
    formu.style.position = "absolute";
    formu.style.top = "100px";
    formu.style.left = "150px";

    let titulo = document.querySelector("h2");    
    titulo.style.position = "absolute";
    titulo.style.top = "45px";
    titulo.style.left = "250px";

    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(divErrores);

    //CREAR ERRORES INDIVIDUALES

    let errorDNIv = document.createElement("div");
    errorDNIv.style.position = "absolute";
    errorDNIv.style.top="25px";
    errorDNIv.textContent = "DNI vacio";
    errorDNIv.hidden = true;
    divErrores.appendChild(errorDNIv);

    let errorDNI = document.createElement("div");
    errorDNI.style.position = "absolute";
    errorDNI.style.top="25px";
    errorDNI.textContent = "DNI erroneo";
    errorDNI.hidden = true;
    divErrores.appendChild(errorDNI);

    let errorNombre = document.createElement("div");
    errorNombre.style.position = "absolute";
    errorNombre.style.top="100px";
    errorNombre.textContent = "Debe insertar un nombre";
    errorNombre.hidden = true;
    divErrores.appendChild(errorNombre);

    let errorApellido = document.createElement("div");
    errorApellido.style.position = "absolute";
    errorApellido.style.top="180px";
    errorApellido.textContent = "Debe insertar un apellido";
    errorApellido.hidden = true;
    divErrores.appendChild(errorApellido);

    let errorDOBv = document.createElement("div");
    errorDOBv.style.position = "absolute";
    errorDOBv.style.top="255px";
    errorDOBv.textContent = "Fecha de nacimiento vacia";
    errorDOBv.hidden = true;
    divErrores.appendChild(errorDOBv);

    let errorDOB = document.createElement("div");
    errorDOB.style.position = "absolute";
    errorDOB.style.top="255px";
    errorDOB.textContent = "Fecha de nacimiento erronea";
    errorDOB.hidden = true;
    divErrores.appendChild(errorDOB);

    let errorWebv = document.createElement("div");
    errorWebv.style.position = "absolute";
    errorWebv.style.top="330px";
    errorWebv.textContent = "Web vacia";
    errorWebv.hidden = true;
    divErrores.appendChild(errorWebv);

    let errorWeb = document.createElement("div");
    errorWeb.style.position = "absolute";
    errorWeb.style.top="330px";
    errorWeb.textContent = "Web erronea";
    errorWeb.hidden = true;
    divErrores.appendChild(errorWeb);

    let errorPassv = document.createElement("div");
    errorPassv.style.position = "absolute";
    errorPassv.style.top="410px";
    errorPassv.textContent = "Contraseña vacia";
    errorPassv.hidden = true;
    divErrores.appendChild(errorPassv);

    let errorPass = document.createElement("div");
    errorPass.style.position = "absolute";
    errorPass.style.top="410px";
    errorPass.textContent = "Contraseña erronea";
    errorPass.hidden = true;
    divErrores.appendChild(errorPass);



    //BOTONES

    let resetear = document.querySelector('button[type="reset"]');
    let enviar = document.querySelector("button[type='submit']");

    resetear.addEventListener("click", (e)=>{
        e.preventDefault();
        let confirmacion = confirm("Estas seguro que quires borrar todo?");
        if (confirmacion){
            errorDNI.hidden = true;
            errorDNIv.hidden = true;
            formu.dni.style.border ="2px solid #bcd4f6";
            errorNombre.hidden = true;
            errorApellido.hidden = true;
            errorDOB.hidden = true;
            errorPass.hidden = true;
            errorWeb.hidden = true;
            formu.reset();
        }
    });

    enviar.addEventListener("click", (e)=>{
        e.preventDefault();
        let correcto = 0;
        let dni = formu.dni;
        dni.value = dni.value.trim(); //esto se puede hacer arriba
        let apell = formu.apellidos;
        apell.value = apell.value.trim();
        let name = formu.nombre;
        name.value = name.value.trim();
        let fecha = formu.fecha;
        fecha.value = fecha.value.trim();
        let web = formu.web;
        web.value = web.value.trim();
        let password = formu.password;
        password.value = password.value.trim();

        
        //VALIDAR DNI
        
        if(dni.value == "" || dni.value.length == 0){
            errorDNIv.hidden = false;
            errorDNI.hidden = true;
            dni.style.border = "1px solid red";
            
        }else if(dni.value.length != 9){
            errorDNIv.hidden = true;
            errorDNI.hidden = false;
            dni.style.border = "1px solid red";
            
        }else{
            errorDNI.hidden = true;
            errorDNIv.hidden = true;
            formu.dni.style.border ="2px solid #bcd4f6";
            correcto++; //por si acaso
        }

        //VALIDAR NOMBRE Y APELLIDOS

        if(apell.value == "" || apell.value.length == 0){
            errorApellido.hidden = false;
            apell.style.border= "1px solid red";
        }else{
            errorApellido.hidden = true;
            formu.apellidos.style.border ="2px solid #bcd4f6";
            correcto++;
        }
        
        if(name.value == "" || name.value.length == 0){
            errorNombre.hidden = false;
            name.style.border= "1px solid red";
        }else{
            errorNombre.hidden = true;
            formu.nombre.style.border ="2px solid #bcd4f6";
            correcto++; //por si acaso
        }

        //VALIDAR FECHA NACIMIENTO
        //DOS MENSAJES

        if(fecha.value == "" || fecha.value.length == 0){
            errorDOBv.hidden = false;
            errorDOB.hidden = true;
            fecha.style.border= "1px solid red";
        }else {
            let arrayFecha = fecha.value.split("/");
            // array[0] dia, array[1] mes, array[2] año, 
            if(arrayFecha[0].length != 2 && arrayFecha[1] !=2 && arrayFecha[3] !=4 ){ //esta mal esto, mirar en 112
                if(isNaN(arrayFecha[0]) || isNaN(arrayFecha[1]) || isNaN(arrayFecha[2])){
                    errorDOB.hidden = false;
                    errorDOBv.hidden = true;
                    fecha.style.border= "1px solid red";
                }
            } else {
                errorDOB.hidden = true;
                errorDOBv.hidden = true;
                formu.fecha.style.border ="2px solid #bcd4f6";
                correcto++;
            }
            
        }

        //VALIDAR WEB
        //DOS MENSAJES
        if(web.value == "" || web.value.length == 0){
            errorWebv.hidden = false;
            errorWeb.hidden = true;
            web.style.border= "1px solid red";
        }
        else{
            let webArray = web.value.split("//");
            if(webArray[0] != "https:"){
                errorWeb.hidden = false;
                errorWebv.hidden = true;
                web.style.border= "1px solid red";
            } else {
                errorWeb.hidden = true;
                errorWebv.hidden = true;
                formu.web.style.border ="2px solid #bcd4f6";
                correcto++;
            }
            
        }

        //DOS MENSAJES
        if(password.value == "" || password.value.length == 0){
            errorPassv.hidden = false;
            errorPass.hidden = true;
            password.style.border= "1px solid red";
        } else if( password.value.length!=8){
            errorPass.hidden = false;
            errorPassv.hidden = true;
            password.style.border= "1px solid red";
        }
        else{
            errorPass.hidden = true;
            errorPassv.hidden = true;
            formu.password.style.border ="2px solid #bcd4f6";
            correcto++;
        }

        if(correcto==6){
            formu.setAttribute("action", "ej11bien.html");
            formu.submit();
        }


    });


} //window onload

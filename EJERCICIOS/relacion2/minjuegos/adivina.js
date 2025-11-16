window.onload = () =>{
    let inicio = document.getElementById("inicio");
    let apuesta = document.getElementById("apuesta"); //numero metido
    let rindo = document.querySelector(".rendirse");
    let jugar = document.querySelector(".jugar");
    let info = document.getElementById("info");
    let intentos = document.getElementById("intentos");
    
    
    inicio.onclick = () => {
        let counter = 0;
        apuesta.disabled = false;
        let rdm = parseInt(Math.random()*(100)+1);
        jugar.disabled = false;
        rindo.disabled = false;
        inicio.disabled = true;

        jugar.onclick = () =>{

            let correcto = false;

            let comprobar = parseInt(apuesta.value); //SIEMPRE VALUE EN LOS INPUTS. va dentro del onclick porque antes no hay nada

            if(comprobar < 1 || comprobar > 100){
                alert("Valores fuera de rango");
            } else{
                correcto = true;
            }
            if(correcto){ //si es correcto, juega, sino espera a introducir
                if(comprobar == rdm){
                    jugar.disabled = true;
                    rindo.disabled = true;
                    inicio.disabled = false;
                    info.value="HAS GANADO"
                    counter = 0;
                    intentos.value = counter;
                } else {
                    counter++;
                    intentos.value = counter;

                    if(comprobar>rdm){
                        info.value="Tu numero es mayor que el del ordenador";
                        intentos.value = counter;
                    }else{
                        info.value="Tu numero es menor que el del ordenador";
                        intentos.value = counter;
                    }
                }
            }

        }

        rindo.onclick = () =>{
            info.value="Te has rendido!!! El numero era "+rdm;
            jugar.disabled = true;
            rindo.disabled = true;
            inicio.disabled = false;
            counter = 0;
            intentos.value = counter;
        }



       


        




    }


}
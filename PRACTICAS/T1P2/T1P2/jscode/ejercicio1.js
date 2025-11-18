window.onload = ()=>{
    let botones = document.querySelectorAll("input");
    let botonGenera = botones[0];
    let botonCompara = botones[1];
    let divIzq = document.querySelector("#ladoIzq");
    let divDch = document.querySelector("#ladoDer");
    let salida = document.querySelector("#salida");


    // APARTADO A
    
/*
    botonGenera.onclick = ()=>{
        divDch.textContent = null; //vaciar antes de imprimir
        divIzq.textContent = null; //vaciar antes de imprimir
        salida.textContent = null; //vaciar antes de imprimir
        
        
        let num1 =  parseInt(Math.random()*(50)+1);
        let num2 =  parseInt(Math.random()*(50)+1);

        let textoNuevo1 = document.createTextNode(num1);
        let textoNuevo2 = document.createTextNode(num2);
        

        divIzq.appendChild(textoNuevo1);
        divDch.appendChild(textoNuevo2);

        botonGenera.disabled = true;
        botonCompara.disabled = false;


        botonCompara.onclick=()=>{
            botonGenera.disabled = false;
            botonCompara.disabled = true;
            salida.textContent = null; //vaciar antes de imprimir

            let mayor = 0;

            if(divIzq.textContent >=divDch.textContent){
                mayor = divIzq.textContent;
            }
            else{
                mayor=divDch.textContent;
            }
            let numMayor = document.createTextNode(mayor);
            salida.appendChild(numMayor);


        }

    }
    
*/
    //APARTADO B

    botonGenera.onclick = ()=>{
        botonGenera.disabled = true;
        botonCompara.disabled = false;
        let generaNums = setInterval(generar,1000);

        botonCompara.onclick=()=>{
            clearInterval(generaNums);
            botonGenera.disabled = false;
            botonCompara.disabled = true;
            salida.textContent = null; //vaciar antes de imprimir

            let mayor = 0;

            if(divIzq.textContent >=divDch.textContent){
                mayor = divIzq.textContent;
            }
            else{
                mayor=divDch.textContent;
            }
            let numMayor = document.createTextNode(mayor);
            salida.appendChild(numMayor);

        }

    }

}

function generar(){
    let divIzq = document.querySelector("#ladoIzq");
    let divDch = document.querySelector("#ladoDer");
    let salida = document.querySelector("#salida");
    divDch.textContent = null; //vaciar antes de imprimir
    divIzq.textContent = null; //vaciar antes de imprimir
    salida.textContent = null; //vaciar antes de imprimir
        
    let num1 =  parseInt(Math.random()*(50)+1);
    let num2 =  parseInt(Math.random()*(50)+1);

    let textoNuevo1 = document.createTextNode(num1);
    let textoNuevo2 = document.createTextNode(num2);
 
    divIzq.appendChild(textoNuevo1);
    divDch.appendChild(textoNuevo2);

}
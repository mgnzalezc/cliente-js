function amapola(){
    let tabla=document.querySelector("table");
    alert(tabla.getAttribute("width") + ", "+ tabla.getAttribute("height"));
    let nuevaAnc = parseInt(prompt("Dame una anchura nueva: "));
    let nuevaAlt = parseInt(prompt("Dame una altura nueva: "));
    tabla.setAttribute("width" , nuevaAnc);
    tabla.setAttribute("height", nuevaAlt);
}

function b(){
    let tabla=document.querySelector("table");
    alert(tabla.getAttribute("border"));
    let nuevoB = parseInt(prompt("Dame un borde nuevo: "));
    tabla.setAttribute("border" , nuevoB);
}

function c(){
    let salida= "";
    let tabla=document.querySelector("table");
    tabla.getAttribute("border");
    if (opcion=="center"){
        salida="right";
    }else if(opcion=="right"){
        salida="left";
    }else{
        salida="center";
    }
}

// EJERCICIO 3
function plus(){
    let valor=document.querySelector("div").textContent++;

    //tambien se puede hacer valor++ y luego set otra vez
}
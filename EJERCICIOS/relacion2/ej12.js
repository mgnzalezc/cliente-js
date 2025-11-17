window.onload= ()=>{
    let imagen = document.querySelector("img");
    let dch = document.querySelector("#dch");
    let izq = document.querySelector("#izq");

    dch.onclick = ()=>{
        let newleft = parseInt(imagen.style.left); //Esto solo sirve si el style esta en el html
        newleft += 50;
        imagen.style.setProperty("left", newleft+"px");
        if(parseInt(imagen.style.left) > 900){
            imagen.style.left = "900px";
        }
    }

    izq.onclick = ()=>{
        let newleft = parseInt(imagen.style.left); //Esto solo sirve si el style esta en el html
        newleft -= 50;
        imagen.style.setProperty("left", newleft+"px");
        if(parseInt(imagen.style.left) < 50){
            imagen.style.left = "50px";
        }
    }




}
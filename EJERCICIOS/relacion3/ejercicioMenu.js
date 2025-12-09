window.onload = ()=>{
    let menu = document.querySelector("#menu");
    let botonmenu = document.querySelector("#botonMenu");

    botonmenu.addEventListener("click", () => {
        menu.style.display = "block";
    });

    document.addEventListener("click",(e) => { 
        //document es toda la parte visible del navegador, aqui no vale document
        if((!menu.contains(e.target))){ //si menu no contiene el target del onclick, es decir si meno no se ha clickado, entonces cierras. hay q tener cuidado porque menu tiene botones y si no lo pones asi, se cerraba cuando clickabas los botones pero no el borde del menu
            menu.style.display = "none";
        }
        
    },true); // ponemos true y asi cambiamos el flujo


    /* segunda solucion: parar la propagacion en este addEventListener. habria que quitar el true porque sino es redundante. 
    o corto el flujo o cambio el flujo, los dos no aunque si funciona en este caso

    botonmenu.addEventListener("click", (e) => {
        menu.style.display = "block";
        e.stopPropagation;
    });

    */

    
}
window.onload = ()=>{
    let menu = document.querySelector("#menu");
    let botonmenu = document.querySelector("#botonMenu");

    botonmenu.addEventListener("click", () => {
        menu.style.display = "block";
    });

    document.addEventListener("click",(e) => { 
        //document es toda la parte visible del navegador, aqui no vale document
        if((!menu.contains(e.target))){ 
            /**
             * 
             * target es donde estas clickando
             * aqui estas diciendo, si el target es menu no te cierres
             * si el target NO es el menu, entonces cierrate
             */
            
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
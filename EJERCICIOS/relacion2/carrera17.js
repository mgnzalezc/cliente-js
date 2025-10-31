window.onload = ()=>{

    let boton = document.querySelector("button");
    boton.onclick = ()=>{
        let parra = document.querySelectorAll("div");       
        parra.forEach(current => {
            console.log("hola");
            let rdm = parseInt(Math.random()*(20-10+1)+10);
            let newMargin = ((current.style.marginLeft)+rdm);
            //console.log(newMargin);
            current.style.setProperty("margin-left",newMargin+"px");
        });
    };
    

}

//margin left mover hasta q sea 
//sumar un num rdm de 10-20
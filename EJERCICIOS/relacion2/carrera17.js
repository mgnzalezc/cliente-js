window.onload = ()=>{

    let boton = document.querySelector("button");
    boton.onclick = ()=>{

        let parra = document.querySelectorAll("div");    

        parra.forEach(current => {

            let rdm = parseInt(Math.random()*(20-10+1)+10);
            let newLeft = ((current.style.marginLeft)+rdm);
            //intervalo!!!!
            current.style.setProperty("margin-left",newLeft+"px");

        });
    };
    

}

//margin left mover hasta q sea 
//sumar un num rdm de 10-20
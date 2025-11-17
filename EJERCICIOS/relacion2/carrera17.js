window.onload = ()=>{

    let boton = document.querySelector("button");
    boton.onclick = ()=>{

        let divs = document.querySelectorAll("div");    

        divs.forEach(current => {

            let speed = parseInt(Math.random()*(200-100+1)+100);

            let carrera = setInterval(correr,speed);

            if(parseInt(current.style.marginLeft) > "1000"){
                clearInterval(carrera);
            }

        });
    };
    

}

function correr(){
    let rdm = parseInt(Math.random()*(20-10+1)+10);
    let newLeft = (parseInt(this.style.marginLeft)+rdm);
    this.style.setProperty("margin-left",(newLeft+"px"));

}


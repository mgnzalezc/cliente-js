window.onload = ()=>{
    let divErrores = document.createElement("div");
    divErrores.style.position = "absolute";
    divErrores.style.top = "130px";
    divErrores.style.left = "600px";
    divErrores.style.width = "350px";
    divErrores.style.height = "500px";
    divErrores.style.border = "1px solid red";

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

    let resetear = querySelector("button[type='reset']");
    let enviar = querySelector("button[type='submit']");

    resetear.addEventListener("click", (e)=>{
        e.preventDefault();
        let confirmacion = confirm("Estas seguro que quires borrar todo?");
        if (confirmacion){
            apagarDivs(); //terminar
            formu.reset();
        }
    });

    enviar.addEventListener("click", (e)=>{
        e.preventDefault();
        

    });



}

function apagarDivs() {
    //apagar los divs
}
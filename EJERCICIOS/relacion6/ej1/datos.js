window.onload = ()=> {
    let div = document.querySelector("div");
    let nombre = sessionStorage.getItem("nombre");
    let clave = sessionStorage.getItem("clave");
    let boton = document.querySelector("input[type='submit']");

    let add = "<b>Nombre:</b> " + nombre + " <br> " + "<b>Clave:</b> " + clave + " <br><br> ";

    div.innerHTML += add;

    boton.addEventListener("click", ()=> {
        sessionStorage.clear;
        location.href = "index.html";
    });



}
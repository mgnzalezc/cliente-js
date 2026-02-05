window.onload = ()=> {
    let nombre = document.querySelector("#nombre");
    let clave = document.querySelector("#clave");
    let boton = document.querySelector("input[type='submit']");

    boton.addEventListener("click", ()=> {
        sessionStorage.setItem("nombre", nombre.value);
        sessionStorage.setItem("clave", clave.value);
        location.href = "datos.html";
    });


}
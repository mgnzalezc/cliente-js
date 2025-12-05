window.onload = () => {
    let texto = document.querySelectorAll("textarea");
    let copyFrom = texto[0];
    let copyTo = texto[1];
    let boton = document.querySelector("input");

    boton.onclick = ()=>{
        copyTo.value = copyFrom.value;
        
    }


}
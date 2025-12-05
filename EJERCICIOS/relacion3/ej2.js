window.onload = () => {
    let texto = document.querySelectorAll("textarea");
    let copyFrom = texto[0];
    let copyTo = texto[1];
    
    copyFrom.onkeydown = () => {
        copyTo.value = copyFrom.value;
    }


}
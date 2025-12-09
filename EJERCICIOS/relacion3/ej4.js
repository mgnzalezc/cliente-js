window.onload = () => {
    let dolares = document.querySelector("#dolares");
    let euros = document.querySelector("#euros");
    let boton = document.querySelector("input[type='button']");

    boton.addEventListener("click", ()=> {
        if(euros.value.length==0 && dolares.value.length!=0){
            let dolar = parseFloat(dolares.value);
            let res = dolar*0.83;
            euros.value = res;
        } else if(dolares.value.length==0 && euros.value.length!=0){
            dolares.value = parseFloat(euros.value)/0.83; //igual que arriba pero una linea solo
        } else {
            dolares.value = "";
            euros.value = "";
            alert("Error");
        }

        
    })

}
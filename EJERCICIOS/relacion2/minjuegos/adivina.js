window.onload = ()=>{
    let inicio = document.querySelector("img");
    let apuesta = document.getElementsByTagName("apuesta");
    let rindo = document.getElementsByTagName("rendirse");
    let jugar = document.getElementsByTagName("jugar");

    
    inicio.onclick =()=> {
        let rdm = parseInt(Math.random()*(100)+1);
        jugar.disabled = false;
        rindo.disabled = false;
        inicio.disabled = true;

        //dowhile apuesta q este en rango
        if(apuesta == rdm){

        }




    }


}
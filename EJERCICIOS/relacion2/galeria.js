window.onload = ()=>{
    let fotos=[];
    for (let i = 1; i <= 5; i++) {
        fotos[i-1]="foto/f"+i+".jpg";
    }
    let count = 0;
    let parra = document.querySelectorAll("button");
    let img = document.querySelector("img");
    parra.forEach(current => {
        
        current.onclick=function(){

            if(current.className == "atras"){
                count--;
                img.setAttribute("src", fotos[count]);
                if(count < 0){
                    count = 0;
                }
            } else if (current.className == "alante"){
                count++;
                img.setAttribute("src", fotos[count]);
                if(count > 4){
                    count = 4;
                }
            } else if (current.className == "play"){
                play = setInterval(sumar,200);

            } else if(current.className == "stop"){
                parar();
            }
        }
    });

    function sumar(){
        img.setAttribute("src", fotos[count]);
        count++;
        if(count > 4){
            count = 0;
        }
    }

    function parar(){
        clearInterval(play);
    }

}


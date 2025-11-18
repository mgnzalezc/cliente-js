window.onload = ()=>{
    let progress = document.querySelector("progress");
    let meter = document.querySelector("meter");
    let bprogress = document.querySelector("#bprogress");
    let bmeter = document.querySelector("#bmeter");

    bprogress.onclick = ()=>{
        intervalP = setInterval(rellenarP,100);
        bprogress.onclick = false; //para que no le des 100 veces al intervalo
    }

    bmeter.onclick = ()=>{
        intervalM = setInterval(rellenarM,100);
        if(meter.value > 100){
            clearInterval(intervalM);
            bmeter.onclick = false; //para que no le des 100 veces al intervalo
        }
    }
}

function rellenarM(){
    let meter = document.querySelector("meter");
    meter.value++;
    if(progress.value >= 100){
        clearInterval(intervalP);
    }
}

function rellenarP(){
    let progress = document.querySelector("progress");
    progress.value++;
    if(progress.value >= 100){
        clearInterval(intervalP);
    }
}
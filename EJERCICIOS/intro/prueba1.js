
function mostrar(){
    alert("Jesus va disfrazado de naruto");
};


function borrar(){
    console.log("dentro[]");
    //alert confirm prompt

    /* 
    var res = 10;
    res = Number(res); //si no eres un numero, NaN
    res = parseInt(res); //lee hasta un numero SI EMPIEZA POR NUMERO. si res = "10 años tiene mi niño", se parsea a 10
    res = parseFloat(res); 

    

    if (num == 6){
        alert("alert1")
    } else {
        console.log("alert2")
    }
    //OPERADOR TERNARIO
    
    condicion ? lo que se ejecuta si es true : lo que se ejecuta si es false
    
    (num == 6) ? alert("alert1") : console.log("alert2");


    let res = prompt("introduce tu edad");
    alert(res);
    */



    for(let i = 0; i <=3; i++){
        for(let j = 0; j <=2; j++){
            console.log(i+"-"+j); //console te mete salto linea
        }
    }
    
    for(let i = 0; i <=6; i++){
        if(i==2){
            continue;
        }
        console.log(i);
    }

    let i = 0;
    while(i<5){
        i++;
        if(i==3){
            continue;
        }
        
        console.log(i);
    }

    
    let otro = [1,2,3];
    let lista = [1,2,3,4,5,6];
    
    otro[7]="Marcos";

    console.log(otro);

    //FOR OF

    console.log(lista);
    for (let element of lista){
        console.log(element);
    }

    //FUNCIONES: 
    function perita(num, otro){
        num = num || 4;
        otri = 3 || 5;
        console.log("Hola");
        return num+otro;
    }

    perita();

    function perita2(res){
        res +=3;
        console.log(res);
    }

    let res=7;
    perita2(res);
    console.log(res);

    function perita3(res){
        res [0]=23;
        console.log(res);
    }

    let res2=[1,2,3];
    perita3(res2);
    console.log(res2);
    

}
function mayor(num){
    if(num>18){
        return true;
    }
    return false;
}

function mayorBien(num){
    return (num>=18);
}

let edades=[2,4,6,8,9,10,12,50,75,89,100];

function esMayor(edades){
    let mayor = true;
    let i = 0;
    while (true || i<edades.length){
        if(edades[i]>18){
            return true;
        }
        i++;
    }
    return false;
}

function esMayorBien(edades){
    for (const numerito of lista){
        if(mayorBien(edad)){
            return true;
        }
    }
    return false;
}

function hayMayorBien(edades){
    /*
    for (const numerito of lista){
        if(!mayorBien(numerito)){
            return false;
        }
    }
    return true;
    */
   return !esMayorBien[lista];
}

let res = edades.some(function(valor){
    return (valor >= 18);
}); //cuidado con los parentesis

let res2 = edades.every((valor) =>{
    return (valor >= 18);
});



/*
    dado x array
    - mostrar por consola cada sueldo bruto uno debajo d otro
    - crea otro array cuyos elementos sean el resultado de aplicar el 15%
    - crea otro array cuyos elementos sean sueldos brutos mayores a 1935

*/

let sueldos = [1000,1500,1700,2000,2300,2500,3000];

// A
function bruto(){
    for (const current of sueldos){
        console.log(current);
    }
}
//como usar forEach en JS con el mismo ejemplo
sueldos.forEach(function(current){
    console.log(current);
})


// B
function net(){
    let netos = [];
    let irpf = 0.15;
    for (let current of sueldos){
        current -= (current*irpf);
        netos.push(current);
    }
    console.log(netos);
}

let netos = sueldos.map(function(valor){
    return valor*0.85;
});


// C

function fiscal(){
    let fiscalAlto = [];
    for (const current of sueldos){
        if (current > 1935){
            fiscalAlto.push(current);
        }
    }
    console.log(fiscalAlto);
}

let fiscalAlto = sueldos.filter(function(valor){
    if(valor>1935){
        return valor;
    }
});


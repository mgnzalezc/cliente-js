/*
function mostrar(){
    let res = prompt("Dame un numero");
    alert(res);
    
} */


//Ejercicio 8 esto no funciona se añade cada vez

function eg8(array){
    let sol = 0;
    let finalA = [];
    let tmp = [];
    for(let i = 0; i < array.length; i++){
        tmp.push(array[i]);
        
        for(let j = 0; j < tmp.length; j++){
            sol += tmp[j];
            console.log(sol);
            
        }

        console.log(sol);
        finalA.push(sol);
        
    }

    return finalA;
}

let array =  [1,2,3,4,5,6];
console.log(eg8(array));


//Ejercicio 11
function repite(array1, array2){
    let solution = [];


    for (const current of array1) {
        if(!array2.includes(current) && !(solution.includes(current))){
            solution.push(current);
        }   
        
    }

    for (const current of array2) {
        if(!array1.includes(current) && !solution.includes(current)){
            solution.push(current);
        }
    }

    return solution;
}
//para q no se repitan los numeros de un mismo array, 
let array1 = [1, 2, 3, 3];
let array2 = [ 2, 1, 4, 5, 4];
console.log(repite(array1,array2));


//(CODEWARS) darle la vuelta a las palabras pero en el mismo orden
//era un string que convertimos en array con .split(" ")
const words = ["hello", "world", "javascript"];
const reversedWords = words.map(word => word.split("").reverse().join(""));
//aqui map guarda en un array los valores de otros pero editados
console.log(reversedWords.join(" "));


//Ejercicio 14
function eg14(numeros){
    let solution = numeros[i];

    for(i=0; i < numeros.length-1; i++){
        //console.log(solution)
        let suma = numeros[i]+numeros[i+1];
        //console.log(suma)
        if(solution<suma){
            solution = suma;
        }
    }


    return solution;
}


let numeros=[2,4,1,5,6,11,3];
console.log(eg14(numeros));


//Ejercicio 16
function likes(array){
    
    switch (array.length){
        case 0:
            return "no one liked this photo"
            break;
        case 1:
            return array[0]+ " has liked this photo";
            break;
        case 2:
            return array[0]+" and "+array[1]+" have liked this photo";
            break;
        case 3:
            return array[0]+", "+array[1]+" and "+array[2]+" have liked this photo";
            break;
        default:
            return array[0]+", "+array[1]+" and "+(array.length-2)+" others liked this photo";

    }

}

    let likeA = ["Alex", "Mark", "Maria", "Max", "Max", "Max"];
    console.log(likes(likeA));

//Ejercicio 16.2 con scripts


let tablero = [];

for (let i = 0; i<4; i++){
    tablero.push([]);
    for (let k = 0; k<5; k++){
        tablero[i].push(" ");
    }
}

let count = 0;
let x = 0;
let y = 0;
do {
    x = parseInt(Math.random()*(3)); 
    y = parseInt(Math.random()*(4));
console.log(count); 
    if(tablero[x][y] = " "){
        tablero[x][y] = "M";
        count++;
    }
    console.log(count); //no entiendo pq se m ponen las minas q le da la gana a el

} while (count<3);

count = 0;
do {
    x = parseInt(Math.random()*(3)); 
    y = parseInt(Math.random()*(4));
    if(tablero[x][y] = " "){
        tablero[x][y] = "T";
        count++;
    }

} while (count<1);



console.log(tablero);







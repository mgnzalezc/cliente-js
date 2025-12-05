// Normal Basica
function nombre(){
    console.log("Soy una funcion de toda la vida");
}

// LLamar funcion normal
let a = 0; b = 0;

// AutoInvocada o IIFE
(function (a, b){
    console.log("Me ejecuto del tiron");
})(a, b);


nombre();

// Anonima
let variableConNombre = function(){
    console.log("Soy una funciona anonima");
}
variableConNombre();

// De callback
function callBack(valor, nombre) {
    nombre();
    console.log("Y yo soy una callback muy mala "+ valor);
}

callBack(2, nombre);

//ARROW FUNCT
const flecha = () => {
    console.log("Soy una funcion flecha, mas bonita");
    const nollego = "";
    var sillego = "";
    let nideFLy = "";
};

nollego = "mamona";
sillego = 33;
console.log(nideFLy.length);

flecha();




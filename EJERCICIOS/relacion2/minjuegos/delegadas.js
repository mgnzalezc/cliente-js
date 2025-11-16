window.onload = () => {
    let tablero = [];
    for (let i = 0; i < 8; i++) {
        let fila = [];
        for (let j = 0; j < 8; j++) {
            fila.push("."); // casilla vacía
        }
        tablero.push(fila);
    }

    imprimirTabla(tablero);

    
}
function imprimirTabla(tablero){
    let tabla = document.getElementById("tablero");
    tabla.innerHTML = ""; // vaciar <table> para imprimir estado actual

    for (let i = 0; i < 8; i++) {
        let fila = document.createElement("tr"); // crear fila
        for (let j = 0; j < 8; j++) {
            let celda = document.createElement("td"); // crear celda
            celda.textContent = tablero[i][j]; // poner el contenido
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}
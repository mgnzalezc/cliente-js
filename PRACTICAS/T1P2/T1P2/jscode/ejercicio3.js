window.onload = ()=>{
    let boton = document.querySelector("input");
    let solucion = document.querySelector(".solucion");

    boton.onclick = ()=>{

        let tabla = document.createElement("table");
        tabla.className = "tabla";
        let filas = 0;
        let celdas = 0;
        do{
            filas = parseInt(prompt("Filas:"));
        }while(isNaN(filas));

        do{
            celdas = parseInt(prompt("Columnas:"));
        }while(isNaN(celdas));

        //crear array de la tabla
        let tablero = [];
        for (let i = 0; i < filas; i++) {
            let fila = [];
            for (let j = 0; j < celdas; j++) {
                fila.push(""); // casilla vacía
            }
            tablero.push(fila);
        }

        //imprimir tabla con array
        for (let i = 0; i < filas; i++) {
            let fila = document.createElement("tr"); // crear fila
            for (let j = 0; j < celdas; j++) {
                let celda = document.createElement("td"); // crear celda
                celda.textContent = (i+1); // poner el contenido
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }

        solucion.appendChild(tabla);

    }



    
}

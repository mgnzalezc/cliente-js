
    let automata = [];
    let automata2 = [];

    function inicializarAutomata(automata, tam){
        for (let i = 0; i < tam; i++) {
            automata[i] = parseInt(Math.random()*(2));
        }
        return automata;
    }

    function mostrarEstado(automata){
        let res = "";
        for (let i = 0; i < automata.length; i++) {
            
            if(automata[i]==1 ){
                res += "*"; 
            } else if (automata[i]==0){
                res += ".";
            }
        }
        return res;

    }


    function primeraJugada(){
        let tam = 0;
        do{
            tam = prompt("Tamaño automata: ");
        }while(tam<3);

        let rondas = prompt("Numero de rondas: ");
        let paso = 1; //para mostrar el n rondas solamente

        automata = inicializarAutomata(automata, tam);
        automata2 = [...automata];
        alert("Paso 0: \n" + mostrarEstado(automata)); 
        //cambiar alert por console.log y mirar consola en navegador

        while(rondas > 0){
            if(rondas%2==0){ //escribir en 2, mirar en 1, imprimir 2
                
                for (let i = 1; i < automata.length-1; i++) {
                    if(automata[i]==0){
                        if(automata[i-1]==0 && automata[i+1]==0){
                            automata2[i]=0;
                        } else{
                            automata2[i]=1;
                        }
                        /**
                        • 000 – 0
                        • 001 – 1
                        • 100 – 1
                        • 101 – 1
                        */
                    } else {
                        if(automata[i-1]==0 && automata[i+1]==0){
                            automata2[i]=1;
                        } else{
                            automata2[i]=0;
                        }
                        /**
                        • 010 – 1
                        • 011 – 0
                        • 110 – 0
                        • 111 – 0
                        */
                    }
                
                } //for cambio
                alert("Paso "+paso+": \n" + mostrarEstado(automata2)); 

            } else { //escribir en 1, mirar en 2, imprimir 1

                for (let i = 1; i < automata.length-1; i++) {
                    if(automata2[i]==0){
                        if(automata2[i-1]==0 && automata2[i+1]==0){
                            automata[i]=0;
                        } else{
                            automata[i]=1;
                        }
                        /**
                        • 000 – 0
                        • 001 – 1
                        • 100 – 1
                        • 101 – 1
                        */
                    } else {
                        if(automata2[i-1]==0 && automata2[i+1]==0){
                            automata[i]=1;
                        } else{
                            automata[i]=0;
                        }
                        /**
                        • 010 – 1
                        • 011 – 0
                        • 110 – 0
                        • 111 – 0
                        */
                    }
                    
                } //for cambio
                alert("Paso "+paso+": \n" + mostrarEstado(automata)); 
            }

            rondas--;
            paso++;
        }
        


    }

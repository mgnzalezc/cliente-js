window.onload = ()=>{
    let dpersonales = document.querySelector("#datos-personales");
    let dacademicos = document.querySelector("#datos-academicos");
    let dtutor = document.querySelector("#datos-tutor");
    let lista = document.querySelector("#lista-asignaturas");

    let tutor1 = {
        "nombre": "Jaime",
        "dni":"33333333c", 
        "carrera":"Comercio"
    };

    let prog = {
        "nombre":"Programacion", 
        "curso":1, 
        "horas":34565
    };

    let js = {
        "nombre":"Cliente", 
        "curso":2, 
        "horas":44
    };

    let ipe = {
        "nombre":"IPE", 
        "curso":2, 
        "horas":3456534523
    };
    
    let cobol = {
        "nombre":"Cobol", 
        "curso":6, 
        "horas":3
    };


    let asignaturas = [
        prog, js, ipe, cobol
    ];

    let alu1 = {
        "nombre":"Ivan",
        "edad":18,
        "ciclo":"viewnext",
        "curso":1,
        "tutor":tutor1,
        "asignaturas":asignaturas,
        "notas": [1,2,2,10]
    };

    mostrar(tutor1);
    cambiarNombre(tutor1, "maria");
    mostrar(tutor1);


/*
    let textoAlu = "";
    let textoTutor = "";
    let textoAsig = [];
    
    for (const key in alu1) {
        if(key == "tutor"){
            
            for (const tut in alu1[key]) {
                let div = document.createElement("div");
                div.className="item";
                let res= "";
                res+= "<span>"+tut+"</span>: "+(alu1[key][tut])+"<br>";
                div.innerHTML= res;
                dtutor.appendChild(div);
            }
            
        } else if (key == "asignaturas"){
            for (let i = 0; i < alu1[key].length; i++) {
                let div = document.createElement("div");
                div.className="item";
                let res= "";
                for (const dato in alu1[key][i]) {
                    res+= "<span>"+dato+"</span>: "+alu1[key][i][dato]+"<br>";
                    
                }
                res+="<span>NOTA MEDIA:</span> "+alu1.notas[i];
                div.innerHTML= res;
                lista.appendChild(div);
            }
        }
        else{
            if(key!="notas"){
                let div = document.createElement("div");
                div.className="item";
                let res= "";
                res+= "<span>"+key+"</span>: "+(alu1[key])+"<br>";
                div.innerHTML= res;
                dpersonales.appendChild(div);
            }
            if(key=="curso" || key=="ciclo"){
                let div = document.createElement("div");
                div.className="item";
                let res= "";
                res+= "<span>"+key+"</span>: "+(alu1[key])+"<br>";
                div.innerHTML= res;
                dpersonales.appendChild(div);
                dacademicos.appendChild(div);
            }
                
        }
    }

    //crear matriz de asigs
    let textoAsig2=[];

    for (let i = 0; i < textoAsig.length; i++) {
        textoAsig2.push(textoAsig[i].split("-"));
    }
*/


}

function mostrar(tutor){
    let dpersonales = document.querySelector("#datos-personales");
    let dacademicos = document.querySelector("#datos-academicos");
    let dtutor = document.querySelector("#datos-tutor");
    let lista = document.querySelector("#lista-asignaturas");

    let res = "";

    for (const key in tutor) {
        res += "<b>" + key.toUpperCase() + "</b>: ";
        res += tutor[key]+"<br>";
    }
    console.log(res);

    //añadir al dom
    let div = document.createElement("div");
    div.innerHTML= res; //con inner html se pone el <br> salto de linea y todas las etiquetas que queramos
    dtutor.appendChild(div);
    
}

function cambiarNombre(tutor, newnombre){
    tutor["nombre"] = newnombre;
}
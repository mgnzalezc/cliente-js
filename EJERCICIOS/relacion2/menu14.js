window.onload = ()=>{
    let listas = document.getElementsByClassName("lista");
    
    for (const current of listas) {
        current.onclick=()=>{
            let parra = current.querySelector("ul");
            parra.style.setProperty("display", "inline");
        }
/*

aqui quiero: if q si esta en none lo pongo en inline y al reves

        let parra = current.querySelector("ul");
            
            //como leches accedo al display? esto no compara bien y no me deja hacer un get nose pq
            
            if(parra.style.display =='"none"'){
                parra.style.setProperty("display", "inline");
            }
            else{
                parra.style.setProperty("none", "none");
            }
*/
    
    }

} //esto funciona pero nose yo si esta muy bien
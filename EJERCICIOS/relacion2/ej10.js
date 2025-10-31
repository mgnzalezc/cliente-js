window.onload = () => {
 	    let parra = document.querySelectorAll("div");
        
        parra.forEach(current => {
            current.onclick=function(){
                if(document.body.style.backgroundColor == current.style.backgroundColor){
                    //si vuelves a pulsar se pone blanco
                    document.body.style.setProperty("background-color","white");
                    
                }else{ 
                    document.body.style.setProperty("background-color",current.style.backgroundColor);

                }
			    
            }
            
        });

}

window.onload = () => {
    let text1 = document.querySelector("#text1");
    let text2 = document.querySelector("#text2");
    let boton = document.querySelector("input[type='button']");

    boton.addEventListener("click", ()=>{
        let t1 = text1.value.trim().toLowerCase();
        let t2 = text2.value.trim().toLowerCase();
        let comprobar1 = [...t1];
        let comprobar2 = [...t2];

        comprobar1.sort();
        comprobar2.sort();

        let igual = (comprobar1.length === comprobar2.length); //hay que comprobar la longitud primero
        let i = 0;
        let j = 0;

        while(i < comprobar1.length && igual){
            if(comprobar1[i] !== comprobar2[i]){
                igual = false;
            }
            i++;
        }


        if(!igual){
            alert("No son anagramas");
        } else{
            alert("Son anagramas!!");
        }


        console.log(comprobar1);
        console.log(comprobar2);

        
    });



}
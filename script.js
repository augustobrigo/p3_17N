var boton1=document.getElementById("btn1");
boton1.addEventListener("click",funcion1);
function funcion1(){
    boton1.setAttribute("disabled",true)
    let vectorCaja = document.getElementsByClassName("caja");
    intervalo2 = setInterval(accionRandom, 5000);
    for (let item of vectorCaja){
        let imagenX=document.createElement("img");
        item.appendChild(imagenX);
    }
    accionRandom();
    function accionRandom(){
        let listaImagenes=document.querySelectorAll("img");
        for(let elemento of listaImagenes){
           let num1 = Math.floor(Math.random()*10);
           elemento.setAttribute("src","https://randomuser.me/api/portraits/women/"+num1+".jpg");
         
        }

    }


}
boton = document.getElementById('botoncito');
fondo = document.getElementById('fondo');

boton.addEventListener("click", color);

function color(){
    if(fondo.style.backgroundColor == "gray"){
        fondo.style.backgroundColor= "LightSalmon";
    }else{
        fondo.style.backgroundColor= "gray";
    }
    
}
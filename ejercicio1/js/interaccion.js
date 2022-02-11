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

boton1 = document.getElementById('boton1');
boton2 = document.getElementById('boton2');
boton3 = document.getElementById('boton3');



if(boton1.disabled == false){
    boton2.disabled = true;
    boton3.disabled = true;
    boton2.textContent = 'Desactivado';
    boton3.textContent = 'Desactivado';
}

boton1.addEventListener("click", function() {
    Desactivar(boton1, boton2);
});

boton2.addEventListener("click", function() {
    Desactivar(boton2, boton3);
});
boton3.addEventListener("click", function() {
    Desactivar(boton3, boton1);
});

function Desactivar(b1,b2){
    b1.disabled = true;
    b2.disabled = false;
    b1.textContent = 'Desactivado';
    b2.textContent = 'Presioname!!!';
}
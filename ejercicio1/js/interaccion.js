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

boton1.addEventListener("click", boton1off);
boton2.addEventListener("click", boton2off);
boton3.addEventListener("click", boton3off);

function boton1off(){
    boton1.disabled = true;
    boton2.disabled = false;
    boton1.textContent = 'Desactivado';
    boton2.textContent = 'Presioname!!!';
}

function boton2off(){
    boton2.disabled = true;
    boton3.disabled = false;
    boton2.textContent = 'Desactivdado';  
    boton3.textContent = 'Presioname!!!';
}

function boton3off(){
    boton3.disabled = true;  
    boton1.disabled = false;
    boton3.textContent = 'Desactivado';
    boton1.textContent = 'Presioname!!!';
}




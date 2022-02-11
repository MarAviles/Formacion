

operaciones = function () {
    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);
    /*document.getElementById("valueInput").innerHTML = inputValue; */
    suma = numero1 + numero2;
    suma1 = numero1 + " + " + numero2 + " = " + suma;
    resta = numero1 - numero2;
    resta1 = numero1 + " - " + numero2 + " = " + suma;
    division = numero1 / numero2;
    division1 = numero1 + " / " + numero2 + " = " + suma;

    body = document.getElementById("contenedor2");

    agregarhtml("Resultado de la suma", suma1, 'suma');
    agregarhtml("Resultado de la resta", resta1, 'resta');
    agregarhtml("Resultado de la division", division1, 'division');
}

function agregarhtml(texto, resultado,clase) {
    contenedor = tag = document.createElement('div'); 
    tag = document.createElement('h3'); 
    text = document.createTextNode(texto);

    tag.appendChild(text); 
    contenedor.append(tag);

    nombre = document.createElement('p');
    numero = document.createTextNode(resultado);
    nombre.appendChild(numero); 
    contenedor.append(nombre);
    contenedor.classList.add(clase);
    body.append(contenedor);
    
}
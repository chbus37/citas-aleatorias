let $boton = document.getElementById('boton-cambiar-cita');
let $cita = document.getElementById('cita');
let $autor = document.getElementById('autor');

function generarEnteroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    $cita.innerText = `"${citas[indiceAleatorio].texto}"`;
    $autor.innerText = citas[indiceAleatorio].autor;
}



// Como argumento la funcion no lleva ().
$boton.addEventListener("click", cambiarCita);
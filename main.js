// Esta es la funcion para tomar un bloque y llevar a donde quiero por click en un boton
window.onload = () => {

//por default

var yosoy = document.querySelector('#container-3');
var vacio = document.querySelector('#parallenar');
var btnProyecto = document.querySelector('#proyectos');
var btnsobremi = document.querySelector('#btn101');
var proyectos = document.querySelector('#containerproyectos');


btnsobremi.addEventListener('click', llenar );
btnProyecto.addEventListener('click', llenar2 );

function llenar() {
        vacio.innerHTML = " ";
        vacio.appendChild(yosoy);
        yosoy.classList.remove('d-none');
}

function llenar2() {
        vacio.removeChild(yosoy);
        vacio.appendChild(proyectos);
        proyectos.classList.remove('d-none');
        yosoy.classList.add('d-none');
}
   


}







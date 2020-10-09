// Esta es la funcion para tomar un bloque y llevar a donde quiero por click en un boton
window.onload = () => {

//por default

var yosoy = document.querySelector('#container-3');
var vacio = document.querySelector('#parallenar');
var btnProyecto = document.querySelector('#proyectos');
var btnsobremi = document.querySelector('#btn101');
var proyectos = document.querySelector('#containerproyectos');
var Expert = document.querySelector('#experiencia');
var btnExpert = document.querySelector('#btn103');
var Formacion = document.querySelector('#estudios');
var btnFormacion = document.querySelector('#btn104');
var btnSkills = document.querySelector('#btn105');
var habilidades = document.querySelector('#skills');
var voluntario = document.querySelector('#voluntariado');
var btnvoluntario = document.querySelector('#btn106');
var marketer = document.querySelector('#marketero');
var btnMarket = document.querySelector('#btn107');
var inicio = document.querySelector('#img2');
var prueba = document.querySelector('#mymodal');

//Bienvenida a la pagina

setTimeout( () => { $('#myModal').modal('show'); }, 500)

//inicio de la pagina

inicio.onclick = () => {
      vacio.innerHTML = " ";
      $('#myModal').modal('show');
}


btnsobremi.addEventListener('click', llenar );
btnProyecto.addEventListener('click', llenar2 );
btnExpert.addEventListener('click' , llenar3 );
btnFormacion.addEventListener('click' , llenar4 );
btnSkills.addEventListener('click' , llenar5 );
btnvoluntario.addEventListener('click', llenar6 );
btnMarket.addEventListener('click', llenar7 )


function llenar() {
        vacio.innerHTML = " ";
        vacio.appendChild(yosoy);
        yosoy.classList.remove('d-none');
}

function llenar2() {
        vacio.innerHTML = " "; 
        vacio.appendChild(proyectos);
        proyectos.classList.remove('d-none');
        yosoy.classList.add('d-none');
}

function llenar3() {
        vacio.innerHTML = " ";
        vacio.appendChild(Expert); 
        Expert.classList.remove('d-none');
}

function llenar4() {
        vacio.innerHTML = " ";
        vacio.appendChild(Formacion); 
        Formacion.classList.remove('d-none');
}

function llenar5() {
        vacio.innerHTML = " ";
        vacio.appendChild(habilidades); 
        habilidades.classList.remove('d-none');
}
   
function llenar6() {
        vacio.innerHTML = " ";
        vacio.appendChild(voluntario); 
        voluntario.classList.remove('d-none');
}

function llenar7() {
        vacio.innerHTML = " ";
        vacio.appendChild(marketer); 
        marketer.classList.remove('d-none');
}

// Eventos sobre los media-queries 
var objetivo = document.querySelector('#container-obj');
var LinkYo = document.querySelector('#link-1');
var vacioMQ = document.querySelector('#Bloco-MQ');
var LinkExpe = document.querySelector('#link-2');
var LinkPrepa = document.querySelector('#link-3');
var LinkSkills = document.querySelector('#link-4');
var barraNav = document.querySelector('#navbarNavAltMarkup');
var cuerpo = document.querySelector('body');

cuerpo.onclick = () => {
        barraNav.setAttribute('class','collapse navbar-collapse');
}

LinkYo.onclick = () => {
        objetivo.innerHTML = " ";
        vacioMQ.innerHTML = " ";
        vacioMQ.appendChild(yosoy);
        yosoy.classList.remove('d-none');
         }
LinkExpe.onclick = () => {
        objetivo.innerHTML = " ";
        vacioMQ.innerHTML = " ";
        vacioMQ.appendChild(Expert);
        Expert.classList.remove('d-none');
}

LinkPrepa.onclick = () => {
        objetivo.innerHTML = " ";
        vacioMQ.innerHTML = " ";
        vacioMQ.appendChild(Formacion);
        Formacion.classList.remove('d-none');

LinkSkills.onclick = () => {
        objetivo.innerHTML = " ";
        vacioMQ.innerHTML = " ";
        vacioMQ.appendChild(habilidades);
        habilidades.classList.remove('d-none');
}

}



}







// botones menú
const btnInicio = document.getElementById("btn-inicio");
const btnDestinos = document.getElementById("btn-destinos");
const btnContacto = document.getElementById("btn-contacto");
const btnRegistro = document.getElementById("btn-registrarse");


// secciones
const secInicio = document.getElementById("seccion-inicio");
const secDestinos = document.getElementById("seccion-destinos");
const secContacto = document.getElementById("seccion-contacto");
const secRegistro = document.getElementById("seccion-registro");

// función mostrar sección
function mostrar(seccion) {
    document.querySelectorAll(".vista").forEach(v => v.classList.add("oculto"));
    seccion.classList.remove("oculto");
}

// eventos menú
btnInicio.onclick = () => mostrar(secInicio);
btnDestinos.onclick = () => mostrar(secDestinos);
btnContacto.onclick = () => mostrar(secContacto);
btnRegistro.onclick = () => mostrar(secRegistro);

// perfil
const imgPerfil = document.getElementById("img-perfil");
const menuPerfil = document.getElementById("menu-perfil");
const cerrarSesion = document.getElementById("cerrar-sesion");
const verPerfil = document.getElementById("ver-perfil");

imgPerfil.onclick = () => menuPerfil.classList.toggle("oculto");

// abrir perfil
verPerfil.onclick = () => {
    menuPerfil.classList.add("oculto");
    mostrar(secRegistro); // aquí puedes cambiar la vista que quieras
};

// cerrar sesión
cerrarSesion.onclick = () => {
    menuPerfil.classList.add("oculto");
    mostrar(secInicio);
    alert("Sesión cerrada");
};
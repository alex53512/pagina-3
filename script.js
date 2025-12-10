
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
// Texto para la primera imagen
    document.getElementById("desc1").textContent = 
        "Descubre la magia de estas imponentes montañas, un destino perfecto para los amantes de la naturaleza y la aventura. Sus paisajes verdes, el aire puro y los senderos naturales ofrecen una experiencia única para desconectarte del estrés y conectarte con la tranquilidad del entorno. Ideal para caminatas, fotografía y actividades al aire libre, este paraíso natural te invita a explorar y vivir momentos inolvidables en plena armonía con la tierra.";

    // Texto para la segunda imagen
    document.getElementById("desc2").textContent = 
        "Disfruta de la serenidad de esta espectacular playa, donde el sonido suave de las olas y la brisa del mar crean el escenario ideal para relajarte y renovar energías. Sus aguas cristalinas y su arena dorada te invitan a caminar, nadar y vivir momentos de total tranquilidad. Un destino perfecto para escapadas románticas, vacaciones familiares o simplemente para desconectar bajo el sol y disfrutar de la belleza natural del paraíso.";

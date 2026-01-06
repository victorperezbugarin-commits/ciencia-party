// ======================================================
//  ZONA DEL PROFESOR: BASE DE DATOS
// ======================================================

const baseDeDatosPreguntas = [
    {
        categoria: "Química ⚗️",
        pregunta: "¿Cuál es el símbolo químico del Oro?",
        respuesta: "Au"
    },
    {
        categoria: "Física 🚀",
        pregunta: "Si soltamos una pluma y un martillo en la Luna, ¿cuál cae antes?",
        respuesta: "Llegan a la vez (no hay aire)."
    },
    {
        categoria: "Química ⚗️",
        pregunta: "Un pH de 2 indica que una sustancia es...",
        respuesta: "Muy ácida."
    },
    {
        categoria: "Física 🚀",
        pregunta: "¿Cuál es la unidad de fuerza en el SI?",
        respuesta: "El Newton (N)"
    },
    {
        categoria: "Cultura Científica 🧠",
        pregunta: "¿Quién formuló la teoría de la relatividad?",
        respuesta: "Albert Einstein"
    }
    // ¡AÑADE TUS PREGUNTAS ENCIMA DE ESTA LÍNEA! 
    // Recuerda poner una coma , después de la llave de cierre } anterior.
];


// ======================================================
//  LÓGICA DEL JUEGO (NO TOCAR)
// ======================================================

let preguntaActual = null;

function iniciarJuego() {
    // Escondemos inicio y mostramos juego
    document.getElementById('pantalla-inicio').classList.add('oculta');
    document.getElementById('pantalla-inicio').classList.remove('activa');
    
    document.getElementById('pantalla-juego').classList.remove('oculta');
    document.getElementById('pantalla-juego').classList.add('activa');
    
    cargarSiguientePrueba();
}

function cargarSiguientePrueba() {
    // 1. Ocultar la respuesta anterior y mostrar el botón de ver solución
    document.getElementById('area-respuesta').classList.add('oculta');
    document.getElementById('btn-ver-solucion').classList.remove('oculta');

    // 2. Elegir pregunta al azar
    const indice = Math.floor(Math.random() * baseDeDatosPreguntas.length);
    preguntaActual = baseDeDatosPreguntas[indice];

    // 3. Pintar en pantalla
    document.getElementById('categoria-pregunta').innerText = preguntaActual.categoria;
    document.getElementById('texto-pregunta').innerText = preguntaActual.pregunta;
    document.getElementById('texto-solucion').innerText = preguntaActual.respuesta;
}

function verSolucion() {
    document.getElementById('btn-ver-solucion').classList.add('oculta');
    document.getElementById('area-respuesta').classList.remove('oculta');
}

function volverInicio() {
    location.reload();
}
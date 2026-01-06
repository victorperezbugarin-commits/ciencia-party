function iniciarJuego() {
    // Ocultar pantalla inicio
    document.getElementById('pantalla-inicio').classList.add('oculta');
    document.getElementById('pantalla-inicio').classList.remove('activa');
    
    // Mostrar pantalla juego
    document.getElementById('pantalla-juego').classList.remove('oculta');
    document.getElementById('pantalla-juego').classList.add('activa');
    
    // Aquí pondremos la lógica de elegir preguntas más tarde
    document.getElementById('contenido-prueba').innerHTML = "¡Hola! La app funciona.";
}

function volverInicio() {
    location.reload(); // Recarga la página para volver al principio
}
const datos = [
    { t: "p", c: "Física", q: "¿Unidad de la fuerza?", a: "Newton (N)" },
    { t: "d", c: "Dibujo", q: "Dibuja un termómetro", a: "Debe verse el bulbo y la escala" },
    { t: "p", c: "Química", q: "¿Símbolo del Hierro?", a: "Fe" },
    { t: "d", c: "Dibujo", q: "Dibuja una probeta", a: "Recipiente cilíndrico graduado" }
];

let itemActual = null;
const canvas = document.getElementById('pizarra');
const ctx = canvas.getContext('2d');
let pintando = false;

function iniciarJuego() {
    document.getElementById('pantalla-inicio').classList.remove('activa');
    document.getElementById('pantalla-juego').classList.add('activa');
    
    // Ajustar tamaño del lienzo al abrir
    setTimeout(() => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }, 100);
    
    cargarPrueba();
}

function cargarPrueba() {
    document.getElementById('respuesta-zona').classList.add('oculta');
    document.getElementById('btn-accion').classList.remove('oculta');
    limpiarPizarra();

    itemActual = datos[Math.floor(Math.random() * datos.length)];
    
    document.getElementById('categoria').innerText = itemActual.c;
    document.getElementById('pregunta').innerText = itemActual.q;
    document.getElementById('texto-respuesta').innerText = itemActual.a;

    if(itemActual.t === "d") {
        document.getElementById('bloque-dibujo').classList.remove('oculta');
        document.getElementById('btn-accion').innerText = "✅ ¡Dibujado!";
    } else {
        document.getElementById('bloque-dibujo').classList.add('oculta');
        document.getElementById('btn-accion').innerText = "👁️ Ver Solución";
    }
}

function mostrarRespuesta() {
    document.getElementById('btn-accion').classList.add('oculta');
    document.getElementById('respuesta-zona').classList.remove('oculta');
}

// Lógica de dibujo ultra-simple
function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function empezar(e) { pintando = true; const pos = mousePos(e); ctx.moveTo(pos.x, pos.y); }
function mover(e) { 
    if(!pintando) return; 
    const pos = mousePos(e); 
    ctx.lineTo(pos.x, pos.y); 
    ctx.strokeStyle = "#1a2a6c"; 
    ctx.lineWidth = 3; 
    ctx.stroke(); 
}
function terminar() { pintando = false; ctx.beginPath(); }

canvas.addEventListener('mousedown', empezar);
canvas.addEventListener('mousemove', mover);
canvas.addEventListener('mouseup', terminar);
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); empezar(e); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); mover(e); });
canvas.addEventListener('touchend', terminar);

function limpiarPizarra() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
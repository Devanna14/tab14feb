/* --- CONTADOR DE DÍAS --- */
const fechaInicio = new Date("2025-08-25");

function actualizarContador() {
  const fechaActual = new Date();

  // Calculamos la diferencia en milisegundos
  const diferencia = fechaActual - fechaInicio;

  // Convertimos milisegundos a días (1000ms * 60s * 60m * 24h)
  // Usamos Math.floor para redondear hacia abajo
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  // Verificamos que el elemento exista antes de escribir (por seguridad)
  const elementoDias = document.getElementById("dias-juntos");
  if (elementoDias) {
    // Escribimos el resultado
    elementoDias.innerText = dias;
  }
}

actualizarContador();

/* --- EFECTO DE CÓMIC AL HACER CLICK --- */
document.addEventListener("click", function (e) {
  // Lista de palabras
  const words = [
    "BAM!",
    "POW!",
    "BOOM!",
    "LOVE!",
    "SNAP!",
    "ZAP!",
    "MUAK!",
    "CRASH!",
  ];

  // Colores del tema (Rojo Spidey, Amarillo, Azul Spidey)
  const colors = ["#E23636", "#FBDD03", "#01499D"];

  // Elegir palabra y color al azar
  const word = words[Math.floor(Math.random() * words.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Crear el elemento HTML
  const el = document.createElement("div");
  el.innerText = word;

  // Aplicar estilos 
  el.style.position = "fixed";
  el.style.left = e.clientX + "px"; // Posición X del mouse
  el.style.top = e.clientY + "px"; // Posición Y del mouse
  el.style.color = randomColor;
  el.style.fontFamily = "'Bangers', cursive";
  el.style.fontSize = "2.5rem";
  el.style.textShadow = "3px 3px 0px #000"; 
  el.style.pointerEvents = "none"; 
  el.style.zIndex = "9999"; 
  el.style.userSelect = "none"; 

  // Estado inicial de la animación
  el.style.transform = "translate(-50%, -50%) scale(0.5)";
  el.style.opacity = "1";
  el.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; 

  // Agregamos el elemento al cuerpo de la página
  document.body.appendChild(el);

  // Disparar la animación (con un pequeño retraso para que el navegador lo detecte)
  setTimeout(() => {
    const randomAngle = Math.random() * 60 - 30;
    el.style.transform = `translate(-50%, -150%) scale(1.5) rotate(${randomAngle}deg)`;
    el.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    el.remove();
  }, 600);
});

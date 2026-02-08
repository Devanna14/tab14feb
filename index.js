const fechaInicio = new Date('2025-08-25');
function actualizarContador() {
 const fechaActual = new Date();

 // Calculamos la diferencia en milisegundos
 const diferencia = fechaActual - fechaInicio;

 // Convertimos milisegundos a días (1000ms * 60s * 60m * 24h)
 const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

 // Escribimos el resultado
 document.getElementById('dias-juntos').innerText = dias;
}

actualizarContador();
console.log("Minimapp iniciado correctamente.");

const estado = document.getElementById("status");

setTimeout(() => {
    estado.textContent = "Inicializando sistema...";
}, 2000);

setTimeout(() => {
    estado.textContent = "Minimapp listo.";
}, 4000);

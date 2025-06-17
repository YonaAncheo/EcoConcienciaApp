let puntaje = 0;
let tiempoJuego = 30; // segundos
let intervalo;

function iniciarJuego() {
  const contenedor = document.getElementById("zonaJuego");
  if (!contenedor) {
    alert("Error: zona de juego no encontrada.");
    return;
  }
  const puntajeEl = document.getElementById("puntaje");
  puntaje = 0;
  puntajeEl.textContent = "Puntaje: 0";

  intervalo = setInterval(() => {
    crearBasura(contenedor);
  }, 800);

  setTimeout(() => {
    clearInterval(intervalo);
    alert("¡Fin del juego! Tu puntaje final es: " + puntaje);
  }, tiempoJuego * 1000);
}

function crearBasura(contenedor) {
  const tipos = ["botella", "lata", "bolsa"];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];

  const basura = document.createElement("img");
  basura.src = `img/${tipo}.png`;
  basura.alt = tipo;
  basura.style.position = "absolute";
  basura.style.width = "50px";
  basura.style.left = Math.random() * (contenedor.clientWidth - 50) + "px";
  basura.style.top = Math.random() * (contenedor.clientHeight - 50) + "px";
  basura.style.cursor = "pointer";
  basura.style.border = "2px solid red"; // temporal
  basura.style.zIndex = "10";
  basura.style.display = "block";

  basura.onclick = () => {
    puntaje++;
    document.getElementById("puntaje").textContent = "Puntaje: " + puntaje;
    basura.remove();
  };

  contenedor.appendChild(basura);

  setTimeout(() => {
    basura.remove();
  }, 2000); // desaparece en 2 segundos
}
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(seccion => {
    seccion.style.display = "none";
  });

  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.style.display = "block";
  }

}

// Mostrar la primera sección por defecto (información)
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("informacion");
});

function toggleContenido(titulo) {
  const contenido = titulo.nextElementSibling;
  contenido.style.display = contenido.style.display === "block" ? "none" : "block";
}
document.getElementById("formCalculadora").addEventListener("submit", function (e) {
  e.preventDefault();

  const km = parseFloat(document.getElementById("kmTransporte").value);
  const kwh = parseFloat(document.getElementById("kwhMensual").value);
  const carne = parseFloat(document.getElementById("frecuenciaCarne").value);

  // Fórmula simple para la huella
  const huella = (km * 0.21) + (kwh * 0.5) + (carne * 100);

  let mensaje = "";
  if (huella < 333) {
    mensaje = "Tu huella de carbono es baja. ¡Excelente trabajo!";
  } else if (huella < 668) {
    mensaje = "Tu huella es moderada. Puedes mejorar reduciendo ciertos hábitos. Puedes ver como mejorar en la sección de información";
  } else {
    mensaje = "Tu huella es alta. Considera hacer cambios para reducir tu impacto. Puedes ver como mejorar en la sección de información";
  }

  document.getElementById("resultadoCalculadora").innerHTML = `
    <p><strong>Tu huella estimada es de:</strong> ${huella.toFixed(2)} kg CO₂ por mes.</p>
    <p><strong>Comparación:</strong> ${mensaje}</p>
    <p><em>Rangos estimados:</em></p>
    <ul>
      <li>Bajo: < 333 kg CO2/mes (menos de 4 toneladas/año)</li>
      <li>Medio: 333 - 667 kg CO2/mes (4 a 8 toneladas/año)</li>
      <li>Alto: > 667 kg CO2/mes (más de 8 toneladas/año) </li>
      <li>Según los datos de la Biblioteca del Congreso Nacional de Chile. </li>
    </ul>
  `;
});
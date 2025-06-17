document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCalculadora");
  const resultado = document.getElementById("resultadoCalculadora");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const km = parseFloat(document.getElementById("kmTransporte").value);
    const kwh = parseFloat(document.getElementById("kwhMensual").value);
    const carne = parseFloat(document.getElementById("frecuenciaCarne").value);

    // Estimaciones básicas de emisiones (en kg CO2 por mes)
    const emisionTransporte = km * 0.21 * 4; // 0.21 kg CO2/km * 4 semanas
    const emisionElectricidad = kwh * 0.4;    // 0.4 kg CO2/kWh
    const emisionCarne = carne * 50;         // Aprox 50 kg CO2 al mes

    const total = emisionTransporte + emisionElectricidad + emisionCarne;

    resultado.innerHTML = `
      <h3>Resultado:</h3>
      <p>Tu huella de carbono estimada es de <strong>${total.toFixed(2)} kg CO₂/mes</strong>.</p>
    `;
  });
});
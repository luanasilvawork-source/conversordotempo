// Pega os elementos
const temperatura = document.getElementById("temperatura");
const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const resultado = document.getElementById("resultado");

// Detecta quando algo mudar
temperatura.addEventListener("input", converter);
origem.addEventListener("change", converter);
destino.addEventListener("change", converter);

function converter() {

    let valor = parseFloat(temperatura.value);

    // Se não tiver número, limpar
    if (isNaN(valor)) {
        resultado.value = "";
        return;
    }

    let convertido;

    // Fahrenheit → Celsius
    if (origem.value === "farenheit" && destino.value === "celsius") {
        converted = (valor - 32) * 5 / 9;

        // Celsius → Fahrenheit
    } else if (origem.value === "celsius" && destino.value === "farenheit") {
        converted = (valor * 9 / 5) + 32;

        // Mesma unidade
    } else {
        converted = valor;
    }

    resultado.value = converted.toFixed(2);
}

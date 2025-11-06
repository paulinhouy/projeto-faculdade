document.getElementById("btnCalcular").addEventListener("click", function() {
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);


if (peso > 0 && altura > 0) {
const imc = (peso / (altura * altura)).toFixed(2);
document.getElementById("resultado").textContent = `Seu IMC é: ${imc}`;
} else {
document.getElementById("resultado").textContent = "Preencha os campos corretamente.";
}
});
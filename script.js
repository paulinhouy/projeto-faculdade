document.getElementById("btnCalcular").addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } 
        else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso ideal";
        } 
        else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } 
        else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
        } 
        else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade Grau II (severa)";
        } 
        else {
            classificacao = "Obesidade Grau III (mórbida)";
        }

        document.getElementById("resultado").textContent = `Seu IMC é: ${imc} — ${classificacao}`;
    } else {
        document.getElementById("resultado").textContent = "Preencha os campos corretamente.";
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> f0839d87088f955d8ba3b38cb5e618d4b13cb6e2

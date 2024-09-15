"use strict";

// Adiciona os listeners após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    let buttonCalcular = document.getElementById('calcular');
    let buttonLimpar = document.getElementById('limpar');

    buttonCalcular.addEventListener('click', calculo);
    buttonLimpar.addEventListener('click', limpar);
});

function calculo(e) {
    e.preventDefault(); // Previne o refresh da página

    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // Calcula o delta
    let delta = Math.pow(num2, 2) - 4 * num1 * num3;
    console.log(`O delta é: ${delta}`); // Usado para debug, pode remover em produção

    // Verifica e exibe as raízes
    if (delta > 0) {
        let raiz1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
        let raiz2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
        document.getElementById("resultado").innerHTML = `Raiz 1 = ${raiz1.toFixed(2)}<br>Raiz 2 = ${raiz2.toFixed(2)}`; 
    } else if (delta === 0) {
        let raizUnica = -num2 / (2 * num1);
        document.getElementById("resultado").innerHTML = `Raiz única = ${raizUnica.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }
}

function limpar(e) {
    // Limpa os campos e o resultado
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('resultado').innerHTML = 'Resultado:';
}

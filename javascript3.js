document.getElementById('calcular').addEventListener('click', function() {
    const valorFinanciado = parseFloat(document.getElementById('num1').value);
    const taxaJuros = parseFloat(document.getElementById('num2').value);
    const numParcelas = parseInt(document.getElementById('num3').value);

    // Verificação se os campos não estão vazios
    if (!valorFinanciado || !taxaJuros || !numParcelas) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cálculo do valor total com juros compostos
    const montante = valorFinanciado * Math.pow(1 + (taxaJuros / 100), numParcelas);
    const parcela = montante / numParcelas;

    // Atualizando a tabela com os resultados
    document.getElementById('total').textContent = `R$ ${montante.toFixed(2)}`;
    document.getElementById('parcelas').textContent = `R$ ${parcela.toFixed(2)}`;

    // Exibindo a tabela
    document.getElementById('resultadoTabela').style.display = 'block'; // Alterei para 'block' para garantir que a tabela apareça.
});

// Função para limpar os campos
document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('resultadoTabela').style.display = 'none';
});


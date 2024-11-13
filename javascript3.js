document.getElementById('calcular').addEventListener('click', function() {
    // Obtém os valores dos campos de entrada
    const valorFinanciado = parseFloat(document.getElementById('num1').value);
    const taxaJuros = parseFloat(document.getElementById('num2').value);
    const numParcelas = parseInt(document.getElementById('num3').value);
    
    // Verifica se os campos foram preenchidos corretamente
    if (isNaN(valorFinanciado) || isNaN(taxaJuros) || isNaN(numParcelas) || valorFinanciado <= 0 || taxaJuros <= 0 || numParcelas <= 0) {
        alert('Por favor, insira valores válidos nos campos!');
        return;
    }

    // Cálculo do valor total com juros compostos
    const montante = valorFinanciado * Math.pow(1 + (taxaJuros / 100), numParcelas);
    const parcela = montante / numParcelas;
    const juros = montante - valorFinanciado;

    // Atualiza os valores na tabela
    document.getElementById('total').innerText = `R$ ${montante.toFixed(2)}`;
    document.getElementById('parcelas').innerText = `R$ ${parcela.toFixed(2)}`;
    document.getElementById('juros').innerText = `R$ ${juros.toFixed(2)}`;

    // Exibe a tabela com os resultados
    document.getElementById('resultadoTabela').style.display = 'block';
});

// Função para limpar os campos
document.getElementById('limpar').addEventListener('click', function() {
    // Limpa os campos de entrada
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    
    // Limpa os resultados na tabela
    document.getElementById('total').innerText = '';
    document.getElementById('parcelas').innerText = '';
    document.getElementById('juros').innerText = '';
    
    // Oculta a tabela
    document.getElementById('resultadoTabela').style.display = 'none';
});
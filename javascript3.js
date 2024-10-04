//VF = valor financiado
//Ndep = numero de parcelas
function calcula() {
    const VF = parseFloat(document.getElementById("num1").value);
    const taxa = parseFloat(document.getElementById("num2").value) / 100;
    const Ndep = parseInt(document.getElementById("num3").value);
    
    if (isNaN(VF) || isNaN(taxa) || isNaN(Ndep) || Ndep <= 0) {
        document.getElementById("resultado").innerText = "Erro: Digite Um Número";
        return;
    }
//p = valor final da parcela
    const p = (VF * taxa * Math.pow(1 + taxa, Ndep)) / (Math.pow(1 + taxa, Ndep) - 1);
    document.getElementById("resultado").innerText = `Valor da Parcela: R$ ${p.toFixed(2)}`;
}

//substitui o texto pelo que está dentro das aspas abaixo quando o botao de limpar é clicado
function limpar() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("resultado").innerText = '';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calcular").addEventListener("click", calcula);
    document.getElementById("limpar").addEventListener("click", limpar);
});


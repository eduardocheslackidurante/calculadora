function insert(n)
{
    let v = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = v + n
}

function clean()
{
    document.getElementById('resultado').innerHTML = ""
}

function calcular ()
{
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Erro"
    }
}
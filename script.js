function insert(num)
{
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado === '0')
    {
        document.getElementById('resultado').innerHTML = num;
    }
    else
    {
        document.getElementById('resultado').innerHTML += num;
    }
}

function clean()
{
    document.getElementById('resultado').innerHTML = '0';
}

function back()
{
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado.length > 1)
    {
        document.getElementById('resultado').innerHTML =
        resultado.substring(0, resultado.length - 1);
    }
    else
    {
        document.getElementById('resultado').innerHTML = '0';
    }
}

function calcular()
{
    let resultado = document.getElementById('resultado').innerHTML;

    try
    {
        let calculo = eval(resultado);

        document.getElementById('resultado').innerHTML =
        Number(calculo.toFixed(8));
    }
    catch
    {
        document.getElementById('resultado').innerHTML = 'Erro';
    }
}

/* SUPORTE AO TECLADO */

document.addEventListener('keydown', function(event)
{
    const tecla = event.key;

    if(!isNaN(tecla))
    {
        insert(tecla);
    }

    if(tecla === '+') insert('+');
    if(tecla === '-') insert('-');
    if(tecla === '*') insert('*');
    if(tecla === '/') insert('/');

    if(tecla === '.') insert('.');

    if(tecla === 'Enter')
    {
        calcular();
    }

    if(tecla === 'Backspace')
    {
        back();
    }

    if(tecla === 'Escape')
    {
        clean();
    }
});
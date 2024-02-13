document.getElementById('calcular').addEventListener('click', function() {
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var dias = parseInt(document.getElementById('dias').value);

    if (isNaN(cantidad) || isNaN(dias) || cantidad <= 0 || dias <= 0) {
        alert('Por favor, ingrese una cantidad y días válidos.');
        return;
    }

    var tasaDiaria = 0.53 / 365;
    var gananciaDiaria = cantidad * tasaDiaria;

    var resultadoHTML = '<h2>Resultados de la inversión</h2>';
    resultadoHTML += '<table>';
    resultadoHTML += '<tr><th>Día</th><th>Ganancia Diaria</th><th>Total acumulado</th></tr>';

    var totalAcumulado = cantidad;
    for (var i = 1; i <= dias; i++) {
        totalAcumulado += gananciaDiaria;
        resultadoHTML += '<tr><td>' + i + '</td><td>' + gananciaDiaria.toFixed(2) + '</td><td>' + totalAcumulado.toFixed(2) + '</td></tr>';
    }

    resultadoHTML += '</table>';
    document.getElementById('resultado').innerHTML = resultadoHTML;
});

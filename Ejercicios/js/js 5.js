function calcularPorcentaje() {
    var numHombres = parseInt(document.estudiantesForm.numHombres.value);
    var numMujeres = parseInt(document.estudiantesForm.numMujeres.value);

    if (isNaN(numHombres) || isNaN(numMujeres) || numHombres < 0 || numMujeres < 0) {
        alert('Por favor, ingresa números válidos y no negativos.');
        return;
    }

    var totalEstudiantes = numHombres + numMujeres;
    var porcentajeHombres = (numHombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (numMujeres / totalEstudiantes) * 100;

    document.getElementById('porcentajeHombres').value = porcentajeHombres.toFixed(2) + '%';
    document.getElementById('porcentajeMujeres').value = porcentajeMujeres.toFixed(2) + '%';
}

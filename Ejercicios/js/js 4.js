function calcularCalificacion() {
    var parcial1 = parseFloat(document.calificacionForm.parcial1.value);
    var parcial2 = parseFloat(document.calificacionForm.parcial2.value);
    var parcial3 = parseFloat(document.calificacionForm.parcial3.value);
    var examenFinal = parseFloat(document.calificacionForm.examenFinal.value);
    var trabajoFinal = parseFloat(document.calificacionForm.trabajoFinal.value);

    // Validación para asegurar que todas las calificaciones sean números válidos entre 0 y 10
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajoFinal) ||
        parcial1 < 0 || parcial1 > 10 || parcial2 < 0 || parcial2 > 10 || parcial3 < 0 || parcial3 > 10 ||
        examenFinal < 0 || examenFinal > 10 || trabajoFinal < 0 || trabajoFinal > 10) {
        alert('Por favor, ingresa calificaciones válidas entre 0 y 10.');
        return;
    }

    // Calcular el promedio de los tres parciales
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Calcular la calificación final según los porcentajes dados
    var calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    // Mostrar la calificación final en el campo correspondiente
    document.getElementById('calificacionFinal').value = calificacionFinal.toFixed(2);
}

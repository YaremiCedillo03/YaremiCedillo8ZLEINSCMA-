function calcularEdad() {
    var fechaNacimiento = new Date(document.edadForm.fechaNacimiento.value);
    var ahora = new Date();

    if (isNaN(fechaNacimiento)) {
        alert('Por favor, ingresa una fecha de nacimiento válida.');
        return;
    }

    if (fechaNacimiento > ahora) {
        alert('La fecha de nacimiento no puede ser en el futuro.');
        return;
    }

    var diferencia = ahora.getFullYear() - fechaNacimiento.getFullYear();

    if (ahora.getMonth() < fechaNacimiento.getMonth() || 
        (ahora.getMonth() === fechaNacimiento.getMonth() && ahora.getDate() < fechaNacimiento.getDate())) {
        diferencia--;
    }
    document.getElementById('edad').value = diferencia;
}

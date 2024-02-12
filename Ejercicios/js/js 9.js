function validarNumeros(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularPago() {
    var horasTrabajadas = document.formulario.horasTrabajadas.value;
    var horas = parseInt(horasTrabajadas);

    if (isNaN(horas) || horas <= 0) {
        alert('Por favor, ingresa un valor numérico válido y positivo.');
        return;
    }

    var pagoNormal = horas * 30;
    var horasExtra = horas - 40; // horas extras trabajadas
    var pagoExtra = 0;

    if (horasExtra > 0) {
        if (horasExtra <= 8) {
            pagoExtra = horasExtra * 30 * 2; // horas extra a doble tarifa
        } else {
            pagoExtra = 8 * 30 * 2 + (horasExtra - 8) * 30 * 3; // primeras 8 horas a doble tarifa, resto a triple tarifa
        }
    }

    var pagoTotal = pagoNormal + pagoExtra;
    document.getElementById('pagoTotal').value = "$" + pagoTotal.toFixed(2);
}

function borrarDatos() {
    document.formulario.horasTrabajadas.value = "";
    document.getElementById('pagoTotal').value = "";
}

function validarNumeros(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularUtilidad() {
    var salarioMensual = document.formulario.salarioMensual.value;
    var antiguedad = document.formulario.antiguedad.value;

    var salario = parseFloat(salarioMensual);
    var años = parseInt(antiguedad);

    if (isNaN(salario) || salario <= 0 || isNaN(años) || años < 0) {
        alert('Por favor, ingresa valores numéricos válidos y positivos.');
        return;
    }

    var utilidad = 0;

    if (años < 1) {
        utilidad = salario * 0.05;
    } else if (años >= 1 && años < 2) {
        utilidad = salario * 0.07;
    } else if (años >= 2 && años < 5) {
        utilidad = salario * 0.10;
    } else if (años >= 5 && años < 10) {
        utilidad = salario * 0.15;
    } else {
        utilidad = salario * 0.20;
    }

    document.getElementById('utilidadAnual').value = "$" + utilidad.toFixed(2);
}

function borrarDatos() {
    document.formulario.salarioMensual.value = "";
    document.formulario.antiguedad.value = "";
    document.getElementById('utilidadAnual').value = "";
}

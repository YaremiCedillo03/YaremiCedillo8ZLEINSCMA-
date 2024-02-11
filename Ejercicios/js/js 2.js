function validarNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value < 0) {
        input.value = '';
    }
}

function calcularComisiones() {
    var sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    var venta1 = parseFloat(document.getElementById('venta1').value);
    var venta2 = parseFloat(document.getElementById('venta2').value);
    var venta3 = parseFloat(document.getElementById('venta3').value);
    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3) ||
        sueldoBase < 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
        alert('Por favor, ingresa números válidos y no negativos.');
        return;
    }
    var comision1 = venta1 * 0.1;
    var comision2 = venta2 * 0.1;
    var comision3 = venta3 * 0.1;
    var comisionTotal = comision1 + comision2 + comision3;
    var totalMensual = sueldoBase + comisionTotal;
    document.getElementById('comisionTotal').value = comisionTotal.toFixed(2);
    document.getElementById('totalMensual').value = totalMensual.toFixed(2);
}

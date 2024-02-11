function validarn(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularDescuento() {
    var totalCompra = document.formulario.totalCompra.value;
    var total = parseFloat(totalCompra);

    if (isNaN(total) || total <= 0) {
        alert('Por favor, ingresa un valor numérico válido y positivo.');
        return;
    }

    var descuento = total * 0.15;
    var totalPagar = total - descuento;

    document.getElementById('totalPagar').value = "$" + totalPagar.toFixed(2);
}

function borrarDatos() {
    document.formulario.totalCompra.value = "";
    document.getElementById('totalPagar').value = "";
}

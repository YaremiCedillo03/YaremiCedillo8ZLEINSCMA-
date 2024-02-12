function realizarOperacion() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var resultado;

    if (numero1 === numero2) {
        resultado = numero1 * numero2;
    }
    else if (numero1 > numero2) {
        resultado = numero1 - numero2;
    }
    else {
        resultado = numero1 + numero2;
    }
    document.getElementById('resultado').value = resultado;
}

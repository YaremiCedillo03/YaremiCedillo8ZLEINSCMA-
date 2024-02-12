function validarNumero(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}
function encontrarMayor() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var mayor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    document.getElementById('resultado').innerText = "El mayor número es: " + mayor;
}
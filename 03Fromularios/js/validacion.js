/**
 * JS es un lenguaje interpretado, para lo cual debemos entender que el manejo de variable es no tipado
 * JS maneja var para cadenas, enteros, dobles, flotantes, etc. 
 * JS es un lenguaje bajo multiparadigma
 * 
 */

function validad(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }
    var checkOK="qwertyuioasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";
     var checkString=formulario.nombre.value;

     alert(checkString);

     var todoesvalido =true;

     for (var i=0; i<checkString.length; i++){
        var ch= checkString.charAt(i);
        for(var j=0; j<checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        if(j==checkOK.length){
            todoesvalido=false;
            break;
        }
     }
     if(!todoesvalido){
        alert("Favor de escribir unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
     }
}
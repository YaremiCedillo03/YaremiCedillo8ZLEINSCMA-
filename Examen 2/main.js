const criptoMonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');


const objetoBusqueda = {
    moneda: '',
    criptomoneda: ''
};

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
     resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', ()=>{
    consultarCriptoMonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptoMonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});



function consultarCriptoMonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(resultado =>{
            
              return  obtenerCriptomonedas(resultado.Data)
            
        })
        .then(criptomonedas =>
            selectCriptomonedas(criptomonedas))
        .catch(error => {
            console.log('error', error)
        })
    
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
       

        const {FullName, Name} = cripto.CoinInfo;
        
       
        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;
        criptoMonedasSelect.appendChild(option);

    });
};

function leerValor(e){
    objetoBusqueda[e.target.name] = e.target.value;
    console.log('objetoBusqueda :>> ', objetoBusqueda);
}
function submitFormulario(e) {
    e.preventDefault();

   
    const {moneda, criptomoneda} = objetoBusqueda;

    if(moneda === ''|| criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }



    consultarAPI();

}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('error');

       divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
        console.log('mensaje :>> ', mensaje);
    }
}

function consultarAPI() {
    const {moneda, criptomoneda} = objetoBusqueda;

    const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;


    mostrarSpinner();

    fetch(url)
        .then(respuesta =>{
            console.log('respuesta :>> ', respuesta);
            return respuesta.json();
        })
        .then(cotizacion =>{
 
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda])
        })
}

function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML(resultado);
    console.log('cotizacion', cotizacion)

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCTHOUR, LASTUPDATE} = cotizacion;


    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `El precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `Variación últimas 24 hrs: <span>${CHANGEPCTHOUR}%</span>`;

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}


function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML(resultado);

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}
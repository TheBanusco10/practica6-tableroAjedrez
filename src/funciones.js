/**
 * @description Iniciamos el array de números
 * @param {integer} cantidad Número de casillas
 */
function iniciarNumeros(cantidad = 16) {

    for (let index = 0; index < cantidad; index++) {

        numeros.push(index);
        
    }

}

/**
 * @description Mezclamos el array de números para que la posición de éstos sea al azar
 * @param {*} a Array a mezclar
 */
function mezclar(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * @description Creamos tantos div como números haya en el array y lo muestra en el DOM
 */
function crearDiv() {

    let divs = [];

    numeros.forEach(element => {

        let div = document.createElement('div');
    
        let numero = document.createTextNode(element);
    
        div.setAttribute('id', element);
        div.setAttribute('class', 'elemento white');
    
        div.appendChild(numero);

        divs.push(div);

    });


    app.append(...divs);

}

/**
 * @description Pinta el fondo de un div pasado por parámetro del color indicado
 * @param {*} div 
 * @param {string} color 
 */
function pintarFondo(div, color = 'red') {
    
    // Borramos las posibles clases que tenga el elemento
    div.classList.remove('red');
    div.classList.remove('white');

    div.classList.add(color);


}

/**
 * @description Pone en blanco todos los números en rojo
 */
function limpiar() {

    let divs = document.querySelectorAll('.elemento');

    for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        pintarFondo(element, 'white');
    }

}

/**
 * @description Activamos pintar en rojo
 */
function rojo() {

    pintar = true;
    borrar = false;

}

/**
 * @description Activamos pintar en blanco
 */
function blanco() {

    pintar = false;
    borrar = true;

}

/**
 * @description Pintamos el fondo de los divs como un tablero de ajedrez
 */
function pintarAjedrez() {

    // Limpiamos primero el tablero
    limpiar();

    let divs = document.querySelectorAll('.elemento');
    
    let primeraFila = true;
    let segundaFila = false;

    let fila = 4;

    for (let i = 1; i <= divs.length; i++) {

        // Comprobamos si hemos cambiado de fila
        if (i > fila) {

            fila += 4;
            
            primeraFila = !primeraFila;
            segundaFila = !segundaFila;

        }
        
        // Si estamos en la primera fila, pintamos las casillas 1 y 3
        if (primeraFila && (i % 4 == 1 || i % 4 == 3)) {

            pintarFondo(divs[i - 1]);


        // Si estamos en la segunda fila, pintamos las casillas 2 y 4
        }else if (segundaFila && (i % 4 == 2 || i % 4 == 0)) { 

            pintarFondo(divs[i - 1]);

        }

        // Iremos intercambiando la fila en la que nos encontramos a lo largo del tablero


        
    }

}

/**
 * Suma el contenido de los divs
 * @param {string} color Color de los divs a sumar 
 */
function sumar(color) {

    let divs = [];
    let suma = 0;
    let mensaje = '';

    switch (color) {
        case 'red':
            divs = document.querySelectorAll('.red');
            mensaje = 'Las rojas son: ';
            break;
    
        default:
            divs = document.querySelectorAll('.white');
            mensaje = 'Las blancas son: ';
            break;
    }


    for (let index = 0; index < divs.length; index++) {
        const element = divs[index];

        suma += parseInt(element.textContent);
        
    }

    mostrarMensaje(mensaje + suma);

}


/**
 * @description Muestra un mensaje en el DOM
 * @param {string} mensaje Mensaje a mostrar
 */
function mostrarMensaje(mensaje) {

    resultado.innerHTML = '';

    let div = document.createElement('div');

    let contenidoTexto = document.createTextNode(mensaje);

    div.appendChild(contenidoTexto);

    resultado.appendChild(div);

}
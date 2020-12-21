document.addEventListener('DOMContentLoaded', () => {
    
    iniciarNumeros();
    mezclar(numeros);
    crearDiv();

    document.addEventListener('click', (evt) => {
        
        if (evt.target.matches('#limpiar')) limpiar();
        else if (evt.target.matches('#rojo')) rojo();
        else if (evt.target.matches('#blanco')) blanco();
        else if (evt.target.matches('#ajedrez')) pintarAjedrez();
        else if (evt.target.matches('#sumarRojas')) sumar('red');
        else if (evt.target.matches('#sumarBlancas')) sumar('white');
        else if (evt.target.attributes.class != undefined
                && pintar
                && evt.target.attributes.class.textContent.includes('elemento')) pintarFondo(evt.target);
        else if (evt.target.attributes.class != undefined
                && borrar
                && evt.target.attributes.class.textContent.includes('elemento')) pintarFondo(evt.target, 'white');
    });

});
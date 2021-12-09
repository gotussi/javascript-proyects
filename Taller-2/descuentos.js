function calcularPrecioFinal(precioOriginal,descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioFinal = (precioOriginal * porcentajeConDescuento) / 100;

    return precioFinal;
}

function botonPrecioFinal(){
    const inputPrecio = document.getElementById("input-precio");
    const inputDescuento = document.getElementById("input-descuento");

    const valorPrecioReal = Number(inputPrecio.value);
    const valorDescuento = Number(inputDescuento.value);

    const miPrecioFinal = calcularPrecioFinal(valorPrecioReal,valorDescuento);

    const resultadoParrafo = document.getElementById("resultadoParrafo"); //llamo el elemento y lo meto en RAM
    resultadoParrafo.innerHTML = "El precio final es de $" + miPrecioFinal; //Uso la propiedad innerHTML con la variable del elemento y le doy un valor;
}


//console.log({precioOriginal,descuento,porcentajeConDescuento,precioFinal}); // Log con objetos 
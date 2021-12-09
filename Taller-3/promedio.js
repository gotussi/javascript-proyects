//helpers
function esPar(numerito) {
    if (numerito % 2 === 0) { //Si la division de 2 entre el Parametro el modulo(DECIMALES) es === a 0 (es PAR)
        return  true;
    } else {                  //Si la division el modulo deja decimales(RESIDUO) es INPAR
        return false;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------
//Promedio de Media aritmetrica
function calcularPromedio(inputLista) {
    //let sumaLista = 0;

    /*for (let i = 0; i < lista.length; i++ ) {  //Forma de sumar los elementos de un Array
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = inputLista.reduce(
        function (acumulado  = 0,nuevoValor) {  //Forma de sumar los elementos de un Array
            return acumulado + nuevoValor;
        }
    );
     

    const promedioLista = sumaLista / inputLista.length;
    return promedioLista;
}
   
//--------------------------------------------------------------------------------------------------------------------------------

//Mediana
function calcularMediana(miLista) {

    miLista.sort(function (a,b) {
        return a- b;
    })
    
    let mediana;
    
    const mitadLista = parseInt(miLista.length / 2); //Como el resultado de esto puede ser floante lo transformamos a entero

    if (esPar(miLista.length)) {
        const elemento1 = miLista[mitadLista];
        const elemento2 = miLista[mitadLista - 1];

        const promedioElemento1y2 = calcularPromedio([elemento1,elemento2]);
        mediana = promedioElemento1y2;
        return mediana;

    } else {
        mediana = miLista[mitadLista];
        return mediana;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------

//Calculando Moda 


function calcularModa(tusListas) {
    //convertir un array(tusListas) a un objeto
    //Para solo hacer La cuenta de cuantas veces aparece cada elemento dentro del array 
    const cuentaDeLista = {};
    tusListas.map(
       function (elemento) {
            if (cuentaDeLista[elemento]) {
                cuentaDeLista[elemento] += 1;
            } else {
                cuentaDeLista[elemento] = 1;
            }
       } 
    )
    //Luego Convertir un Objeto a un Array
    const listaArray = Object.entries(cuentaDeLista).sort(  //y organizar la lista de los valores que menos se repiten a los valores que mas se repiten
        function (a,b) {
            return a[1] - b[1];
        }
    );
    const moda = listaArray[listaArray.length - 1];  //Tomar el elemento que esta de ultimo(el que mas se repite)
    return moda;                                        //y guardarlo en RAM 
}

//Botones Funciones

function botonPromedio() {
    let resultEstadistica = document.getElementById("resultEstadistica");
    let inputSelect = document.getElementById("datos");

    let value = inputSelect.value;
    console.log(value);
    //Pasar lista por input
    //Usamos el metodo split para separar los datos del input en la coma y los metemos en una variable  y los convertimos a numeros
    let valueArray = Array.from(value.split(','),Number);
    console.log(valueArray);

    let promedio = parseInt(calcularPromedio(valueArray));

    resultEstadistica.innerHTML = "Media Aritmetica de tus datos es el:  " + promedio;
}

function botonMediana() {
    let resultEstadistica = document.getElementById("resultEstadistica");
    let inputSelect = document.getElementById("datos");

    let value = inputSelect.value;

    let valueArray = Array.from(value.split(','),Number);

    let mediana = parseInt(calcularMediana(valueArray));

    resultEstadistica.innerHTML = "La mediana de tus datos es el:  " + mediana;
}

function botonModa() {
    let resultEstadistica = document.getElementById("resultEstadistica");
    let inputSelect = document.getElementById("datos");

    let value = inputSelect.value;
    let valueArray = Array.from(value.split(','),Number);

    let moda = parseInt(calcularModa(valueArray));

    resultEstadistica.innerHTML = "La moda de tus datos es el:  " + moda;
}
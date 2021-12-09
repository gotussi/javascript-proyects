//Meter todos los elementos de una propiedad(Especifica) de un array en otro array 
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
)
//Ordenamos la  lista de menor a mayor (helpers)
const salariosColSorted =  salariosCol.sort(
    function (a,b) {
        return a -b;
    }
)
//Validamos si es par o inpar (helpers)
function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}
//Funcion para calcular promedio (Helpers)
function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (acumulado  = 0,nuevoValor) {  //Forma de sumar los elementos de un Array
            return acumulado + nuevoValor;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Funcion para calcular mediana de salarios
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personitaMitad1,personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//const medianaGeneralCol = medianaSalarios(salariosColSorted)


//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

//const medianaTop10 = medianaSalarios(salarioColTop10);

//Resultado :
//console.log("Medina General " + medianaGeneralCol)
//console.log("Top 10%  " + medianaTop10);

function botonMediaGeneral() {

    let resultSelect = document.getElementById("resultSelect");
    const medianaGeneralCol = medianaSalarios(salariosColSorted)

    resultSelect.innerHTML = "El salario promedio de todos los colombianos es de: $ " + medianaGeneralCol + " Dolares";
}

function boton10() {
    let resultSelect = document.getElementById("resultSelect");
    const medianaTop10 = medianaSalarios(salarioColTop10);

    resultSelect.innerHTML = "El 10% de los colombianos que mas ganan tienen un salario de: $" + medianaTop10 + " Dolares";
}
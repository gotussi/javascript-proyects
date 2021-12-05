// Codigo del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado + "cm(2)");

console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo")

function perimetroTriangulo(lado1,lado2,base) {
    return (lado1 + lado2 + base);
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es : " + areaTriangulo + "cm");
console.groupEnd();





// Codigo del Circulo
console.group("Circulo");
//const radio = 4;
// console.log("El radio del circulo es: " + radio + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}
//const diametro = radio * 2;
//console.log("El diametro del circulo es: " + diametro + "cm");
const PI = Math.PI;
console.log("El valor de pi es: " + PI);

function circunferencia(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;  
}
//const circunferencia = diametro * PI;
//console.log("La circunferencia del circulo es: " + circunferencia + "cm");

//Calcular Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();






// AQUI interactuamos con HTML  &  JS

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
   const lado1 = document.getElementById("lado1");
   const lado2 = document.getElementById("lado2");
   const base = document.getElementById("base");
   
   const valor1 = Number(lado1.value);
   const valor2 = Number(lado2.value);
   const valorBase = Number(base.value);

   const perimetro = perimetroTriangulo(valor1,valor2,valorBase);
   alert("El perimetro de su triangulo es:  " + perimetro);
}
function calcularAreaTriangulo(){
    const base1 = document.getElementById("base1");
    const altura = document.getElementById("altura")

    const valorBase1 = Number(base1.value);
    const valorAltura = Number(altura.value);

    const area = areaTriangulo(valorAltura, valorBase1);
    alert(area);
}


//CIRCULO  
function calcularCircunferencia(){
    const radioV = document.getElementById("radio");
    const valorRadio = Number(radioV.value);

    const diametro = diametroCirculo(valorRadio);
    
    const miCircunferencia = diametro * PI;
    alert("La circunferencia de tu circulo es: " + miCircunferencia); 
    
}
function calcularArea() {
    const radioA = document.getElementById("radioA");
    const valorRadioA = Number(radioA.value);

    const area = areaCirculo(valorRadioA);
    alert(area);
}


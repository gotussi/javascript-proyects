function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        alert("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
};

function calcularAlturaIsoceles() {
    const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    const ladoBase = document.getElementById("ladoBase");

    const valorLadoA = Number(ladoA.value);
    const valorLadoB = Number(ladoB.value);
    const valorLadoBase = Number(ladoBase.value);

    const resultado = alturaTrianguloIsosceles(valorLadoA,valorLadoB,valorLadoBase);
    
    if (valorLadoBase > valorLadoA && valorLadoBase > valorLadoB) {
        alert("Debe ser menor la base");
    } else {
        alert(resultado);
    }
}
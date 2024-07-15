//Calculo del triangulo
function calcular() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        document.getElementById('result').innerText = 'Por favor, ingrese valores numéricos válidos para todos los lados.';
        return;
    }

    const perimetro = lado1 + lado2 + lado3;

    document.getElementById('result').innerHTML = perimetro + " es el perimetro del triangulo";
}

function resultado(){
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultArea').innerText = 'Por favor, ingrese valores numéricos válidos para todos los lados.';
        return;
    }

    const area = (base*altura) / 2;

    document.getElementById('resultArea').innerHTML = area + " Es el area del triangulo"

}

//Calculo del rectangulo

function calcularRec(){
    const baseRec = parseFloat(document.getElementById('baseRec').value);
    const alturaRec = parseFloat(document.getElementById('alturaRec').value);

    const perimetro = (baseRec + alturaRec) * 2;

    document.getElementById("ResultPeriRec").innerHTML = perimetro + " Es el perimetro del rectangulo";
}

function calcularAreaRec(){
    const baseAreaRec = parseFloat(document.getElementById('baseAreaRec').value);
    const alturaAreaRec = parseFloat(document.getElementById('alturaAreaRec').value);
    
    const perimetro = baseAreaRec * alturaAreaRec;

    document.getElementById("resultAreaRec").innerHTML = perimetro + " Es el area de un rectangulo";
}

function ladosCuadrado(){
    const lados = parseInt(document.getElementById('ladoCuadrado').value);

    const perimetro = lados * 4;

    document.getElementById("resultCuadrado").innerHTML = perimetro + " Es el perimetro de un cuadrado"
}
function areaCuadrado(){
    const areaC = parseInt(document.getElementById('areaCuadrado').value);
    const area = areaC ** 2;

    document.getElementById("resultAreaC").innerHTML = area + " Es el area de un cuadrado"
}

function radioCirculo(){
    const radioC = parseFloat(document.getElementById('radioC').value);
    const perimetro = (2 * Math.PI * radioC) ** 2;

    document.getElementById("resultCirculo").innerHTML = perimetro + " es el perimetro de un circulo";
}

function areaCir(){
    const areaCirculo = parseFloat(document.getElementById('areaCirculo').value);
    const area = (Math.PI * areaCirculo) ** 2;

    document.getElementById("resultRadio").innerHTML = area + " Es el area de un circulo";
}
function mezclarYOrdenar() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const todosLosDigitos = (input1 + input2).split('').map(Number);

    const resultado = todosLosDigitos.sort((a, b) => a - b);

    document.getElementById('resultado').textContent = "Resultado ordenado: " + resultado.join(' ');
}

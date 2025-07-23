function calcularMedia() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    const media = (num1 + num2) / 2;
    alert(`A média dos dois números é: ${media}`);
}

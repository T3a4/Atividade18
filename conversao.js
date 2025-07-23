function converterMoeda() {
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const valorDolar = parseFloat(document.getElementById('valorDolar').value);

    if (isNaN(cotacao) || isNaN(valorDolar)) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return;
    }

    const valorReais = cotacao * valorDolar;
    document.getElementById('resultado').textContent = `O valor em reais é: R$ ${valorReais.toFixed(2)}`;
}

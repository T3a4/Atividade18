document.getElementById('conversaoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cotacao = parseFloat(document.getElementById('cotacao').value);
  const dolar = parseFloat(document.getElementById('dolar').value);
  const reais = cotacao * dolar;

  document.getElementById('resultado').textContent = `Valor em reais: R$ ${reais.toFixed(2)}`;
});

document.getElementById('mediaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const media = (num1 + num2) / 2;

  alert(`A média é: ${media}`);
});

// Declaração de variáveis para informações de uma pessoa
let nome;
let sexo;
let idade;
let salario;

// Declaração de variáveis para informações de um veículo
let marca;
let modelo;
let anoFabricacao;
let anoModelo;
let valor;

// Função para capturar os dados inseridos pelo usuário
function capturarDados() {
    // Informações da pessoa
    nome = document.getElementById("nome").valvue;
    sexo = document.getElementById("sexo").valvue;
    idade = parseInt(document.getElementById("idade").valvue);
    salario = parseFloat(document.getElementById("salario").valvue);

    // Informações do veículo
    marca = document.getElementById("marca").valvue;
    modelo = document.getElementById("modelo").valvue;
    anoFabricacao = parseInt(document.getElementById("anoFabricacao").valvue);
    anoModelo = parseInt(document.getElementById("anoModelo").valvue);
    valor = parseFloat(document.getElementById("valor").valvue);

    // Exibindo os dados no console (pode ser adaptado para exibir na tela)
    console.log("Dados da Pessoa:");
    console.log("Nome:", nome);
    console.log("Sexo:", sexo);
    console.log("Idade:", idade);
    console.log("Salário:", salario);


    console.log("Dados do veículo:");
    console.log("Marca:", marca);
    console.log("Modelo:", modelo);
    console.log("Ano de Fabricação:", anoFabricacao);
    console.log("Ano do Modelo:", anoModelo);
    console.log("Valor:", valor);
}
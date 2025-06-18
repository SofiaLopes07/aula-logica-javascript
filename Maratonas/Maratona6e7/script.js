//Maratona de Exercicios 6
//Exercicio 1: Sistema de cadastro de funcionarios
class Funcionarios {
  constructor() {
    this.nome = "Daniel";
    this.cargo = "Gerente";
    this.salario = 4500;
  }
  aumentarSalario() {
    this.salario += this.salario * 0.15;
  }
  exibirInfo() {
    return `Funcionário: ${this.nome} | Cargo: ${this.cargo} | Salário: R$ ${this.salario.toFixed(2)}`;
  }
}
const funcionario1 = new Funcionarios();
console.log(funcionario1.exibirInfo());
funcionario1.aumentarSalario();
console.log(funcionario1.exibirInfo());

//Exercicio: Sistema de cadastro de produto
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Quantidade em estoque: ${this.quantidade}`);
  }
}
class Alimento extends Produto {
  constructor(nome, preco, quantidade, dataValidade) {
    super(nome, preco, quantidade);
    this.dataValidade = dataValidade;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Data de Validade: ${this.dataValidade}`);
  }
}
class Eletrodomestico extends Produto {
  constructor(nome, preco, quantidade, voltagem) {
    super(nome, preco, quantidade);
    this.voltagem = voltagem;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Voltagem: ${this.voltagem}`);
  }
}
const produtoGenerico = new Produto("Papel Higiênico", 6, 80);
produtoGenerico.exibirInfo();
console.log("---");

const leite = new Alimento("Leite", 8, 50, "08-07-2025");
leite.exibirInfo();
console.log("---");

const microondas = new Eletrodomestico("Microondas", 650, 20, "220V");
microondas.exibirInfo();

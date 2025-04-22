// 00 -> script.js
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
  }
  
  const aluno1 = new Pessoa("Juliana", 24);
  aluno1.apresentar(); // Olá, meu nome é Juliana e tenho 24 anos
  
  class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInfo() {
      console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }
  }
  
  const meuCarro = new Carro("Hyundai", "HB20", 2023);
  // meuCarro.exibirInfo(); // Carro: Hyundai HB20 2023
  
  class Aluno {
    constructor(nome, nota) {
      this.nome = nome;
      this.nota = nota;
    }
  
    verificarAprovacao() {
      if (this.nota >= 6) {
        console.log(`${this.nome} foi aprovado`);
      } else {
        console.log(`${this.nome} foi reprovado`);
      }
    }
  }
  
  const aluno2 = new Aluno("Carlos", 7);
  aluno2.verificarAprovacao(); // Carlos foi aprovado
  
  const aluno3 = new Aluno("Ana", 5.5);
  aluno3.verificarAprovacao(); // Ana foi reprovada

  


















  //Lista 

  //1.

  class Livro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    mostrarDetalhes() {
      console.log(`O título do livro é "${this.titulo}", escrito por ${this.autor}, e tem ${this.paginas} páginas.`);
    }
  }
  
  const livro1 = new Livro("48 Leis do Poder", "Felipe", 399);
  livro1.mostrarDetalhes();
  






  //ex2
  class ContaBancaria {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("Saque inválido: saldo insuficiente ou valor inválido.");
      }
    }
  
    verSaldo() {
      console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
  }
  
//ex3


class Pet {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    falar() {
      if (this.especie.toLowerCase() === "cachorro") {
        console.log(`${this.nome} diz: "Au au!"`);
      } else if (this.especie.toLowerCase() === "gato") {
        console.log(`${this.nome} diz: "Miau!"`);
      } else {
        console.log(`${this.nome} faz um som desconhecido!`);
      }
    }
  }


//ex4  

class Filme {
    constructor(titulo, genero, duracao) {
      this.titulo = titulo;
      this.genero = genero;
      this.duracao = duracao;
    }
  
    assistir() {
      console.log(`Você está assistindo "${this.titulo}", que dura ${this.duracao} minutos.`);
    }
  }

  
  //ex5

  

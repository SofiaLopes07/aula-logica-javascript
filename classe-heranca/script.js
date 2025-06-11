//Superclasse
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("O animal fez um som");
    }
}

//Subclass
class Cachorro extends Animal{
    //herdando o método da superclasse e sobreescrevendo
    fazerSom() {
        console.log("O cachorro late");
    }
}

let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();
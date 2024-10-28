class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz barulho.`);
    }
}

const cachorro = new Animal('Rex');
cachorro.falar(); 

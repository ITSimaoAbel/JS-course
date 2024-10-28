//em funcoes
const somar = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

console.log(somar(1, 2, 3));        
console.log(somar(4, 5, 6, 7, 8));  
console.log(" ");


//Em objectos
const exibirDados = ({ nome, idade, ...resto }) => {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
    console.log('Outros dados:', resto);
};

exibirDados({ nome: 'Ana', idade: 25, cidade: 'São Paulo', pais: 'Brasil' });


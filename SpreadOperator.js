//Em arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosNumeros = [...numeros1, ...numeros2];

console.log(todosNumeros); 
console.log(" ");

//Em Objectos
const pessoa1 = { nome: 'Ana', idade: 25 };
const pessoa2 = { cidade: 'São Paulo' };
const pessoaCompleta = { ...pessoa1, ...pessoa2 };

console.log(pessoaCompleta); 
console.log(" ");

//Em funcoes
const soma = (a, b, c) => a + b + c;
const numeros = [1, 2, 3];
console.log(soma(...numeros)); 

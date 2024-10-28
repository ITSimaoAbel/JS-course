const multiplicar = (a, b = 1) => a * b;

console.log(multiplicar(5, 2)); 
console.log(multiplicar(5));

//Usando como expressoes
const somar = (a, b = a) => a + b;

console.log(somar(5, 3));
console.log(somar(5));    

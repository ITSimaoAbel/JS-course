//Map
const meuMap = new Map();

// Adicionando elementos
meuMap.set('a', 1);
meuMap.set('b', 2);
meuMap.set(3, 'três');

console.log(meuMap.get('a')); // Saída: 1
console.log(meuMap.get(3));   // Saída: "três"

// Verificando o tamanho
console.log(meuMap.size); // Saída: 3

// Iterando sobre um Map
meuMap.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
});
// Saída:
// a: 1
// b: 2
// 3: três





// Set
const meuSet = new Set();

// Adicionando elementos
meuSet.add(1);
meuSet.add(2);
meuSet.add(3);
meuSet.add(2); // Não será adicionado, pois é duplicado

console.log(meuSet.has(2)); // Saída: true
console.log(meuSet.has(4)); // Saída: false

// Verificando o tamanho
console.log(meuSet.size); // Saída: 3

// Iterando sobre um Set
meuSet.forEach(valor => {
    console.log(valor);
});
// Saída:
// 1
// 2
// 3


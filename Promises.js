const promessa = new Promise((resolve, reject) => {
    const sucesso = true; 
    if (sucesso) {
        resolve('Operação bem-sucedida!');
    } else {
        reject('Erro na operação.'); 
    }
});

// Usando a promise
promessa
    .then(resultado => console.log(resultado)) 
    .catch(erro => console.log(erro)); 

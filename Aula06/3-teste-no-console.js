//  EXEMPLO DE CONSUMO DE API COM FETCH (PROMISE)
// API USADA: HTTPS://DOG.CEO/API/BREEDS/IMAGE/RANDOM
// ESSA API RETORNA UMA IMAGEM ALEÁTORIA DE CACHORRO 

// TESTE 1: Fetch básico usando .then()

// fetch() faz uma requisição HTTP para uma API externa

fetch('https://dog.ceo/api/breeds/image/random')
//fetch retorna uma PROMISE (Algo que vai chegar depois)
.then(resposta => resposta.json())
// resposta.json() converte a resposta da API para SON
// JOSON é o formato padrão de dados usados em APIs

.then(dados => {
    // dados agora contem o objeto retornado pela API

    // mostra no console o objeto completo retornado
    console.log(' Dados completo da API:', dados);
    //mostrar a URL da imagem
    console.log('URL da imagem' , dados.message)

})


// TESTE 2: usando async / await
// é uma forma mais moderna e mais fácil de ler

// vamos criar uma função assíncrona
// Funções async permitem usar "await"

async function testarAPI(){
    //await significa:
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random');

    // Precisamos converter a resposta em JSON
    const dados = await resposta.json();

    console.log('Resposta da API:', dados );

    console.log('Imagem do cachorro:' , dados.message)
}

// chamamos a função para executar o teste
testarAPI();
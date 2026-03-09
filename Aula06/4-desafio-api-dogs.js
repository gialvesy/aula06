async function analisarRacas() {

const resposta = await fetch("https://dog.ceo/api/breeds/list/all");

// converter para JSON
const dados = await resposta.json();

const racas = dados.message;

// contar quantas raças existem
const totalRacas = Object.keys(racas).length;

console.log("Total de raças:", totalRacas);


// raças que possuem sub-raças
// racas.message[raca] é um array de sub-raças
// se o array tiver tamanho maior que 0,
// significa que essa raça possui sub-raças
console.log("\nRaças com sub-raças:");

for (let raca in racas) {

if (racas[raca].length > 0) {

    // mostra no console quais são as sub-raças
console.log(raca + ":", racas[raca]);
}

}

//  qual raça tem mais fotos
let maiorQuantidade = 0;
let racaComMaisFotos = "";

// Object.keys pega todas as propriedades do objeto (a lista inteira)
// Cada propriedade é uma raça de um cachorro
const listaRacas = Object.keys(racas);

for (let raca of listaRacas) {

// imagens da raça
const respostaFotos = await fetch(`https://dog.ceo/api/breed/${raca}/images`);

const dadosFotos = await respostaFotos.json();

const quantidadeFotos = dadosFotos.message.length;

// verificar se tem mais fotos
if (quantidadeFotos > maiorQuantidade) {
maiorQuantidade = quantidadeFotos;
racaComMaisFotos = raca;
}

}

console.log("\nRaça com mais fotos:", racaComMaisFotos);
console.log("Quantidade de fotos:", maiorQuantidade);

}

analisarRacas();

/*
 -------------------- RESPOSTAS DA MISSÃO ----------------------

1 - Total de raças:
o programa conta automaticamente

2 - Raças com sub-raças:
o programa mostra no console

3 - Raça com mais fotos:
o programa compara as imagens e mostra a que tem mais fotos
*/
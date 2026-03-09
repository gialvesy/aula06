async function buscarHusky() {
const resposta = await fetch("https://dog.ceo/api/breed/husky/images/random");

const dados = await resposta.json();

console.log("🐺 Husky:", dados.message);
}

buscarHusky();
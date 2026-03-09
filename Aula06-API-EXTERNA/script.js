/*
CONSMINDO UMA API COM JAVASCRIPT
API: https://dog.ceo/api
*/

// 1- SELECIONAR ELEMNTOS DO HTML

// Pegar a imagem do cachorro
const dogImage = document.getElementById("docImage");
// Elemento onde aparece o nome da raça
const breedName =document.getElementById("breedName");
// Botão que busca cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
// Botão que busca a raça
const searchBtn = document.getElementById("searchBtn");
// Campo de input onde o usuário digita a raça
const breedIpnut = document.getElementById("breedIpnut");
// 
const dogArea = document.getElementById(".dog-area");


// ========== 2 ==========
// BASE DA API
// Endereço principal da API
const API_BASE = "https://dog.ceo/api"

// ========== 3 ==========
// FUNÇÃO QUE CHAMA A API

// função  assíncrona que faz requisição HTTP
async function fetchFromApi(endpoint) {

    // adiciona classe de loading (mostra "Carregando")
    dogArea.classList.add("loading")

    try {
        // montar a url completa da requisição
        const url = '${API_BASE}${endpoint}';

        // mostrar no console a URL chamada
        console.log("Requisição:", url)
    }
}
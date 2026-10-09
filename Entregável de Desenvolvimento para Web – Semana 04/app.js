
// BLOCO 1 - ARRAYS E MÉTODOS

const nomes = ["Ana", "Pedro", "Marcos"];

nomes.forEach(nome => console.log("Olá, " + nome + "!"));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const acimaDe20 = precos.filter(preco => preco > 20);
console.log(acimaDe20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log(produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Total dos produtos:", totalProdutos);

produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});


// BLOCO 2 - MANIPULAÇÃO DO DOM

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Marcos";

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

const lista = document.querySelector("#lista");

lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");
console.log(terceiroItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

lista.querySelector("li").classList.add("feito");

console.log("Total de itens:", lista.querySelectorAll("li").length);


// BLOCO 3 - EVENTOS

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});


// EVENT DELEGATION

// Um único evento para todos os itens da lista
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

// Novo item criado pelo JavaScript
const novoItem = document.createElement("li");
novoItem.textContent = "Item criado dinamicamente";
lista.append(novoItem);


// FORMULÁRIO

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = campoTarefa.value.trim();

    if (texto !== "") {
        const item = document.createElement("li");
        item.textContent = texto;
        lista.append(item);

        campoTarefa.value = "";
    }
});


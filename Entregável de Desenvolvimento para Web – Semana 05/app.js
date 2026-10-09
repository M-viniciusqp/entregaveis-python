
// PARTE 1 - MANIPULAÇÃO E VALIDAÇÃO DE DADOS

const pedidos = [
    { cliente: "Bia", valor: 120, status: "pago" },
    { cliente: "João", valor: 80, status: "pendente" },
    { cliente: "Ana", valor: 50, status: "pago" },
    { cliente: "", valor: 30, status: "pago" },
    { cliente: "Pedro", valor: -10, status: "pago" }
];

const pedidosValidos = pedidos.filter(pedido =>
    pedido.cliente.trim() !== "" &&
    typeof pedido.valor === "number" &&
    Number.isFinite(pedido.valor) &&
    pedido.valor > 0
);

const pedidosPagos = pedidosValidos.filter(pedido =>
    pedido.status === "pago"
);

const totalFaturado = pedidosPagos.reduce(
    (total, pedido) => total + pedido.valor,
    0
);

const textosPedidos = pedidosPagos.map(pedido =>
    `${pedido.cliente} — R$ ${pedido.valor.toFixed(2)}`
);

console.log("Pedidos pagos:", textosPedidos);
console.log("Total faturado: R$", totalFaturado.toFixed(2));


// PARTE 2 - BUSCADOR DE CEP

const formCep = document.querySelector("#formCep");
const campoCep = document.querySelector("#cep");
const botaoCep = document.querySelector("#botaoCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");
const historicoCep = document.querySelector("#historicoCep");

const historico = [];

formCep.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cep = campoCep.value.trim();

    resultadoCep.replaceChildren();

    if (!/^\d{8}$/.test(cep)) {
        statusCep.textContent = "Digite um CEP válido com 8 dígitos.";
        return;
    }

    botaoCep.disabled = true;
    statusCep.textContent = "Buscando...";

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`,
            { signal: AbortSignal.timeout(5000) }
        );

        if (!resposta.ok) {
            throw new Error("Falha na conexão.");
        }

        const dados = await resposta.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado.";
            return;
        }

        const campos = [
            ["Rua", dados.logradouro || "Não informado"],
            ["Bairro", dados.bairro || "Não informado"],
            ["Cidade", dados.localidade || "Não informado"],
            ["UF", dados.uf || "Não informado"]
        ];

        campos.forEach(([nome, valor]) => {
            const dt = document.createElement("dt");
            const dd = document.createElement("dd");

            dt.textContent = nome;
            dd.textContent = valor;

            resultadoCep.append(dt, dd);
        });

        statusCep.textContent = "";

        // Histórico de CEPs pesquisados
        historico.push({
            cep: cep,
            cidade: dados.localidade || "Não informado",
            uf: dados.uf || ""
        });

        historicoCep.replaceChildren();

        historico.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.cep} - ${item.cidade}/${item.uf}`;
            historicoCep.append(li);
        });

    } catch (erro) {
        if (erro.name === "TimeoutError") {
            statusCep.textContent = "Tempo esgotado. Tente novamente.";
        } else {
            statusCep.textContent = "Falha na conexão. Verifique sua internet.";
        }
    } finally {
        botaoCep.disabled = false;
    }
});


// PARTE 3 - MINI POKÉDEX

const formPokemon = document.querySelector("#formPokemon");
const campoPokemon = document.querySelector("#pokemon");
const botaoPokemon = document.querySelector("#botaoPokemon");
const statusPokemon = document.querySelector("#statusPokemon");
const resultadoPokemon = document.querySelector("#resultadoPokemon");

formPokemon.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = campoPokemon.value.trim().toLowerCase();

    resultadoPokemon.replaceChildren();

    if (nome === "") {
        statusPokemon.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    botaoPokemon.disabled = true;
    statusPokemon.textContent = "Buscando Pokémon...";

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`,
            { signal: AbortSignal.timeout(5000) }
        );

        if (resposta.status === 404) {
            throw new Error("NOT_FOUND");
        }

        if (!resposta.ok) {
            throw new Error("CONNECTION");
        }

        const dados = await resposta.json();

        const titulo = document.createElement("h2");
        titulo.textContent =
            dados.name.charAt(0).toUpperCase() + dados.name.slice(1);

        const imagem = document.createElement("img");
        imagem.src = dados.sprites.front_default || "";
        imagem.alt = `Imagem de ${dados.name}`;

        const tipos = document.createElement("p");
        tipos.textContent = "Tipos: " + dados.types
            .map(item => item.type.name)
            .join(", ");

        resultadoPokemon.append(titulo);

        if (dados.sprites.front_default) {
            resultadoPokemon.append(imagem);
        }

        resultadoPokemon.append(tipos);

        statusPokemon.textContent = "";

    } catch (erro) {
        if (erro.message === "NOT_FOUND") {
            statusPokemon.textContent = "Pokémon não encontrado.";
        } else if (erro.name === "TimeoutError") {
            statusPokemon.textContent = "Tempo esgotado. Tente novamente.";
        } else {
            statusPokemon.textContent =
                "Falha na conexão. Verifique sua internet.";
        }
    } finally {
        botaoPokemon.disabled = false;
    }
});

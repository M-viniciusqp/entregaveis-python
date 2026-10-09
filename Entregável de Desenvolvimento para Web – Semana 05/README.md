# Semana 05 – Objetos, Dados e Assincronismo

## Descrição

Projeto desenvolvido para praticar manipulação de objetos e arrays, consumo de APIs e atualização dinâmica do HTML com JavaScript.

## Parte 1 – Pedidos

O método `filter` valida os pedidos e seleciona os que estão pagos. O `reduce` calcula o total faturado e o `map` formata os dados dos pedidos com duas casas decimais.

## Parte 2 – Buscador de CEP

Utiliza a API ViaCEP para buscar informações de endereço. O sistema valida os oito dígitos do CEP, mostra o estado da consulta e exibe rua, bairro, cidade e UF. Também mantém um histórico das consultas realizadas.

## Parte 3 – Mini Pokédex

Utiliza a PokéAPI para buscar Pokémon pelo nome e apresentar sua imagem e seus tipos. O sistema trata nomes inválidos, erros de conexão e Pokémon não encontrados.

## Estados da tela

* **Carregando:** informa que a consulta está sendo realizada e desabilita o botão.
* **Erro:** informa problemas de conexão ou tempo esgotado.
* **Vazio/Não encontrado:** avisa quando o CEP ou Pokémon não existe.
* **Sucesso:** apresenta os dados retornados pela API.

## Assincronismo

O `fetch` realiza as requisições às APIs. O `async/await` facilita o trabalho com Promises, permitindo aguardar as respostas sem bloquear toda a execução do JavaScript.

O `response.ok` é utilizado para verificar se a resposta HTTP foi bem-sucedida. O `try/catch/finally` permite tratar falhas e restaurar o botão ao final da consulta.

## Reflexão – Por que Promise.all pode ser mais rápido?

O `await` sequencial espera uma requisição terminar antes de iniciar a próxima. Já o `Promise.all` permite iniciar várias requisições ao mesmo tempo e aguardar todas terminarem, aproveitando melhor o tempo de rede. Isso pode reduzir o tempo total quando as operações são independentes.

Por exemplo:

```javascript
const respostas = await Promise.all([
    fetch("https://viacep.com.br/ws/01001000/json/"),
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
]);
```

Nesse exemplo, as duas requisições são iniciadas antes de aguardar a conclusão do conjunto.

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Pressione F12 e abra a aba Console.
3. Pesquise um CEP válido, por exemplo `01001000`.
4. Pesquise um Pokémon, por exemplo `pikachu`.
5. Teste valores inválidos e confira as mensagens de erro.

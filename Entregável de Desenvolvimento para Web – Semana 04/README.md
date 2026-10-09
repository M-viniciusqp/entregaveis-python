# Semana 04 – Arrays, DOM e Eventos

## Descrição

Este projeto apresenta exercícios práticos de JavaScript sobre arrays, manipulação do DOM e eventos, utilizando HTML e JavaScript.

## Métodos de arrays

* **forEach:** percorre os elementos de um array e executa uma ação para cada um.
* **map:** cria um novo array transformando os elementos.
* **filter:** cria um novo array com os elementos que atendem a uma condição.
* **reduce:** acumula os valores de um array, permitindo calcular somas e totais.

## Manipulação do DOM

Foram utilizados `querySelector` e `querySelectorAll` para selecionar elementos, `createElement` para criar novos elementos, `textContent` para alterar textos, `append` para adicionar elementos e `classList` para manipular classes CSS.

## Eventos e Event Delegation

O projeto utiliza `addEventListener` para detectar cliques, passagem do mouse, digitação e envio de formulário.

O Event Delegation permite que um único evento na lista controle os cliques em vários itens, inclusive nos criados dinamicamente. Isso evita adicionar um evento individual a cada item e facilita a manutenção do código.

No formulário, `preventDefault()` impede o recarregamento da página, enquanto `trim()` ajuda a impedir o cadastro de tarefas vazias.

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Pressione F12 para abrir as ferramentas do desenvolvedor.
3. Acesse a aba Console para visualizar os resultados.
4. Teste os botões, os campos de texto e a adição de tarefas.

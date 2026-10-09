
// ==========================================
// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS
// ==========================================

// 1. Variável let
let pontos = 10;
pontos = pontos + 10;
console.log("Pontos:", pontos);

// 2. Constante
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

// Descomente a linha abaixo para testar o erro:
// MAX_PONTOS = 200;
// Erro: TypeError, pois uma constante não pode ser reatribuída.

// 3. Tipos primitivos
let nome = "Marcos";
let idade = 19;
let ativo = true;
let cidade;
let valor = null;

console.log(typeof nome);    // string
console.log(typeof idade);   // number
console.log(typeof ativo);   // boolean
console.log(typeof cidade);  // undefined
console.log(typeof valor);   // object (bug histórico)

// 4. Template Literals e concatenação
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");


// ==========================================
// BLOCO 2 - FUNÇÕES
// ==========================================

// 1. Função declarada e hoisting
console.log(ehMaiorDeIdade(19));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. Função de expressão
const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(20));

// Para testar o ReferenceError, tente chamar a função
// antes da declaração. Ela não pode ser chamada antes
// da inicialização da constante.

// 3. Dobro nas três formas

function dobro(n) {
    return n * 2;
}
console.log(dobro(5));

const dobroExpressao = function(n) {
    return n * 2;
};
console.log(dobroExpressao(5));

const dobroArrow = n => n * 2;
console.log(dobroArrow(5));

// 4. Parâmetro com valor padrão
function calcularDobro(n = 1) {
    return n * 2;
}
console.log(calcularDobro());


// ==========================================
// BLOCO 3 - CONTROLE DE FLUXO
// ==========================================

// 1. Classificar nota
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(4));

// 2. Semáforo
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

// 3. Tabuada do 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva
let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// 5. Números pares e ímpares com for
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// 6. Números pares e ímpares com while
let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

    numero++;
}

// 7. Dia da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

console.log(diaDaSemana(2));
console.log(diaDaSemana(8));


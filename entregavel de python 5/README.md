# Sistema de Análise de Dados — Sprint 5

## Objetivo

Desenvolver um programa em Python para ler arquivos CSV, validar informações e gerar um relatório.

## Validações

* **E-mail:** verifica o formato do endereço usando Regex.
* **CPF:** verifica o padrão `000.000.000-00`.
* **Telefone:** verifica o padrão `(00) 00000-0000` ou `(00) 0000-0000`.
* **Data:** verifica o padrão `DD/MM/AAAA`.

## Tratamento de exceções

* `FileNotFoundError`: arquivo não encontrado.
* `ValueError`: erro de conversão de valores.
* `KeyError`: coluna obrigatória ausente.
* `FormatoInvalidoError`: campo com formato inválido.
* `finally`: informa que a análise foi finalizada.

O programa também utiliza `else` para informar que a leitura terminou sem erros.

## Exemplo de entrada

Arquivo `dados.csv` contendo e-mail, CPF, telefone e data.

## Exemplo de saída

* Total de registros: 3
* Registros válidos: 2
* Registros inválidos: 1

## Como executar

1. Instale o Python.
2. Coloque `main.py` e `dados.csv` na mesma pasta.
3. Execute:

```bash
python main.py
```

O programa exibirá o relatório e gerará o arquivo `relatorio.txt`.

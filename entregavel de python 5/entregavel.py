import csv
import re


# Exceção personalizada
class FormatoInvalidoError(Exception):
    pass


# Funções de validação com Regex
def validar_email(email):
    return re.match(r"^[\w.-]+@[\w.-]+\.\w{2,}$", email) is not None


def validar_cpf(cpf):
    return re.match(r"^\d{3}\.\d{3}\.\d{3}-\d{2}$", cpf) is not None


def validar_telefone(telefone):
    return re.match(r"^\(\d{2}\) \d{4,5}-\d{4}$", telefone) is not None


def validar_data(data):
    return re.match(r"^\d{2}/\d{2}/\d{4}$", data) is not None


# Leitura e análise do arquivo CSV
def analisar_arquivo(caminho):
    validos = []
    invalidos = []

    try:
        with open(caminho, "r", encoding="utf-8") as arquivo:
            leitor = csv.DictReader(arquivo)

            colunas = {"email", "cpf", "telefone", "data"}

            if not colunas.issubset(leitor.fieldnames or []):
                raise KeyError("Uma ou mais colunas estão ausentes.")

            for linha in leitor:
                try:
                    if not (
                        validar_email(linha["email"])
                        and validar_cpf(linha["cpf"])
                        and validar_telefone(linha["telefone"])
                        and validar_data(linha["data"])
                    ):
                        raise FormatoInvalidoError(
                            "Um ou mais campos possuem formato inválido."
                        )

                    validos.append(linha)

                except (FormatoInvalidoError, ValueError) as erro:
                    invalidos.append((linha, str(erro)))

    except FileNotFoundError:
        print("Erro: arquivo não encontrado.")

    except KeyError as erro:
        print(f"Erro: coluna ausente no CSV: {erro}")

    except ValueError as erro:
        print(f"Erro de conversão: {erro}")

    else:
        print("Arquivo analisado com sucesso.")

    finally:
        print("Análise finalizada.")

    return validos, invalidos


# Relatório final
validos, invalidos = analisar_arquivo("dados.csv")

print("\n===== RELATÓRIO FINAL =====")
print(f"Total de registros analisados: {len(validos) + len(invalidos)}")
print(f"Registros válidos: {len(validos)}")
print(f"Registros inválidos: {len(invalidos)}")

print("\nDados válidos:")
for registro in validos:
    print(
        f'E-mail: {registro["email"]} | '
        f'CPF: {registro["cpf"]} | '
        f'Telefone: {registro["telefone"]} | '
        f'Data: {registro["data"]}'
    )

print("\nDados inválidos:")
for registro, motivo in invalidos:
    print(f"E-mail: {registro.get('email', 'N/A')} | Motivo: {motivo}")

# Salvar o relatório em TXT
try:
    with open("relatorio.txt", "w", encoding="utf-8") as arquivo:
        arquivo.write("===== RELATÓRIO FINAL =====\n")
        arquivo.write(f"Registros válidos: {len(validos)}\n")
        arquivo.write(f"Registros inválidos: {len(invalidos)}\n")

        for registro in validos:
            arquivo.write(f'{registro["email"]} - Válido\n')

        for registro, motivo in invalidos:
            arquivo.write(
                f'{registro.get("email", "N/A")} - Inválido: {motivo}\n'
            )

except OSError as erro:
    print(f"Erro ao salvar relatório: {erro}")


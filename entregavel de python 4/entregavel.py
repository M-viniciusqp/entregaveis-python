
# Sprint 4 - Sistema de Produtos

produtos = []

# 1. Cadastro de produtos
quantidade = int(input("Quantos produtos deseja cadastrar? "))

for i in range(quantidade):
    nome = input("Nome do produto: ")
    preco = float(input("Preço: R$ "))
    categoria = input("Categoria: ")

    produtos.append({
        "nome": nome,
        "preco": preco,
        "categoria": categoria
    })

# Equivalência em Portugal:
# Usar um vetor de tamanho fixo e um laço PARA
# para preencher cada posição com os dados do produto.


# 2. Filtragem por preço
valor = float(input("\nInforme um preço para filtrar: "))

print("\nProdutos acima desse preço:")
for produto in produtos:
    if produto["preco"] > valor:
        print(f'{produto["nome"]} - R$ {produto["preco"]:.2f}')

# Equivalência em Portugal:
# Percorrer o vetor com PARA e mostrar apenas
# os produtos cujo preço seja maior que o valor informado.


# 3. Ordenação crescente e decrescente
produtos.sort(key=lambda produto: produto["preco"])

print("\nProdutos em ordem crescente:")
for produto in produtos:
    print(f'{produto["nome"]} - R$ {produto["preco"]:.2f}')

produtos_decrescentes = sorted(
    produtos, key=lambda produto: produto["preco"], reverse=True
)

print("\nProdutos em ordem decrescente:")
for produto in produtos_decrescentes:
    print(f'{produto["nome"]} - R$ {produto["preco"]:.2f}')

# Equivalência em Portugal:
# Utilizar o método da bolha (bubble sort),
# comparando os preços e trocando suas posições
# até que o vetor esteja ordenado.


# 4. Categorias únicas
categorias = set()

for produto in produtos:
    categorias.add(produto["categoria"])

print("\nCategorias únicas:", categorias)

# Equivalência em Portugal:
# Percorrer as categorias e adicionar ao vetor
# somente os valores que ainda não existem nele.


# 5. Estatísticas dos preços
precos = []

for produto in produtos:
    precos.append(produto["preco"])

if precos:
    estatisticas = (
        min(precos),
        max(precos),
        sum(precos) / len(precos)
    )

    print("\nEstatísticas:")
    print(f"Menor preço: R$ {estatisticas[0]:.2f}")
    print(f"Maior preço: R$ {estatisticas[1]:.2f}")
    print(f"Média dos preços: R$ {estatisticas[2]:.2f}")

# Equivalência em Portugal:
# Percorrer os preços para encontrar o menor e o maior,
# somar os valores e dividir pela quantidade de produtos.
# Guardar os resultados em posições fixas de um vetor.


# 6. Relatório final
print("\n===== RELATÓRIO FINAL =====")
print(f"Total de produtos: {len(produtos)}")
print(f"Categorias cadastradas: {categorias}")

for produto in produtos:
    print(
        f'Produto: {produto["nome"]} | '
        f'Preço: R$ {produto["preco"]:.2f} | '
        f'Categoria: {produto["categoria"]}'
    )

# Equivalência em Portugal:
# Utilizar laços PARA para percorrer os produtos
# e apresentar os dados em um relatório formatado.


# 7. Operações de conjuntos (exemplo)
categorias_a = {"Bebidas", "Lanches"}
categorias_b = {"Lanches", "Sobremesas"}

print("\nOperações de conjuntos:")
print("União:", categorias_a | categorias_b)
print("Interseção:", categorias_a & categorias_b)
print("Diferença:", categorias_a - categorias_b)
print("Diferença simétrica:", categorias_a ^ categorias_b)

# Equivalência em Portugal:
# União: reunir os valores sem repetir.
# Interseção: encontrar valores presentes nos dois vetores.
# Diferença: encontrar valores que existem apenas no primeiro.
# Diferença simétrica: encontrar valores exclusivos de cada vetor.
# Essas operações podem ser feitas com laços e comparações.

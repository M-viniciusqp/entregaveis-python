
from abc import ABC, abstractmethod


# Classe abstrata
class Conta(ABC):
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    @property
    def titular(self):
        return self._titular

    @titular.setter
    def titular(self, valor):
        if not valor.strip():
            raise ValueError("O titular não pode ficar vazio.")
        self._titular = valor

    @property
    def saldo(self):
        return self._saldo

    @saldo.setter
    def saldo(self, valor):
        if valor < 0:
            raise ValueError("O saldo não pode ser negativo.")
        self._saldo = valor

    @abstractmethod
    def calcular_rendimento(self):
        pass

    def __str__(self):
        return f"Titular: {self.titular} | Saldo: R$ {self.saldo:.2f}"

    def __repr__(self):
        return f"{self.__class__.__name__}('{self.titular}', {self.saldo})"


# Conta corrente
class ContaCorrente(Conta):
    def __init__(self, titular, saldo, taxa):
        super().__init__(titular, saldo)
        self.taxa = taxa

    def calcular_rendimento(self):
        return self.saldo - self.taxa

    def __str__(self):
        return f"Conta Corrente | {super().__str__()}"

    def __repr__(self):
        return (
            f"ContaCorrente('{self.titular}', "
            f"{self.saldo}, {self.taxa})"
        )


# Conta poupança
class ContaPoupanca(Conta):
    def __init__(self, titular, saldo, rendimento):
        super().__init__(titular, saldo)
        self.rendimento = rendimento

    def calcular_rendimento(self):
        return self.saldo * self.rendimento / 100

    def __str__(self):
        return f"Conta Poupança | {super().__str__()}"

    def __repr__(self):
        return (
            f"ContaPoupanca('{self.titular}', "
            f"{self.saldo}, {self.rendimento})"
        )


# Classe para representar o banco
class Banco:
    def __init__(self, nome):
        self.nome = nome
        self.contas = []

    def adicionar_conta(self, conta):
        if not isinstance(conta, Conta):
            raise TypeError("O objeto precisa ser uma conta.")
        self.contas.append(conta)

    def listar_contas(self):
        for conta in self.contas:
            print(conta)

    def __str__(self):
        return f"Banco: {self.nome} | Contas: {len(self.contas)}"

    def __repr__(self):
        return f"Banco('{self.nome}')"


# Testes e demonstração
banco = Banco("Banco Python")

contas = [
    ContaCorrente("Ana", 1000, 10),
    ContaPoupanca("Bruno", 1500, 5),
    ContaCorrente("Carlos", 800, 15),
    ContaPoupanca("Daniela", 2000, 4),
    ContaCorrente("Eduardo", 1200, 8),
    ContaPoupanca("Fernanda", 3000, 6),
    ContaCorrente("Gabriel", 900, 12),
    ContaPoupanca("Helena", 2500, 3),
    ContaCorrente("Igor", 1800, 20),
    ContaPoupanca("Julia", 4000, 7)
]

for conta in contas:
    banco.adicionar_conta(conta)

print(banco)
print("\n===== CONTAS CADASTRADAS =====")
banco.listar_contas()

# Polimorfismo: cada conta calcula um resultado diferente
print("\n===== RESULTADOS =====")
for conta in contas:
    resultado = conta.calcular_rendimento()
    print(f"{conta.titular}: R$ {resultado:.2f}")

# Teste de entrada inválida
print("\n===== TESTE DE EXCEÇÃO =====")
try:
    conta_invalida = ContaPoupanca(" ", -100, 5)
except ValueError as erro:
    print(f"Erro identificado: {erro}")

# Representação dos objetos
print("\n===== REPRESENTAÇÃO =====")
print(repr(contas[0]))

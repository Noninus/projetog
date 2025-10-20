# Projeto do Zero - Aprenda Programação de Verdade

Bem-vindo! Este guia vai te ensinar programação **DE VERDADE**, não só copiar e colar código.

Você vai aprender:
- ✅ **Lógica de programação** (variáveis, condicionais, laços)
- ✅ **Orientação a Objetos** (classes, objetos, métodos, encapsulamento)
- ✅ **Regras de negócio** (validações, cálculos, lógica real)
- ✅ **Banco de dados** (SQLite - salvar e buscar dados de verdade)
- ✅ **CRUD completo** (com validações e persistência)

**IMPORTANTE:** Este guia tem **EXERCÍCIOS** que você precisa fazer. Não tem tudo pronto!

---

## 📋 Índice

1. [Fundamentos: Programação do Zero](#parte-1-fundamentos-programação-do-zero)
2. [Orientação a Objetos: Classes e Objetos](#parte-2-orientação-a-objetos)
3. [Regras de Negócio: Validações e Cálculos](#parte-3-regras-de-negócio)
4. [Banco de Dados: Persistindo Dados](#parte-4-banco-de-dados)
5. [Projeto Final: Sistema Completo](#parte-5-projeto-final)

---

# Parte 1: Fundamentos - Programação do Zero

## 1.1 - O que é programação?

Programação é **dar instruções para o computador resolver problemas**.

**Exemplo do mundo real:**

```
Problema: Calcular o troco de uma compra

Instruções:
1. Receba o valor total da compra
2. Receba o valor pago pelo cliente
3. Calcule: troco = valor_pago - valor_compra
4. Mostre o troco
```

**Em JavaScript:**

```javascript
function calcularTroco(valorCompra, valorPago) {
  let troco = valorPago - valorCompra;
  return troco;
}

let resultado = calcularTroco(50, 100);
console.log("Troco: R$", resultado);  // Troco: R$ 50
```

---

## 1.2 - Variáveis e Tipos de Dados

### O que são variáveis?

Variáveis são **caixas etiquetadas** que guardam informações.

```javascript
// String (texto)
let nome = "João Silva";
let produto = "Pizza Marguerita";

// Number (número)
let idade = 25;
let preco = 29.90;
let quantidade = 3;

// Boolean (verdadeiro/falso)
let ativo = true;
let temEstoque = false;

// Array (lista)
let frutas = ["maçã", "banana", "laranja"];
let precos = [10.50, 25.90, 5.00];

// Object (objeto com propriedades)
let cliente = {
  nome: "Maria",
  idade: 30,
  cpf: "123.456.789-00"
};
```

### 🧪 EXERCÍCIO 1: Variáveis

Sem olhar código pronto! Tente fazer:

**Objetivo:** Crie variáveis para representar um produto de uma loja.

**Requisitos:**
1. Nome do produto
2. Preço
3. Quantidade em estoque
4. Se está ativo ou não
5. Lista de tamanhos disponíveis (P, M, G)

**Dica:** Use os tipos corretos (string, number, boolean, array).

<details>
<summary>💡 Clique para ver a solução</summary>

```javascript
let nomeProduto = "Camiseta Básica";
let preco = 49.90;
let estoque = 15;
let ativo = true;
let tamanhos = ["P", "M", "G"];

console.log(nomeProduto);
console.log("Preço: R$", preco);
console.log("Estoque:", estoque);
console.log("Ativo:", ativo);
console.log("Tamanhos:", tamanhos);
```
</details>

---

## 1.3 - Operações e Cálculos

```javascript
// Matemática básica
let a = 10;
let b = 5;

let soma = a + b;           // 15
let subtracao = a - b;      // 5
let multiplicacao = a * b;  // 50
let divisao = a / b;        // 2
let resto = 10 % 3;         // 1 (resto da divisão)

// Concatenação de strings
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;  // "João Silva"

// Template strings (jeito moderno)
let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
```

### 🧪 EXERCÍCIO 2: Cálculos

**Objetivo:** Calcular o valor total de uma compra com desconto.

**Regra de negócio:**
- Se comprar 5 ou mais unidades, aplique 10% de desconto
- Se comprar 10 ou mais unidades, aplique 20% de desconto

**Tarefa:**
1. Crie variáveis: `preco` e `quantidade`
2. Calcule o `valorTotal = preco * quantidade`
3. Calcule o desconto baseado na quantidade
4. Calcule o `valorFinal = valorTotal - desconto`
5. Mostre o resultado

**Não olhe a solução ainda! Tente fazer sozinho.**

<details>
<summary>💡 Solução</summary>

```javascript
let preco = 50;
let quantidade = 7;

let valorTotal = preco * quantidade;  // 350
let desconto = 0;

if (quantidade >= 10) {
  desconto = valorTotal * 0.20;  // 20%
} else if (quantidade >= 5) {
  desconto = valorTotal * 0.10;  // 10%
}

let valorFinal = valorTotal - desconto;

console.log("Valor total:", valorTotal);
console.log("Desconto:", desconto);
console.log("Valor final:", valorFinal);
```
</details>

---

## 1.4 - Condicionais: Tomando Decisões

```javascript
if (condicao) {
  // Se verdadeiro, executa aqui
} else {
  // Se falso, executa aqui
}
```

**Operadores de comparação:**

```javascript
// Igual
5 === 5     // true
5 === "5"   // false (tipos diferentes)

// Diferente
5 !== 3     // true

// Maior/Menor
10 > 5      // true
5 < 10      // true
5 >= 5      // true
10 <= 5     // false

// Operadores lógicos
true && true    // true (E - ambos verdadeiros)
true || false   // true (OU - pelo menos um verdadeiro)
!true          // false (NÃO - inverte)
```

### 🧪 EXERCÍCIO 3: Condicionais

**Objetivo:** Validar a idade de um cliente para compra de bebida alcoólica.

**Regras:**
- Se idade >= 18: permitir compra
- Se idade < 18: negar compra
- Se não informou idade: solicitar idade

**Tarefa:** Escreva a lógica usando `if/else`.

<details>
<summary>💡 Solução</summary>

```javascript
let idade = 20;

if (idade === undefined || idade === null) {
  console.log("Por favor, informe sua idade.");
} else if (idade >= 18) {
  console.log("Compra permitida!");
} else {
  console.log("Compra negada. Menor de idade.");
}
```
</details>

---

## 1.5 - Laços de Repetição

```javascript
// For - repete X vezes
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

// For...of - percorre array
let produtos = ["Pizza", "Hamburguer", "Refrigerante"];
for (let produto of produtos) {
  console.log(produto);
}

// While - enquanto condição for verdadeira
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}
```

### 🧪 EXERCÍCIO 4: Laços

**Objetivo:** Calcular o valor total de um carrinho de compras.

**Dados:**

```javascript
let carrinho = [
  { produto: "Pizza", preco: 25.90 },
  { produto: "Refrigerante", preco: 5.00 },
  { produto: "Batata Frita", preco: 12.50 }
];
```

**Tarefa:**
1. Use um laço `for...of` para percorrer o carrinho
2. Some todos os preços
3. Mostre o total

**Tente fazer sozinho!**

<details>
<summary>💡 Solução</summary>

```javascript
let carrinho = [
  { produto: "Pizza", preco: 25.90 },
  { produto: "Refrigerante", preco: 5.00 },
  { produto: "Batata Frita", preco: 12.50 }
];

let total = 0;

for (let item of carrinho) {
  total = total + item.preco;
  console.log(item.produto + " - R$ " + item.preco);
}

console.log("Total: R$", total);  // 43.40
```
</details>

---

## 1.6 - Funções

Funções são **blocos de código reutilizáveis**.

```javascript
// Função sem retorno
function mostrarMensagem() {
  console.log("Olá!");
}

mostrarMensagem();  // Chama a função

// Função com parâmetros
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);  // 8

// Arrow function (jeito moderno)
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));  // 20
```

### 🧪 EXERCÍCIO 5: Funções

**Objetivo:** Criar funções para calcular área de formas geométricas.

**Tarefa:** Crie 3 funções:

1. `calcularAreaRetangulo(largura, altura)` → retorna largura * altura
2. `calcularAreaCirculo(raio)` → retorna π * raio²  (use `Math.PI`)
3. `calcularAreaTriangulo(base, altura)` → retorna (base * altura) / 2

Depois, teste chamando cada função.

<details>
<summary>💡 Solução</summary>

```javascript
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

function calcularAreaCirculo(raio) {
  return Math.PI * raio * raio;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Testes
console.log("Retângulo (5x10):", calcularAreaRetangulo(5, 10));      // 50
console.log("Círculo (raio 3):", calcularAreaCirculo(3));            // 28.27...
console.log("Triângulo (base 6, altura 4):", calcularAreaTriangulo(6, 4));  // 12
```
</details>

---

# Parte 2: Orientação a Objetos

## 2.1 - O que é Orientação a Objetos?

**OOP (Object-Oriented Programming)** é uma forma de organizar código pensando em **objetos do mundo real**.

### Conceitos principais:

- **Classe**: Um "molde" (receita de bolo)
- **Objeto**: Uma "instância" da classe (bolo feito a partir da receita)
- **Propriedades**: Características do objeto (cor, tamanho, peso)
- **Métodos**: Ações que o objeto pode fazer (andar, falar, calcular)

### Exemplo do mundo real:

```
CLASSE: Carro
  Propriedades:
    - marca
    - modelo
    - cor
    - ano

  Métodos:
    - ligar()
    - desligar()
    - acelerar()
    - frear()

OBJETOS (instâncias):
  - Carro 1: marca=Fiat, modelo=Uno, cor=vermelho
  - Carro 2: marca=Chevrolet, modelo=Onix, cor=preto
```

---

## 2.2 - Criando Classes em JavaScript

```javascript
class Produto {
  // Construtor - executa quando criar um objeto
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  // Método - ação que o produto pode fazer
  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log("Estoque insuficiente!");
      return false;
    }

    this.estoque = this.estoque - quantidade;
    console.log(`Vendido ${quantidade} unidades de ${this.nome}`);
    return true;
  }

  // Método
  calcularValorTotal(quantidade) {
    return this.preco * quantidade;
  }

  // Método
  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Estoque: ${this.estoque}`);
  }
}

// Criar objetos (instâncias)
let pizza = new Produto("Pizza Marguerita", 25.90, 10);
let refrigerante = new Produto("Coca-Cola", 5.00, 20);

// Usar métodos
pizza.exibirInfo();
pizza.vender(2);
console.log("Valor total:", pizza.calcularValorTotal(3));
```

### 🎓 ENTENDENDO:

- **`class Produto`**: define a classe (molde)
- **`constructor()`**: função especial que inicializa o objeto
- **`this.nome`**: propriedade do objeto atual
- **`vender()`**: método (função) que pertence ao objeto
- **`new Produto()`**: cria um novo objeto baseado na classe

---

## 2.3 - Encapsulamento e Validação

**Encapsulamento** = esconder detalhes internos e expor só o necessário.

```javascript
class ContaBancaria {
  #saldo;  // Propriedade privada (com #)

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  // Getter - pegar valor
  getSaldo() {
    return this.#saldo;
  }

  // Método com validação
  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido!");
      return false;
    }

    this.#saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado`);
    return true;
  }

  // Método com validação
  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido!");
      return false;
    }

    if (valor > this.#saldo) {
      console.log("Saldo insuficiente!");
      return false;
    }

    this.#saldo -= valor;
    console.log(`Saque de R$ ${valor} realizado`);
    return true;
  }
}

let conta = new ContaBancaria("João", 1000);
conta.depositar(500);      // OK
conta.sacar(200);          // OK
conta.sacar(2000);         // Erro: saldo insuficiente
console.log("Saldo:", conta.getSaldo());
```

---

### 🧪 EXERCÍCIO 6: Classes e Objetos

**Objetivo:** Criar uma classe `Cliente` com validações.

**Requisitos:**

**Propriedades:**
- `nome` (string)
- `cpf` (string)
- `idade` (number)
- `email` (string)

**Métodos:**

1. `validarIdade()` → retorna true se idade >= 18
2. `validarCPF()` → retorna true se CPF tem 11 caracteres
3. `validarEmail()` → retorna true se email contém "@"
4. `exibirDados()` → mostra todos os dados do cliente

**Tarefa:** Escreva a classe completa e teste com 2 clientes diferentes.

**NÃO olhe a solução! Tente fazer sozinho. É assim que se aprende.**

<details>
<summary>💡 Solução</summary>

```javascript
class Cliente {
  constructor(nome, cpf, idade, email) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.email = email;
  }

  validarIdade() {
    return this.idade >= 18;
  }

  validarCPF() {
    // Remove pontos e traços
    let cpfLimpo = this.cpf.replace(/\D/g, '');
    return cpfLimpo.length === 11;
  }

  validarEmail() {
    return this.email.includes('@');
  }

  exibirDados() {
    console.log("=== DADOS DO CLIENTE ===");
    console.log("Nome:", this.nome);
    console.log("CPF:", this.cpf);
    console.log("Idade:", this.idade);
    console.log("Email:", this.email);
    console.log("Idade válida?", this.validarIdade());
    console.log("CPF válido?", this.validarCPF());
    console.log("Email válido?", this.validarEmail());
  }
}

// Teste
let cliente1 = new Cliente("João Silva", "123.456.789-00", 25, "joao@email.com");
let cliente2 = new Cliente("Maria", "123", 16, "maria");

cliente1.exibirDados();
cliente2.exibirDados();
```
</details>

---

# Parte 3: Regras de Negócio

**Regras de negócio** são as **lógicas reais** que um sistema precisa ter.

## 3.1 - Exemplo: Sistema de Loja

Vamos criar uma classe `Produto` com **regras de negócio reais**.

### 🧪 EXERCÍCIO 7: Produto com Regras de Negócio

**Objetivo:** Criar classe `Produto` completa com validações.

**Requisitos:**

**Propriedades:**
- `codigo` (string)
- `nome` (string)
- `preco` (number)
- `estoque` (number)
- `categoria` (string)
- `ativo` (boolean)

**Regras de Negócio (métodos):**

1. `validarPreco()` → preço deve ser maior que 0
2. `validarEstoque()` → estoque não pode ser negativo
3. `aplicarDesconto(percentual)` → aplica desconto no preço
   - Validar: percentual entre 0 e 100
4. `vender(quantidade)` → vende o produto
   - Validar: estoque suficiente
   - Validar: produto ativo
   - Reduzir estoque
5. `repor(quantidade)` → adiciona ao estoque
   - Validar: quantidade positiva
6. `calcularValorComDesconto(desconto)` → retorna preço com desconto aplicado
7. `exibirDados()` → mostra todas as informações

**Tarefa:** Escreva a classe completa. **NÃO copie código! Pense e faça.**

**Dicas:**
- Use `if` para validações
- Use `return false` quando validação falhar
- Use `console.log()` para mostrar mensagens de erro

<details>
<summary>💡 Solução Completa</summary>

```javascript
class Produto {
  constructor(codigo, nome, preco, estoque, categoria, ativo = true) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.categoria = categoria;
    this.ativo = ativo;
  }

  validarPreco() {
    if (this.preco <= 0) {
      console.log("Erro: Preço deve ser maior que zero");
      return false;
    }
    return true;
  }

  validarEstoque() {
    if (this.estoque < 0) {
      console.log("Erro: Estoque não pode ser negativo");
      return false;
    }
    return true;
  }

  aplicarDesconto(percentual) {
    if (percentual < 0 || percentual > 100) {
      console.log("Erro: Desconto deve estar entre 0 e 100");
      return false;
    }

    let valorDesconto = this.preco * (percentual / 100);
    this.preco = this.preco - valorDesconto;
    console.log(`Desconto de ${percentual}% aplicado. Novo preço: R$ ${this.preco.toFixed(2)}`);
    return true;
  }

  vender(quantidade) {
    if (!this.ativo) {
      console.log("Erro: Produto inativo");
      return false;
    }

    if (quantidade <= 0) {
      console.log("Erro: Quantidade deve ser maior que zero");
      return false;
    }

    if (quantidade > this.estoque) {
      console.log(`Erro: Estoque insuficiente. Disponível: ${this.estoque}`);
      return false;
    }

    this.estoque -= quantidade;
    let valorTotal = this.preco * quantidade;
    console.log(`Venda realizada: ${quantidade}x ${this.nome} = R$ ${valorTotal.toFixed(2)}`);
    console.log(`Estoque restante: ${this.estoque}`);
    return true;
  }

  repor(quantidade) {
    if (quantidade <= 0) {
      console.log("Erro: Quantidade deve ser positiva");
      return false;
    }

    this.estoque += quantidade;
    console.log(`Estoque reposto: +${quantidade}. Total: ${this.estoque}`);
    return true;
  }

  calcularValorComDesconto(desconto) {
    if (desconto < 0 || desconto > 100) {
      return this.preco;
    }
    return this.preco * (1 - desconto / 100);
  }

  exibirDados() {
    console.log("=== INFORMAÇÕES DO PRODUTO ===");
    console.log(`Código: ${this.codigo}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`Ativo: ${this.ativo ? 'Sim' : 'Não'}`);
  }
}

// Teste
let pizza = new Produto("001", "Pizza Marguerita", 25.90, 10, "Lanches");
pizza.exibirDados();
pizza.vender(3);
pizza.repor(5);
pizza.aplicarDesconto(10);
pizza.vender(15);  // Erro: estoque insuficiente
```
</details>

---

## 3.2 - Herança: Reutilizando Código

**Herança** = uma classe "herda" propriedades e métodos de outra.

```javascript
// Classe base (pai)
class Pessoa {
  constructor(nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Idade: ${this.idade}`);
  }
}

// Classe derivada (filho) - herda de Pessoa
class Cliente extends Pessoa {
  constructor(nome, cpf, idade, email, telefone) {
    super(nome, cpf, idade);  // Chama construtor do pai
    this.email = email;
    this.telefone = telefone;
    this.compras = [];
  }

  adicionarCompra(produto, quantidade, valor) {
    this.compras.push({ produto, quantidade, valor });
  }

  calcularTotalGasto() {
    let total = 0;
    for (let compra of this.compras) {
      total += compra.valor;
    }
    return total;
  }
}

// Cliente herda nome, cpf, idade de Pessoa
let cliente = new Cliente("João", "123.456.789-00", 30, "joao@email.com", "999999999");
cliente.exibirDados();  // Método herdado
cliente.adicionarCompra("Pizza", 2, 51.80);
console.log("Total gasto:", cliente.calcularTotalGasto());
```

---

### 🧪 EXERCÍCIO 8: Herança

**Objetivo:** Criar hierarquia de classes para funcionários.

**Classes:**

1. **Pessoa** (base)
   - Propriedades: nome, cpf, idade
   - Métodos: exibirDados()

2. **Funcionario** (herda de Pessoa)
   - Propriedades: cargo, salario, dataAdmissao
   - Métodos: calcularTempoEmpresa(), aumentarSalario(percentual)

3. **Gerente** (herda de Funcionario)
   - Propriedades: equipe (array de funcionários)
   - Métodos: adicionarFuncionario(), calcularFolhaPagamento()

**Tarefa:** Implemente as 3 classes e teste criando objetos.

**DESAFIO:** Faça SOZINHO. É assim que você aprende de verdade!

<details>
<summary>💡 Solução</summary>

```javascript
class Pessoa {
  constructor(nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Idade: ${this.idade}`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cpf, idade, cargo, salario, dataAdmissao) {
    super(nome, cpf, idade);
    this.cargo = cargo;
    this.salario = salario;
    this.dataAdmissao = new Date(dataAdmissao);
  }

  calcularTempoEmpresa() {
    let hoje = new Date();
    let anos = hoje.getFullYear() - this.dataAdmissao.getFullYear();
    return anos;
  }

  aumentarSalario(percentual) {
    if (percentual <= 0) {
      console.log("Erro: Percentual inválido");
      return false;
    }

    let aumento = this.salario * (percentual / 100);
    this.salario += aumento;
    console.log(`Salário aumentado em ${percentual}%. Novo salário: R$ ${this.salario.toFixed(2)}`);
    return true;
  }
}

class Gerente extends Funcionario {
  constructor(nome, cpf, idade, salario, dataAdmissao) {
    super(nome, cpf, idade, "Gerente", salario, dataAdmissao);
    this.equipe = [];
  }

  adicionarFuncionario(funcionario) {
    this.equipe.push(funcionario);
    console.log(`${funcionario.nome} adicionado à equipe`);
  }

  calcularFolhaPagamento() {
    let total = this.salario;  // Salário do gerente

    for (let funcionario of this.equipe) {
      total += funcionario.salario;
    }

    return total;
  }
}

// Teste
let func1 = new Funcionario("João", "111", 25, "Vendedor", 2000, "2020-01-15");
let func2 = new Funcionario("Maria", "222", 30, "Caixa", 1800, "2021-03-10");
let gerente = new Gerente("Carlos", "333", 40, 5000, "2015-06-01");

gerente.adicionarFuncionario(func1);
gerente.adicionarFuncionario(func2);

console.log("Tempo de empresa do gerente:", gerente.calcularTempoEmpresa(), "anos");
console.log("Folha de pagamento total:", gerente.calcularFolhaPagamento());
```
</details>

---

# Parte 4: Banco de Dados

Agora vamos aprender a **persistir dados** de verdade!

## 4.1 - Por que usar banco de dados?

Até agora, quando você fecha o navegador, **perde todos os dados**.

Banco de dados = **salvar dados permanentemente**.

## 4.2 - Configurando Better-SQLite3

Vamos usar **SQLite** (banco de dados leve, perfeito para aprender).

**Instalação:**

```bash
npm install better-sqlite3
```

## 4.3 - Criando o Banco de Dados

Crie `src/lib/database.js`:

```javascript
import Database from 'better-sqlite3';

// Criar/conectar ao banco
const db = new Database('banco.db');

// Criar tabela de produtos
db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    estoque INTEGER NOT NULL,
    categoria TEXT NOT NULL,
    ativo INTEGER DEFAULT 1
  )
`);

export default db;
```

**Explicação:**

- `CREATE TABLE IF NOT EXISTS`: cria a tabela se não existir
- `id INTEGER PRIMARY KEY AUTOINCREMENT`: ID único, gerado automaticamente
- `TEXT`, `REAL`, `INTEGER`: tipos de dados
- `NOT NULL`: campo obrigatório
- `DEFAULT 1`: valor padrão

---

## 4.4 - CRUD com Banco de Dados

### CREATE (Inserir)

```javascript
import db from './database.js';

function inserirProduto(produto) {
  const stmt = db.prepare(`
    INSERT INTO produtos (codigo, nome, preco, estoque, categoria, ativo)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    produto.codigo,
    produto.nome,
    produto.preco,
    produto.estoque,
    produto.categoria,
    produto.ativo ? 1 : 0
  );

  return result.lastInsertRowid;  // Retorna o ID gerado
}
```

### READ (Buscar)

```javascript
function buscarTodosProdutos() {
  const stmt = db.prepare('SELECT * FROM produtos');
  return stmt.all();
}

function buscarProdutoPorId(id) {
  const stmt = db.prepare('SELECT * FROM produtos WHERE id = ?');
  return stmt.get(id);
}
```

### UPDATE (Atualizar)

```javascript
function atualizarProduto(id, produto) {
  const stmt = db.prepare(`
    UPDATE produtos
    SET codigo = ?, nome = ?, preco = ?, estoque = ?, categoria = ?, ativo = ?
    WHERE id = ?
  `);

  const result = stmt.run(
    produto.codigo,
    produto.nome,
    produto.preco,
    produto.estoque,
    produto.categoria,
    produto.ativo ? 1 : 0,
    id
  );

  return result.changes;  // Número de linhas alteradas
}
```

### DELETE (Deletar)

```javascript
function deletarProduto(id) {
  const stmt = db.prepare('DELETE FROM produtos WHERE id = ?');
  const result = stmt.run(id);
  return result.changes;
}
```

---

### 🧪 EXERCÍCIO 9: CRUD Completo

**Objetivo:** Implementar CRUD completo de produtos com banco de dados.

**Tarefa:**

1. Crie o arquivo `src/lib/produtoRepository.js`
2. Implemente as 5 funções: inserir, buscarTodos, buscarPorId, atualizar, deletar
3. Crie um arquivo `teste.js` e teste todas as operações:
   - Inserir 3 produtos
   - Buscar todos
   - Buscar um específico por ID
   - Atualizar um produto
   - Deletar um produto
   - Buscar todos novamente

**NÃO copie! Tente fazer sozinho primeiro.**

<details>
<summary>💡 Solução</summary>

**src/lib/produtoRepository.js:**

```javascript
import db from './database.js';

export function inserirProduto(produto) {
  const stmt = db.prepare(`
    INSERT INTO produtos (codigo, nome, preco, estoque, categoria, ativo)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    produto.codigo,
    produto.nome,
    produto.preco,
    produto.estoque,
    produto.categoria,
    produto.ativo ? 1 : 0
  );

  console.log(`Produto inserido com ID: ${result.lastInsertRowid}`);
  return result.lastInsertRowid;
}

export function buscarTodosProdutos() {
  const stmt = db.prepare('SELECT * FROM produtos');
  return stmt.all();
}

export function buscarProdutoPorId(id) {
  const stmt = db.prepare('SELECT * FROM produtos WHERE id = ?');
  return stmt.get(id);
}

export function atualizarProduto(id, produto) {
  const stmt = db.prepare(`
    UPDATE produtos
    SET codigo = ?, nome = ?, preco = ?, estoque = ?, categoria = ?, ativo = ?
    WHERE id = ?
  `);

  const result = stmt.run(
    produto.codigo,
    produto.nome,
    produto.preco,
    produto.estoque,
    produto.categoria,
    produto.ativo ? 1 : 0,
    id
  );

  console.log(`${result.changes} produto(s) atualizado(s)`);
  return result.changes;
}

export function deletarProduto(id) {
  const stmt = db.prepare('DELETE FROM produtos WHERE id = ?');
  const result = stmt.run(id);
  console.log(`${result.changes} produto(s) deletado(s)`);
  return result.changes;
}
```

**teste.js:**

```javascript
import {
  inserirProduto,
  buscarTodosProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
} from './src/lib/produtoRepository.js';

// Inserir 3 produtos
console.log("=== INSERINDO PRODUTOS ===");
let id1 = inserirProduto({
  codigo: "001",
  nome: "Pizza Marguerita",
  preco: 25.90,
  estoque: 10,
  categoria: "Lanches",
  ativo: true
});

let id2 = inserirProduto({
  codigo: "002",
  nome: "Refrigerante",
  preco: 5.00,
  estoque: 20,
  categoria: "Bebidas",
  ativo: true
});

let id3 = inserirProduto({
  codigo: "003",
  nome: "Batata Frita",
  preco: 12.50,
  estoque: 15,
  categoria: "Acompanhamentos",
  ativo: true
});

// Buscar todos
console.log("\n=== TODOS OS PRODUTOS ===");
let produtos = buscarTodosProdutos();
console.log(produtos);

// Buscar um por ID
console.log("\n=== PRODUTO ID 1 ===");
let produto = buscarProdutoPorId(id1);
console.log(produto);

// Atualizar
console.log("\n=== ATUALIZANDO PRODUTO ===");
atualizarProduto(id1, {
  codigo: "001",
  nome: "Pizza Marguerita GRANDE",
  preco: 29.90,
  estoque: 8,
  categoria: "Lanches",
  ativo: true
});

// Deletar
console.log("\n=== DELETANDO PRODUTO ===");
deletarProduto(id3);

// Buscar todos novamente
console.log("\n=== PRODUTOS APÓS DELETE ===");
produtos = buscarTodosProdutos();
console.log(produtos);
```
</details>

---

# Parte 5: Projeto Final

Agora você vai juntar **TUDO** que aprendeu!

## 5.1 - Especificação do Projeto

**Sistema de Gerenciamento de Produtos**

**Funcionalidades:**

1. **Tela de Login** (sem validação real)
   - Campos: usuário, senha
   - Redireciona para Home

2. **Tela Home**
   - Botão para ir para Produtos

3. **Tela de Listagem de Produtos**
   - Mostra todos os produtos do banco
   - Botão "Novo Produto"
   - Botão "Editar" em cada produto
   - Botão "Deletar" em cada produto

4. **Tela de Cadastro/Edição**
   - Formulário com 10 campos (use os do exercício 7)
   - Validações no frontend
   - Salvar no banco de dados
   - Se for edição, preenche os campos

**Regras de Negócio:**

1. Preço deve ser maior que 0
2. Estoque não pode ser negativo
3. Código deve ser único (não pode repetir)
4. Nome é obrigatório (mínimo 3 caracteres)
5. Categoria deve ser uma das opções: Lanches, Bebidas, Sobremesas, Acompanhamentos

---

## 5.2 - Estrutura do Projeto

```
meu-sistema/
├── src/
│   ├── lib/
│   │   ├── database.js          (← você cria)
│   │   ├── produtoRepository.js (← você cria)
│   │   └── produtoService.js    (← você cria - regras de negócio)
│   └── routes/
│       ├── +page.svelte         (← redireciona para login)
│       ├── login/
│       │   └── +page.svelte     (← você cria)
│       ├── home/
│       │   └── +page.svelte     (← você cria)
│       └── produtos/
│           ├── +page.svelte     (← lista - você cria)
│           └── [id]/
│               └── +page.svelte (← form - você cria)
```

---

## 5.3 - Tarefas do Projeto

### ✅ TAREFA 1: Configurar banco de dados

Crie `src/lib/database.js` e `src/lib/produtoRepository.js` conforme o Exercício 9.

### ✅ TAREFA 2: Criar ProdutoService (Regras de Negócio)

Crie `src/lib/produtoService.js`:

```javascript
import {
  inserirProduto,
  buscarTodosProdutos,
  buscarProdutoPorId,
  atualizarProduto
} from './produtoRepository.js';

export class ProdutoService {
  validarProduto(produto) {
    let erros = [];

    if (!produto.nome || produto.nome.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 caracteres");
    }

    if (produto.preco <= 0) {
      erros.push("Preço deve ser maior que zero");
    }

    if (produto.estoque < 0) {
      erros.push("Estoque não pode ser negativo");
    }

    // TODO: Adicione mais validações

    return {
      valido: erros.length === 0,
      erros: erros
    };
  }

  salvarProduto(produto) {
    let validacao = this.validarProduto(produto);

    if (!validacao.valido) {
      throw new Error(validacao.erros.join(", "));
    }

    return inserirProduto(produto);
  }

  // TODO: Implemente outros métodos
}
```

**Sua tarefa:** Complete o `ProdutoService` com todos os métodos necessários.

### ✅ TAREFA 3: Tela de Login

Crie `src/routes/login/+page.svelte`.

**Requisitos:**
- Campos: usuário e senha
- Botão "Entrar"
- Se ambos preenchidos, redireciona para `/home`
- Se não, mostra alerta

**Dica:** Use `bind:value` e função no `on:click`.

### ✅ TAREFA 4: Tela Home

Crie `src/routes/home/+page.svelte`.

**Requisitos:**
- Título "Sistema de Produtos"
- Botão "Cadastros" que vai para `/produtos`

### ✅ TAREFA 5: Tela de Listagem

Crie `src/routes/produtos/+page.svelte`.

**Requisitos:**
- Buscar todos os produtos do banco
- Mostrar em uma tabela
- Botão "Novo Produto" que vai para `/produtos/new`
- Botão "Editar" em cada linha que vai para `/produtos/[id]`
- Botão "Deletar" que remove do banco e atualiza a lista

**Dica:** Use `onMount` para carregar os dados quando a página abrir.

### ✅ TAREFA 6: Tela de Cadastro/Edição

Crie `src/routes/produtos/[id]/+page.svelte`.

**Requisitos:**
- Se `id === "new"`: formulário vazio (novo produto)
- Se `id` for número: buscar produto do banco e preencher campos (edição)
- Campos: codigo, nome, preco, estoque, categoria, marca, unidade, ativo, descricao, observacoes
- Validar antes de salvar
- Mostrar mensagens de erro se validação falhar
- Salvar no banco
- Voltar para `/produtos` após salvar

---

## 5.4 - Checklist do Projeto

Marque conforme você completa:

- [ ] Configurei o banco de dados
- [ ] Criei o ProdutoRepository
- [ ] Criei o ProdutoService com validações
- [ ] Implementei a tela de login
- [ ] Implementei a tela home
- [ ] Implementei a listagem de produtos
- [ ] Implementei o cadastro de produtos
- [ ] Implementei a edição de produtos
- [ ] Implementei a deleção de produtos
- [ ] Testei todas as funcionalidades
- [ ] Validações funcionam corretamente
- [ ] Dados persistem no banco

---

## 5.5 - Desafios Extras

Se terminou tudo, tente estes desafios:

1. **Busca:** Adicione campo de busca na listagem
2. **Ordenação:** Clique no cabeçalho da tabela para ordenar
3. **Paginação:** Mostre 10 produtos por página
4. **Filtros:** Filtrar por categoria, ativo/inativo
5. **Dashboard:** Criar tela com estatísticas (total de produtos, valor total em estoque, etc.)
6. **Exportar:** Botão para exportar produtos para CSV
7. **Importar:** Upload de CSV para importar produtos
8. **Autenticação:** Login com usuário e senha salvos no banco

---

## 📚 Resumo do que você aprendeu

✅ **Fundamentos:**
- Variáveis e tipos de dados
- Operações matemáticas e lógicas
- Condicionais (if/else)
- Laços (for, while)
- Funções

✅ **Orientação a Objetos:**
- Classes e Objetos
- Propriedades e Métodos
- Construtores
- Encapsulamento
- Herança

✅ **Regras de Negócio:**
- Validações
- Cálculos
- Lógica real de sistemas

✅ **Banco de Dados:**
- SQLite
- CREATE, READ, UPDATE, DELETE (CRUD)
- Persistência de dados

✅ **Projeto Completo:**
- Login
- Navegação
- Listagem
- Cadastro/Edição
- Deleção
- Validações

---

## 💡 Dicas Finais

1. **Não desista!** Programação é difícil no começo, mas fica mais fácil
2. **Erre bastante!** Cada erro te ensina algo
3. **Faça os exercícios!** Não adianta só ler, tem que fazer
4. **Pesquise!** Google é seu amigo
5. **Pratique todo dia!** Mesmo que seja 15 minutos
6. **Peça ajuda!** Quando travar, pergunte
7. **Divirta-se!** Programação é criativa e legal

---

## 🎓 Próximos Passos

Depois de terminar este projeto:

1. Estude **TypeScript** (tipos estáticos)
2. Aprenda **APIs REST** (comunicação cliente-servidor)
3. Estude **autenticação** (JWT, sessions)
4. Aprenda **testes** (Jest, Testing Library)
5. Estude **deploy** (colocar no ar)

**Boa sorte e bons códigos!** 🚀

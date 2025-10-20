# Dia 3 - Orientação a Objetos

## Objetivos do Dia
- Entender o que é Orientação a Objetos (OOP)
- Criar classes e objetos
- Usar construtores
- Criar métodos
- Entender encapsulamento
- Aplicar validações em classes

---

## 1. O que é Orientação a Objetos?

**POO (Programação Orientada a Objetos)** = organizar código pensando em **objetos do mundo real**.

### Conceitos Principais

- **Classe**: molde, receita (blueprint)
- **Objeto**: instância da classe, coisa criada a partir do molde
- **Propriedades**: características (cor, tamanho, peso)
- **Métodos**: ações que o objeto pode fazer (andar, falar, calcular)

### Analogia: Fábrica de Carros

```
CLASSE Carro (molde)
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

OBJETOS (carros fabricados):
  carro1 = Fiat Uno Vermelho 2020
  carro2 = Chevrolet Onix Preto 2023
  carro3 = Honda Civic Prata 2022
```

---

## 2. Criando Classes em JavaScript

### Sintaxe Básica

```javascript
class Produto {
  // Construtor - executa quando criar um objeto
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  // Método - ação do produto
  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
  }
}

// Criar objetos (instâncias)
let pizza = new Produto("Pizza Marguerita", 35.90);
let coca = new Produto("Coca-Cola 2L", 8.00);

// Usar métodos
pizza.exibirInfo();
coca.exibirInfo();
```

**Saída:**
```
Produto: Pizza Marguerita
Preço: R$ 35.90
Produto: Coca-Cola 2L
Preço: R$ 8.00
```

### 🧪 EXERCÍCIO 3.1 - Primeira Classe

Crie uma classe `Cliente` com:
- Propriedades: nome, cpf, email
- Método `exibirDados()` que mostra as informações

Depois crie 2 objetos Cliente e chame o método.

<details>
<summary>💡 Ver Solução</summary>

```javascript
class Cliente {
  constructor(nome, cpf, email) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
  }

  exibirDados() {
    console.log("=== DADOS DO CLIENTE ===");
    console.log("Nome:", this.nome);
    console.log("CPF:", this.cpf);
    console.log("Email:", this.email);
  }
}

// Criar objetos
let cliente1 = new Cliente("João Silva", "123.456.789-00", "joao@email.com");
let cliente2 = new Cliente("Maria Santos", "987.654.321-00", "maria@email.com");

// Usar métodos
cliente1.exibirDados();
console.log("");
cliente2.exibirDados();
```
</details>

---

## 3. Propriedades e Métodos

### Propriedades

```javascript
class Produto {
  constructor(codigo, nome, preco, estoque) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.ativo = true;  // Valor padrão
  }
}

let produto = new Produto("001", "Pizza", 35.90, 10);

// Acessar propriedades
console.log(produto.nome);     // "Pizza"
console.log(produto.estoque);  // 10

// Modificar propriedades
produto.estoque = 8;
produto.ativo = false;
```

### Métodos com Lógica

```javascript
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log("Estoque insuficiente!");
      return false;
    }

    this.estoque -= quantidade;
    console.log(`Vendido ${quantidade}x ${this.nome}`);
    console.log(`Estoque restante: ${this.estoque}`);
    return true;
  }

  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`Estoque reposto: +${quantidade}`);
    console.log(`Novo estoque: ${this.estoque}`);
  }

  calcularValorTotal(quantidade) {
    return this.preco * quantidade;
  }
}

// Teste
let pizza = new Produto("Pizza", 35.90, 10);
pizza.vender(3);    // Vende 3
pizza.repor(5);     // Repõe 5
pizza.vender(15);   // Erro: estoque insuficiente
```

### 🧪 EXERCÍCIO 3.2 - Conta Bancária

Crie uma classe `ContaBancaria` com:
- Propriedades: titular, saldo
- Métodos:
  - `depositar(valor)` - adiciona ao saldo
  - `sacar(valor)` - remove do saldo (valida se tem saldo)
  - `consultarSaldo()` - mostra saldo atual

<details>
<summary>💡 Ver Solução</summary>

```javascript
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor de depósito inválido!");
      return false;
    }

    this.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado`);
    console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    return true;
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor de saque inválido!");
      return false;
    }

    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
      return false;
    }

    this.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado`);
    console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    return true;
  }

  consultarSaldo() {
    console.log(`Saldo de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    return this.saldo;
  }
}

// Teste
let conta = new ContaBancaria("João Silva", 1000);
conta.consultarSaldo();
conta.depositar(500);
conta.sacar(200);
conta.sacar(2000);  // Erro
conta.consultarSaldo();
```
</details>

---

## 4. Validações em Classes

É importante validar dados antes de usar!

```javascript
class Produto {
  constructor(nome, categoria, preco) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
  }

  validar() {
    let erros = [];

    // Validar nome
    if (!this.nome || this.nome.trim().length === 0) {
      erros.push("Nome é obrigatório");
    } else if (this.nome.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 caracteres");
    }

    // Validar categoria
    const categoriasValidas = ["Lanches", "Bebidas", "Sobremesas", "Acompanhamentos"];
    if (!categoriasValidas.includes(this.categoria)) {
      erros.push("Categoria inválida");
    }

    // Validar preço
    if (typeof this.preco !== 'number' || this.preco <= 0) {
      erros.push("Preço deve ser maior que zero");
    }

    return {
      valido: erros.length === 0,
      erros: erros
    };
  }
}

// Teste com dados válidos
let produto1 = new Produto("Pizza", "Lanches", 35.90);
console.log(produto1.validar());  // { valido: true, erros: [] }

// Teste com dados inválidos
let produto2 = new Produto("Pi", "Comida", -10);
let resultado = produto2.validar();
console.log(resultado);
// { valido: false, erros: [...] }

if (!resultado.valido) {
  console.log("Erros encontrados:");
  resultado.erros.forEach(erro => console.log("- " + erro));
}
```

### 🧪 EXERCÍCIO 3.3 - Produto com Validações

Crie uma classe `Produto` completa com:

**Propriedades:**
- nome
- categoria
- preco
- estoque
- ativo

**Métodos:**
- `validar()` - valida todos os campos
- `vender(quantidade)` - vende se tiver estoque e produto ativo
- `aplicarDesconto(percentual)` - valida percentual (0-100)
- `exibirInfo()` - mostra todas as informações

<details>
<summary>💡 Ver Solução</summary>

```javascript
class Produto {
  constructor(nome, categoria, preco, estoque, ativo = true) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.estoque = estoque;
    this.ativo = ativo;
  }

  validar() {
    let erros = [];

    // Validar nome
    if (!this.nome || this.nome.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 caracteres");
    }

    // Validar categoria
    const categoriasValidas = ["Lanches", "Bebidas", "Sobremesas", "Acompanhamentos"];
    if (!categoriasValidas.includes(this.categoria)) {
      erros.push("Categoria inválida");
    }

    // Validar preço
    if (typeof this.preco !== 'number' || this.preco <= 0) {
      erros.push("Preço deve ser maior que zero");
    }

    // Validar estoque
    if (typeof this.estoque !== 'number' || this.estoque < 0) {
      erros.push("Estoque não pode ser negativo");
    }

    return {
      valido: erros.length === 0,
      erros: erros
    };
  }

  vender(quantidade) {
    if (!this.ativo) {
      console.log("Produto inativo!");
      return false;
    }

    if (quantidade <= 0) {
      console.log("Quantidade inválida!");
      return false;
    }

    if (quantidade > this.estoque) {
      console.log(`Estoque insuficiente! Disponível: ${this.estoque}`);
      return false;
    }

    this.estoque -= quantidade;
    let valorTotal = this.preco * quantidade;
    console.log(`Vendido ${quantidade}x ${this.nome} = R$ ${valorTotal.toFixed(2)}`);
    console.log(`Estoque restante: ${this.estoque}`);
    return true;
  }

  aplicarDesconto(percentual) {
    if (percentual < 0 || percentual > 100) {
      console.log("Desconto deve estar entre 0 e 100");
      return false;
    }

    let valorDesconto = this.preco * (percentual / 100);
    this.preco -= valorDesconto;
    console.log(`Desconto de ${percentual}% aplicado`);
    console.log(`Novo preço: R$ ${this.preco.toFixed(2)}`);
    return true;
  }

  exibirInfo() {
    console.log("=== INFORMAÇÕES DO PRODUTO ===");
    console.log(`Nome: ${this.nome}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Ativo: ${this.ativo ? 'Sim' : 'Não'}`);
  }
}

// Teste
let pizza = new Produto("Pizza Marguerita", "Lanches", 35.90, 10);

let validacao = pizza.validar();
if (validacao.valido) {
  pizza.exibirInfo();
  pizza.vender(3);
  pizza.aplicarDesconto(10);
  pizza.vender(8);
} else {
  console.log("Erros:", validacao.erros);
}
```
</details>

---

## 5. Herança

**Herança** = uma classe herda propriedades e métodos de outra.

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

// Classe derivada (filho)
class Cliente extends Pessoa {
  constructor(nome, cpf, idade, email) {
    super(nome, cpf, idade);  // Chama construtor do pai
    this.email = email;
    this.pedidos = [];
  }

  adicionarPedido(pedido) {
    this.pedidos.push(pedido);
    console.log(`Pedido adicionado para ${this.nome}`);
  }

  calcularTotalGasto() {
    let total = 0;
    for (let pedido of this.pedidos) {
      total += pedido.valor;
    }
    return total;
  }
}

// Usar
let cliente = new Cliente("João", "123.456.789-00", 30, "joao@email.com");
cliente.exibirDados();  // Método herdado
cliente.adicionarPedido({ id: 1, valor: 85.90 });
console.log("Total gasto:", cliente.calcularTotalGasto());
```

---

## Projeto do Dia 3 - Sistema de Produtos com Classes

**Objetivo:** Criar sistema de gestão de produtos usando POO.

**Requisitos:**

1. Classe `Produto` completa com validações
2. Array para armazenar produtos
3. Funções para:
   - Adicionar produto
   - Listar produtos
   - Buscar produto por nome
   - Atualizar produto
   - Deletar produto
   - Aplicar desconto em múltiplos produtos

**Estrutura:**

```javascript
class Produto {
  constructor(id, nome, categoria, preco, estoque) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.estoque = estoque;
    this.ativo = true;
  }

  validar() {
    // TODO: Implementar validações
  }

  vender(quantidade) {
    // TODO: Implementar
  }

  exibirInfo() {
    // TODO: Implementar
  }
}

// Array de produtos
let produtos = [];
let proximoId = 1;

function adicionarProduto(nome, categoria, preco, estoque) {
  // TODO: Criar produto, validar, adicionar ao array
}

function listarProdutos() {
  // TODO: Percorrer array e exibir
}

function buscarProdutoPorNome(nome) {
  // TODO: Usar find()
}

function atualizarProduto(id, novosDados) {
  // TODO: Buscar e atualizar
}

function deletarProduto(id) {
  // TODO: Remover do array
}

function aplicarDescontoCategoria(categoria, percentual) {
  // TODO: Filtrar por categoria e aplicar desconto
}

// Testes
adicionarProduto("Pizza Marguerita", "Lanches", 35.90, 10);
adicionarProduto("Coca-Cola 2L", "Bebidas", 8.00, 20);
adicionarProduto("Brownie", "Sobremesas", 12.00, 15);
listarProdutos();
aplicarDescontoCategoria("Lanches", 10);
listarProdutos();
```

**DESAFIO: Faça sozinho!**

<details>
<summary>💡 Ver Solução Completa</summary>

```javascript
class Produto {
  constructor(id, nome, categoria, preco, estoque) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.estoque = estoque;
    this.ativo = true;
  }

  validar() {
    let erros = [];

    if (!this.nome || this.nome.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 caracteres");
    }

    const categoriasValidas = ["Lanches", "Bebidas", "Sobremesas", "Acompanhamentos"];
    if (!categoriasValidas.includes(this.categoria)) {
      erros.push(`Categoria inválida. Use: ${categoriasValidas.join(", ")}`);
    }

    if (typeof this.preco !== 'number' || this.preco <= 0) {
      erros.push("Preço deve ser maior que zero");
    }

    if (typeof this.estoque !== 'number' || this.estoque < 0) {
      erros.push("Estoque não pode ser negativo");
    }

    return {
      valido: erros.length === 0,
      erros: erros
    };
  }

  vender(quantidade) {
    if (!this.ativo) return false;
    if (quantidade > this.estoque) return false;
    this.estoque -= quantidade;
    return true;
  }

  aplicarDesconto(percentual) {
    if (percentual < 0 || percentual > 100) return false;
    this.preco *= (1 - percentual / 100);
    return true;
  }

  exibirInfo() {
    console.log(
      `[${this.id}] ${this.nome} - ${this.categoria} - ` +
      `R$ ${this.preco.toFixed(2)} - Estoque: ${this.estoque}`
    );
  }
}

let produtos = [];
let proximoId = 1;

function adicionarProduto(nome, categoria, preco, estoque) {
  let produto = new Produto(proximoId++, nome, categoria, preco, estoque);

  let validacao = produto.validar();

  if (!validacao.valido) {
    console.log("Erro ao adicionar produto:");
    validacao.erros.forEach(erro => console.log("  - " + erro));
    return null;
  }

  produtos.push(produto);
  console.log(`✓ Produto "${nome}" adicionado com sucesso!`);
  return produto;
}

function listarProdutos() {
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
  }

  console.log("\n=== LISTA DE PRODUTOS ===");
  produtos.forEach(produto => produto.exibirInfo());
  console.log("");
}

function buscarProdutoPorNome(nome) {
  return produtos.find(p =>
    p.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

function atualizarProduto(id, novosDados) {
  let produto = produtos.find(p => p.id === id);

  if (!produto) {
    console.log("Produto não encontrado!");
    return false;
  }

  Object.assign(produto, novosDados);

  let validacao = produto.validar();
  if (!validacao.valido) {
    console.log("Dados inválidos:");
    validacao.erros.forEach(erro => console.log("  - " + erro));
    return false;
  }

  console.log(`✓ Produto ${id} atualizado!`);
  return true;
}

function deletarProduto(id) {
  let index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    console.log("Produto não encontrado!");
    return false;
  }

  produtos.splice(index, 1);
  console.log(`✓ Produto ${id} deletado!`);
  return true;
}

function aplicarDescontoCategoria(categoria, percentual) {
  let produtosDaCategoria = produtos.filter(p => p.categoria === categoria);

  if (produtosDaCategoria.length === 0) {
    console.log(`Nenhum produto da categoria "${categoria}"`);
    return;
  }

  console.log(`\nAplicando ${percentual}% de desconto em ${categoria}...`);
  produtosDaCategoria.forEach(produto => {
    produto.aplicarDesconto(percentual);
    console.log(`  ✓ ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
  });
}

// Testes
console.log("=== ADICIONANDO PRODUTOS ===");
adicionarProduto("Pizza Marguerita", "Lanches", 35.90, 10);
adicionarProduto("Pizza Calabresa", "Lanches", 38.90, 8);
adicionarProduto("Coca-Cola 2L", "Bebidas", 8.00, 20);
adicionarProduto("Brownie", "Sobremesas", 12.00, 15);
adicionarProduto("Batata Frita", "Acompanhamentos", 12.50, 12);

listarProdutos();

console.log("\n=== APLICANDO DESCONTO ===");
aplicarDescontoCategoria("Lanches", 10);

listarProdutos();

console.log("\n=== BUSCANDO PRODUTO ===");
let produto = buscarProdutoPorNome("pizza");
if (produto) {
  produto.exibirInfo();
}

console.log("\n=== DELETANDO PRODUTO ===");
deletarProduto(3);

listarProdutos();
```
</details>

---

## Resumo do Dia 3

✅ **O que você aprendeu:**
- O que é Orientação a Objetos
- Classes e Objetos
- Construtores
- Propriedades e Métodos
- Validações em classes
- Herança básica
- Sistema completo com POO

---

## Exercícios Extras

1. Adicione método para exportar produtos para JSON
2. Crie classe `Pedido` que usa a classe `Produto`
3. Implemente sistema de log (registrar todas as ações)
4. Crie relatório de produtos por categoria

---

## Próximo Passo

Amanhã você vai aprender sobre **APIs REST** e como testar requisições usando **Postman/Bruno**!

🚀 **Parabéns por completar o Dia 3!**

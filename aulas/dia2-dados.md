# Dia 2 - Trabalhando com Dados: Arrays e Objetos

## Objetivos do Dia
- Entender e usar Arrays (listas)
- Trabalhar com Objetos
- Manipular arrays com métodos (push, pop, map, filter, forEach)
- Combinar arrays e objetos
- Criar estruturas de dados complexas

---

## 1. Arrays (Listas)

**Array** = lista ordenada de valores

### Criando Arrays

```javascript
// Array vazio
let frutas = [];

// Array com valores
let numeros = [1, 2, 3, 4, 5];
let nomes = ["João", "Maria", "Pedro"];
let misto = [1, "texto", true, 3.14]; // Pode misturar tipos

console.log(frutas);   // []
console.log(numeros);  // [1, 2, 3, 4, 5]
```

### Acessando Elementos

Arrays começam no índice **0**!

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]);  // "Maçã" (primeiro)
console.log(frutas[1]);  // "Banana" (segundo)
console.log(frutas[2]);  // "Laranja" (terceiro)

// Último elemento
console.log(frutas[frutas.length - 1]);  // "Laranja"
```

### Modificando Arrays

```javascript
let frutas = ["Maçã", "Banana"];

// Mudar valor
frutas[0] = "Morango";
console.log(frutas);  // ["Morango", "Banana"]

// Adicionar no final
frutas.push("Uva");
console.log(frutas);  // ["Morango", "Banana", "Uva"]

// Remover do final
let ultimo = frutas.pop();
console.log(ultimo);  // "Uva"
console.log(frutas);  // ["Morango", "Banana"]

// Adicionar no início
frutas.unshift("Abacaxi");
console.log(frutas);  // ["Abacaxi", "Morango", "Banana"]

// Remover do início
let primeiro = frutas.shift();
console.log(primeiro);  // "Abacaxi"
console.log(frutas);    // ["Morango", "Banana"]
```

### 🧪 EXERCÍCIO 2.1 - Arrays Básicos

Crie um array com 5 produtos de um restaurante e:
1. Adicione um sexto produto no final
2. Remova o primeiro produto
3. Mude o terceiro produto
4. Mostre quantos produtos restaram

<details>
<summary>💡 Ver Solução</summary>

```javascript
let produtos = ["Pizza", "Hamburguer", "Refrigerante", "Batata Frita", "Sorvete"];

// 1. Adicionar no final
produtos.push("Brownie");
console.log("Após adicionar:", produtos);

// 2. Remover primeiro
produtos.shift();
console.log("Após remover primeiro:", produtos);

// 3. Mudar terceiro (índice 2)
produtos[2] = "Suco";
console.log("Após mudar:", produtos);

// 4. Quantidade
console.log("Total de produtos:", produtos.length);  // 5
```
</details>

---

## 2. Percorrendo Arrays

### For tradicional

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(i + ": " + frutas[i]);
}
// 0: Maçã
// 1: Banana
// 2: Laranja
```

### For...of (mais moderno)

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// Maçã
// Banana
// Laranja
```

### forEach (método de array)

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function(fruta, index) {
  console.log(index + ": " + fruta);
});
```

### 🧪 EXERCÍCIO 2.2 - Percorrer Array

Dado um array de preços, calcule a soma total.

```javascript
let precos = [10.50, 25.00, 8.00, 15.90, 32.50];
// Resultado esperado: 91.90
```

<details>
<summary>💡 Ver Solução</summary>

```javascript
let precos = [10.50, 25.00, 8.00, 15.90, 32.50];
let total = 0;

for (let preco of precos) {
  total += preco;
}

console.log("Total:", total);  // 91.90
```
</details>

---

## 3. Métodos de Array

### map() - Transformar cada elemento

```javascript
let numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
let dobrados = numeros.map(function(num) {
  return num * 2;
});

console.log(dobrados);  // [2, 4, 6, 8, 10]

// Arrow function (jeito curto)
let triplicados = numeros.map(num => num * 3);
console.log(triplicados);  // [3, 6, 9, 12, 15]
```

### filter() - Filtrar elementos

```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pegar apenas pares
let pares = numeros.filter(function(num) {
  return num % 2 === 0;
});

console.log(pares);  // [2, 4, 6, 8, 10]

// Arrow function
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares);  // [1, 3, 5, 7, 9]
```

### find() - Encontrar um elemento

```javascript
let numeros = [5, 12, 8, 130, 44];

// Primeiro número maior que 10
let resultado = numeros.find(num => num > 10);
console.log(resultado);  // 12
```

### 🧪 EXERCÍCIO 2.3 - Métodos de Array

Dado um array de produtos com preços:

```javascript
let produtos = [
  { nome: "Pizza", preco: 35.90 },
  { nome: "Refrigerante", preco: 5.00 },
  { nome: "Hamburguer", preco: 25.00 },
  { nome: "Sorvete", preco: 12.00 }
];
```

1. Use `map` para criar array só com os nomes
2. Use `filter` para pegar produtos com preço menor que 20
3. Use `find` para encontrar o produto "Pizza"

<details>
<summary>💡 Ver Solução</summary>

```javascript
let produtos = [
  { nome: "Pizza", preco: 35.90 },
  { nome: "Refrigerante", preco: 5.00 },
  { nome: "Hamburguer", preco: 25.00 },
  { nome: "Sorvete", preco: 12.00 }
];

// 1. Array de nomes
let nomes = produtos.map(p => p.nome);
console.log(nomes);  // ["Pizza", "Refrigerante", "Hamburguer", "Sorvete"]

// 2. Produtos baratos (< 20)
let baratos = produtos.filter(p => p.preco < 20);
console.log(baratos);
// [{ nome: "Refrigerante", preco: 5.00 }, { nome: "Sorvete", preco: 12.00 }]

// 3. Encontrar Pizza
let pizza = produtos.find(p => p.nome === "Pizza");
console.log(pizza);  // { nome: "Pizza", preco: 35.90 }
```
</details>

---

## 4. Objetos

**Objeto** = coleção de propriedades (chave: valor)

### Criando Objetos

```javascript
// Objeto vazio
let pessoa = {};

// Objeto com propriedades
let cliente = {
  nome: "João Silva",
  idade: 30,
  cpf: "123.456.789-00",
  email: "joao@email.com"
};

console.log(cliente);
```

### Acessando Propriedades

```javascript
let cliente = {
  nome: "João Silva",
  idade: 30,
  email: "joao@email.com"
};

// Notação de ponto
console.log(cliente.nome);   // "João Silva"
console.log(cliente.idade);  // 30

// Notação de colchetes
console.log(cliente["email"]);  // "joao@email.com"
```

### Modificando Objetos

```javascript
let produto = {
  nome: "Pizza",
  preco: 35.90
};

// Modificar propriedade
produto.preco = 39.90;

// Adicionar propriedade
produto.categoria = "Lanches";

// Remover propriedade
delete produto.categoria;

console.log(produto);
```

### 🧪 EXERCÍCIO 2.4 - Objetos

Crie um objeto representando um produto com:
- nome
- categoria
- preco
- estoque

Depois:
1. Aumente o estoque em 10
2. Aplique 10% de desconto no preço
3. Adicione propriedade "ativo" como true

<details>
<summary>💡 Ver Solução</summary>

```javascript
let produto = {
  nome: "Pizza Marguerita",
  categoria: "Lanches",
  preco: 35.90,
  estoque: 20
};

// 1. Aumentar estoque
produto.estoque += 10;
console.log("Novo estoque:", produto.estoque);  // 30

// 2. Aplicar desconto
produto.preco = produto.preco * 0.90;  // 10% desconto
console.log("Novo preço:", produto.preco.toFixed(2));  // 32.31

// 3. Adicionar propriedade
produto.ativo = true;

console.log(produto);
```
</details>

---

## 5. Arrays de Objetos

Combinação poderosa para representar dados reais!

```javascript
let produtos = [
  { id: 1, nome: "Pizza", preco: 35.90, categoria: "Lanches" },
  { id: 2, nome: "Coca-Cola", preco: 8.00, categoria: "Bebidas" },
  { id: 3, nome: "Brownie", preco: 12.00, categoria: "Sobremesas" }
];

// Acessar um produto
console.log(produtos[0].nome);  // "Pizza"

// Percorrer
for (let produto of produtos) {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
}

// Filtrar por categoria
let bebidas = produtos.filter(p => p.categoria === "Bebidas");
console.log(bebidas);
```

### 🧪 EXERCÍCIO 2.5 - Carrinho de Compras

Crie um array de produtos no carrinho:

```javascript
let carrinho = [
  { nome: "Pizza", preco: 35.90, quantidade: 2 },
  { nome: "Refrigerante", preco: 8.00, quantidade: 1 },
  { nome: "Batata Frita", preco: 12.50, quantidade: 3 }
];
```

Calcule:
1. Valor total de cada item (preço × quantidade)
2. Valor total do carrinho

<details>
<summary>💡 Ver Solução</summary>

```javascript
let carrinho = [
  { nome: "Pizza", preco: 35.90, quantidade: 2 },
  { nome: "Refrigerante", preco: 8.00, quantidade: 1 },
  { nome: "Batata Frita", preco: 12.50, quantidade: 3 }
];

let totalCarrinho = 0;

for (let item of carrinho) {
  let totalItem = item.preco * item.quantidade;
  console.log(`${item.nome}: ${item.quantidade}x R$ ${item.preco} = R$ ${totalItem.toFixed(2)}`);
  totalCarrinho += totalItem;
}

console.log(`\nTotal do carrinho: R$ ${totalCarrinho.toFixed(2)}`);

// Saída:
// Pizza: 2x R$ 35.9 = R$ 71.80
// Refrigerante: 1x R$ 8 = R$ 8.00
// Batata Frita: 3x R$ 12.5 = R$ 37.50
// Total do carrinho: R$ 117.30
```
</details>

---

## 6. Desestruturação

Forma moderna de extrair valores de arrays e objetos.

### Desestruturação de Arrays

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

// Jeito antigo
let primeira = frutas[0];
let segunda = frutas[1];

// Desestruturação
let [primeira, segunda, terceira] = frutas;
console.log(primeira);  // "Maçã"
console.log(segunda);   // "Banana"
console.log(terceira);  // "Laranja"
```

### Desestruturação de Objetos

```javascript
let produto = {
  nome: "Pizza",
  preco: 35.90,
  categoria: "Lanches"
};

// Jeito antigo
let nome = produto.nome;
let preco = produto.preco;

// Desestruturação
let { nome, preco, categoria } = produto;
console.log(nome);       // "Pizza"
console.log(preco);      // 35.90
console.log(categoria);  // "Lanches"
```

---

## 7. Spread Operator (...)

Expandir arrays e objetos.

### Com Arrays

```javascript
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

// Combinar arrays
let todos = [...numeros1, ...numeros2];
console.log(todos);  // [1, 2, 3, 4, 5, 6]

// Copiar array
let copia = [...numeros1];
```

### Com Objetos

```javascript
let produto = {
  nome: "Pizza",
  preco: 35.90
};

// Copiar e adicionar propriedade
let produtoCompleto = {
  ...produto,
  categoria: "Lanches",
  estoque: 10
};

console.log(produtoCompleto);
// { nome: "Pizza", preco: 35.90, categoria: "Lanches", estoque: 10 }
```

---

## Projeto do Dia 2 - Sistema de Pedidos

**Objetivo:** Criar um sistema simples de pedidos de restaurante.

**Requisitos:**

1. Array de produtos disponíveis (pelo menos 5)
2. Cada produto tem: id, nome, preco, categoria
3. Criar função `adicionarAoPedido(produto, quantidade)`
4. Criar função `calcularTotal()` que retorna o valor total
5. Criar função `listarPedido()` que mostra os itens
6. Criar função `aplicarDesconto(percentual)` se total > R$ 50

**Estrutura básica:**

```javascript
// Produtos disponíveis
let produtosDisponiveis = [
  { id: 1, nome: "Pizza Marguerita", preco: 35.90, categoria: "Lanches" },
  { id: 2, nome: "Coca-Cola 2L", preco: 8.00, categoria: "Bebidas" },
  { id: 3, nome: "Brownie", preco: 12.00, categoria: "Sobremesas" },
  { id: 4, nome: "Batata Frita", preco: 12.50, categoria: "Acompanhamentos" },
  { id: 5, nome: "Hamburguer", preco: 25.00, categoria: "Lanches" }
];

// Array do pedido (vazio no início)
let pedido = [];

function adicionarAoPedido(produtoId, quantidade) {
  // TODO: Implementar
}

function calcularTotal() {
  // TODO: Implementar
}

function listarPedido() {
  // TODO: Implementar
}

function aplicarDesconto(percentual) {
  // TODO: Implementar
}

// Teste
adicionarAoPedido(1, 2);  // 2 Pizzas
adicionarAoPedido(2, 1);  // 1 Coca-Cola
adicionarAoPedido(3, 3);  // 3 Brownies
listarPedido();
console.log("Total:", calcularTotal());
aplicarDesconto(10);
```

**TENTE FAZER SOZINHO!**

<details>
<summary>💡 Ver Solução Completa</summary>

```javascript
let produtosDisponiveis = [
  { id: 1, nome: "Pizza Marguerita", preco: 35.90, categoria: "Lanches" },
  { id: 2, nome: "Coca-Cola 2L", preco: 8.00, categoria: "Bebidas" },
  { id: 3, nome: "Brownie", preco: 12.00, categoria: "Sobremesas" },
  { id: 4, nome: "Batata Frita", preco: 12.50, categoria: "Acompanhamentos" },
  { id: 5, nome: "Hamburguer", preco: 25.00, categoria: "Lanches" }
];

let pedido = [];

function adicionarAoPedido(produtoId, quantidade) {
  // Buscar o produto
  let produto = produtosDisponiveis.find(p => p.id === produtoId);

  if (!produto) {
    console.log("Produto não encontrado!");
    return;
  }

  if (quantidade <= 0) {
    console.log("Quantidade inválida!");
    return;
  }

  // Verificar se produto já está no pedido
  let itemExistente = pedido.find(item => item.produto.id === produtoId);

  if (itemExistente) {
    itemExistente.quantidade += quantidade;
    console.log(`Adicionado mais ${quantidade}x ${produto.nome}`);
  } else {
    pedido.push({
      produto: produto,
      quantidade: quantidade
    });
    console.log(`Adicionado ${quantidade}x ${produto.nome} ao pedido`);
  }
}

function calcularTotal() {
  let total = 0;

  for (let item of pedido) {
    total += item.produto.preco * item.quantidade;
  }

  return total;
}

function listarPedido() {
  if (pedido.length === 0) {
    console.log("Pedido vazio!");
    return;
  }

  console.log("\n=== PEDIDO ===");

  for (let item of pedido) {
    let subtotal = item.produto.preco * item.quantidade;
    console.log(
      `${item.quantidade}x ${item.produto.nome} - ` +
      `R$ ${item.produto.preco.toFixed(2)} = ` +
      `R$ ${subtotal.toFixed(2)}`
    );
  }

  console.log(`\nTOTAL: R$ ${calcularTotal().toFixed(2)}`);
}

function aplicarDesconto(percentual) {
  let total = calcularTotal();

  if (total < 50) {
    console.log("Desconto disponível apenas para pedidos acima de R$ 50,00");
    return;
  }

  let desconto = total * (percentual / 100);
  let totalComDesconto = total - desconto;

  console.log(`\nDesconto de ${percentual}% aplicado!`);
  console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
  console.log(`Total com desconto: R$ ${totalComDesconto.toFixed(2)}`);
}

// Testes
console.log("=== ADICIONANDO PRODUTOS ===");
adicionarAoPedido(1, 2);  // 2 Pizzas
adicionarAoPedido(2, 1);  // 1 Coca-Cola
adicionarAoPedido(3, 3);  // 3 Brownies
adicionarAoPedido(1, 1);  // Mais 1 Pizza

listarPedido();
aplicarDesconto(10);
```

**Saída esperada:**
```
=== ADICIONANDO PRODUTOS ===
Adicionado 2x Pizza Marguerita ao pedido
Adicionado 1x Coca-Cola 2L ao pedido
Adicionado 3x Brownie ao pedido
Adicionado mais 1x Pizza Marguerita

=== PEDIDO ===
3x Pizza Marguerita - R$ 35.90 = R$ 107.70
1x Coca-Cola 2L - R$ 8.00 = R$ 8.00
3x Brownie - R$ 12.00 = R$ 36.00

TOTAL: R$ 151.70

Desconto de 10% aplicado!
Valor do desconto: R$ 15.17
Total com desconto: R$ 136.53
```
</details>

---

## Resumo do Dia 2

✅ **O que você aprendeu:**
- Arrays (criar, acessar, modificar)
- Percorrer arrays (for, for...of, forEach)
- Métodos de array (map, filter, find)
- Objetos (criar, acessar, modificar)
- Arrays de objetos
- Desestruturação
- Spread operator

---

## Exercícios Extras

Se terminou tudo:

1. Adicione função para remover item do pedido
2. Adicione função para filtrar produtos por categoria
3. Adicione função para buscar produto mais caro
4. Crie função que agrupa pedido por categoria

---

## Próximo Passo

Amanhã você vai aprender **Orientação a Objetos** - como organizar seu código usando classes!

🚀 **Parabéns por completar o Dia 2!**

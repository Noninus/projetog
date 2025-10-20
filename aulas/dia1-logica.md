# Dia 1 - Lógica de Programação

## Objetivos do Dia
- Entender o que é programação
- Aprender sobre variáveis e tipos de dados
- Usar operadores matemáticos e lógicos
- Criar condicionais (if/else)
- Usar laços de repetição (for, while)
- Criar funções básicas

---

## 1. O que é Programação?

Programação é **dar instruções para o computador**.

### Exemplo do Mundo Real

```
Receita de Bolo:
1. Pegue 3 ovos
2. Adicione 2 xícaras de açúcar
3. Misture até ficar homogêneo
4. Leve ao forno por 40 minutos
```

### Mesmo Conceito em Código

```javascript
function fazerBolo() {
  let ovos = 3;
  let acucar = 2;

  misturar(ovos, acucar);
  assar(40);
}
```

---

## 2. Variáveis e Tipos de Dados

**Variável** = caixa etiquetada que guarda informação

### Tipos Básicos

```javascript
// String (texto)
let nome = "João";
let sobrenome = "Silva";

// Number (número)
let idade = 25;
let altura = 1.75;
let preco = 19.90;

// Boolean (verdadeiro/falso)
let maiorDeIdade = true;
let temCarteira = false;

// Undefined e Null
let valorIndefinido;  // undefined
let valorNulo = null;

console.log(nome);          // João
console.log(idade);         // 25
console.log(maiorDeIdade);  // true
```

### 🧪 EXERCÍCIO 1.1 - Variáveis

Crie variáveis para representar uma pessoa:
- Nome completo
- Idade
- Altura (em metros)
- Se está empregado ou não

**Faça sozinho! Não olhe a solução primeiro.**

<details>
<summary>💡 Ver Solução</summary>

```javascript
let nomeCompleto = "Maria Silva Santos";
let idade = 28;
let altura = 1.65;
let empregado = true;

console.log("Nome:", nomeCompleto);
console.log("Idade:", idade);
console.log("Altura:", altura + "m");
console.log("Empregado:", empregado);
```
</details>

---

## 3. Operadores Matemáticos

```javascript
let a = 10;
let b = 3;

// Operações básicas
console.log(a + b);   // 13 (adição)
console.log(a - b);   // 7  (subtração)
console.log(a * b);   // 30 (multiplicação)
console.log(a / b);   // 3.333... (divisão)
console.log(a % b);   // 1  (resto da divisão)

// Incremento e Decremento
let contador = 0;
contador++;  // contador = contador + 1
console.log(contador);  // 1

contador--;  // contador = contador - 1
console.log(contador);  // 0

// Operadores compostos
let valor = 10;
valor += 5;  // valor = valor + 5 → 15
valor -= 3;  // valor = valor - 3 → 12
valor *= 2;  // valor = valor * 2 → 24
```

### 🧪 EXERCÍCIO 1.2 - Calculadora

Crie variáveis `preco` e `quantidade`, depois calcule:
1. Valor total (preço × quantidade)
2. Desconto de 10% sobre o total
3. Valor final (total - desconto)

**Tente fazer antes de ver a solução!**

<details>
<summary>💡 Ver Solução</summary>

```javascript
let preco = 50;
let quantidade = 3;

let total = preco * quantidade;
let desconto = total * 0.10;  // 10%
let valorFinal = total - desconto;

console.log("Total:", total);           // 150
console.log("Desconto:", desconto);     // 15
console.log("Valor final:", valorFinal); // 135
```
</details>

---

## 4. Operadores de Comparação

```javascript
// Igualdade
5 === 5      // true  (igual em valor e tipo)
5 === "5"    // false (tipos diferentes)
5 == "5"     // true  (compara só valor - EVITE USAR)

// Diferente
5 !== 3      // true
5 !== 5      // false

// Maior/Menor
10 > 5       // true
5 < 10       // true
5 >= 5       // true (maior ou igual)
10 <= 5      // false (menor ou igual)
```

**IMPORTANTE:** Sempre use `===` e `!==` (nunca `==` ou `!=`)

---

## 5. Condicionais (if/else)

Tomar decisões no código:

```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

### If com múltiplas condições

```javascript
let nota = 7;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Bom!");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}
```

### Operadores Lógicos

```javascript
// && (E) - todas devem ser verdadeiras
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

// || (OU) - pelo menos uma verdadeira
let fimDeSemana = true;
let feriado = false;

if (fimDeSemana || feriado) {
  console.log("Dia de descanso!");
}

// ! (NÃO) - inverte o valor
let chovendo = false;

if (!chovendo) {
  console.log("Pode sair sem guarda-chuva");
}
```

### 🧪 EXERCÍCIO 1.3 - Sistema de Login

Crie variáveis `usuario` e `senha`. Verifique:
- Se usuário é "admin" E senha é "1234" → "Login bem-sucedido"
- Caso contrário → "Usuário ou senha incorretos"

<details>
<summary>💡 Ver Solução</summary>

```javascript
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login bem-sucedido!");
} else {
  console.log("Usuário ou senha incorretos");
}
```
</details>

---

## 6. Laços de Repetição

### For - Repetir X vezes

```javascript
// Contar de 0 a 4
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
// Saída: 0, 1, 2, 3, 4

// Contar de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Anatomia do for:**
```javascript
for (inicialização; condição; incremento) {
  // código a repetir
}
```

### While - Enquanto condição for verdadeira

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador:", contador);
  contador++;
}
// Saída: 0, 1, 2, 3, 4
```

**⚠️ CUIDADO:** Sempre garanta que a condição vai se tornar falsa, senão entra em loop infinito!

```javascript
// ❌ LOOP INFINITO - NUNCA FAÇA ISSO!
let x = 0;
while (x < 5) {
  console.log(x);
  // esqueceu de incrementar x!
}
```

### 🧪 EXERCÍCIO 1.4 - Tabuada

Use um `for` para criar a tabuada do 5 (de 1 a 10).

Exemplo de saída:
```
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

<details>
<summary>💡 Ver Solução</summary>

```javascript
for (let i = 1; i <= 10; i++) {
  let resultado = 5 * i;
  console.log(`5 x ${i} = ${resultado}`);
}
```
</details>

---

## 7. Funções

Funções são **blocos de código reutilizáveis**.

### Função Simples

```javascript
function saudar() {
  console.log("Olá!");
}

saudar();  // Chama a função
// Saída: Olá!
```

### Função com Parâmetros

```javascript
function saudarPessoa(nome) {
  console.log("Olá, " + nome + "!");
}

saudarPessoa("Maria");  // Olá, Maria!
saudarPessoa("João");   // Olá, João!
```

### Função que Retorna Valor

```javascript
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado);  // 8

let outro = somar(10, 20);
console.log(outro);  // 30
```

### Múltiplos Parâmetros

```javascript
function calcularMedia(nota1, nota2, nota3) {
  let soma = nota1 + nota2 + nota3;
  let media = soma / 3;
  return media;
}

let mediaAluno = calcularMedia(7, 8, 9);
console.log("Média:", mediaAluno);  // 8
```

### 🧪 EXERCÍCIO 1.5 - Funções

Crie 3 funções:

1. `calcularAreaRetangulo(largura, altura)` - retorna largura × altura
2. `ehPar(numero)` - retorna true se número for par, false se ímpar
3. `maiorNumero(a, b)` - retorna o maior entre dois números

Teste cada função com diferentes valores.

<details>
<summary>💡 Ver Solução</summary>

```javascript
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Testes
console.log("Área:", calcularAreaRetangulo(5, 10));  // 50
console.log("4 é par?", ehPar(4));                   // true
console.log("7 é par?", ehPar(7));                   // false
console.log("Maior:", maiorNumero(15, 8));           // 15
```
</details>

---

## 8. Projeto do Dia 1 - Calculadora de Compras

**Objetivo:** Criar uma função que calcula o valor de uma compra com desconto.

**Regras:**
- Se quantidade >= 10: desconto de 20%
- Se quantidade >= 5: desconto de 10%
- Senão: sem desconto

**Especificação:**

```javascript
function calcularCompra(preco, quantidade) {
  // 1. Calcular valor total
  // 2. Determinar percentual de desconto
  // 3. Calcular valor do desconto
  // 4. Calcular valor final
  // 5. Retornar objeto com todas as informações
}
```

**Saída esperada:**
```javascript
{
  valorTotal: 500,
  desconto: 100,
  percentualDesconto: 20,
  valorFinal: 400
}
```

### TENTE FAZER SOZINHO! É o desafio do dia.

<details>
<summary>💡 Ver Solução Completa</summary>

```javascript
function calcularCompra(preco, quantidade) {
  let valorTotal = preco * quantidade;
  let percentualDesconto = 0;

  if (quantidade >= 10) {
    percentualDesconto = 20;
  } else if (quantidade >= 5) {
    percentualDesconto = 10;
  }

  let desconto = valorTotal * (percentualDesconto / 100);
  let valorFinal = valorTotal - desconto;

  return {
    valorTotal: valorTotal,
    desconto: desconto,
    percentualDesconto: percentualDesconto,
    valorFinal: valorFinal
  };
}

// Testes
console.log(calcularCompra(50, 3));   // Sem desconto
console.log(calcularCompra(50, 7));   // 10% desconto
console.log(calcularCompra(50, 12));  // 20% desconto
```

**Saída:**
```
{
  valorTotal: 150,
  desconto: 0,
  percentualDesconto: 0,
  valorFinal: 150
}
{
  valorTotal: 350,
  desconto: 35,
  percentualDesconto: 10,
  valorFinal: 315
}
{
  valorTotal: 600,
  desconto: 120,
  percentualDesconto: 20,
  valorFinal: 480
}
```
</details>

---

## Resumo do Dia 1

✅ O que você aprendeu:
- Variáveis (let, const)
- Tipos de dados (string, number, boolean)
- Operadores matemáticos (+, -, *, /, %)
- Operadores de comparação (===, !==, >, <, >=, <=)
- Operadores lógicos (&&, ||, !)
- Condicionais (if, else if, else)
- Laços (for, while)
- Funções (parâmetros e retorno)

---

## Exercícios Extras

Se terminou tudo e quer praticar mais:

1. Crie uma função que verifica se um ano é bissexto
2. Crie uma função que conta quantos números pares existem de 1 a N
3. Crie uma função que calcula o fatorial de um número
4. Crie uma função que verifica se uma string é um palíndromo

---

## Próximo Passo

Amanhã você vai aprender sobre **arrays** (listas) e **objetos**, que vão permitir trabalhar com múltiplos dados de forma organizada!

🚀 **Parabéns por completar o Dia 1!**

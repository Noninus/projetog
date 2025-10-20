# Dia 4 - APIs REST e Testes com Postman/Bruno

## Objetivos do Dia
- Entender o que é uma API REST
- Conhecer os métodos HTTP (GET, POST, PUT, DELETE)
- Aprender a usar Postman ou Bruno para testar APIs
- Consumir APIs com `fetch` no JavaScript
- Preparar para o projeto final

---

## 1. O que é uma API REST?

**API** = Application Programming Interface (Interface de Programação de Aplicações)
**REST** = Representational State Transfer

### Analogia: Restaurante

```
CLIENTE (Frontend) ←→ GARÇOM (API) ←→ COZINHA (Backend/Banco)

Cliente pede comida → Garçom leva pedido → Cozinha prepara → Garçom traz → Cliente recebe

Frontend faz requisição → API processa → Banco retorna dados → API responde → Frontend recebe
```

### Como Funciona

1. **Cliente** (navegador, app mobile) faz uma **requisição HTTP**
2. **Servidor** (API) processa a requisição
3. **Servidor** retorna uma **resposta** (geralmente JSON)

---

## 2. Métodos HTTP (CRUD)

| Método | Ação | SQL Equivalente | Exemplo |
|--------|------|-----------------|---------|
| **GET** | Ler/Buscar | SELECT | Buscar produtos |
| **POST** | Criar | INSERT | Adicionar produto |
| **PUT** | Atualizar | UPDATE | Editar produto |
| **DELETE** | Deletar | DELETE | Remover produto |

### Exemplos Práticos

```javascript
// GET - Buscar todos os produtos
GET /api/produtos
Response: [{ id: 1, nome: "Pizza", preco: 35.90 }, ...]

// GET - Buscar um produto específico
GET /api/produtos/1
Response: { id: 1, nome: "Pizza", preco: 35.90 }

// POST - Criar novo produto
POST /api/produtos
Body: { nome: "Pizza", preco: 35.90 }
Response: { id: 3, nome: "Pizza", preco: 35.90 }

// PUT - Atualizar produto
PUT /api/produtos/1
Body: { nome: "Pizza Grande", preco: 42.90 }
Response: { id: 1, nome: "Pizza Grande", preco: 42.90 }

// DELETE - Deletar produto
DELETE /api/produtos/1
Response: { success: true }
```

---

## 3. Formato JSON

**JSON** = JavaScript Object Notation

APIs RESTful geralmente usam JSON para trocar dados.

```json
{
  "id": 1,
  "nome": "Pizza Marguerita",
  "categoria": "Lanches",
  "preco": 35.90,
  "ativo": true
}
```

Array de objetos:
```json
[
  {
    "id": 1,
    "nome": "Pizza",
    "preco": 35.90
  },
  {
    "id": 2,
    "nome": "Coca-Cola",
    "preco": 8.00
  }
]
```

---

## 4. Testando APIs com Postman

### O que é Postman?

Ferramenta para testar APIs sem precisar criar interface.

### Instalação

1. Acesse: https://www.postman.com/downloads/
2. Baixe e instale
3. Crie uma conta (gratuita)

### Testando Nossa API

Primeiro, certifique-se que o backend está rodando:

```bash
cd projeto-final-backend
npm run dev
```

Servidor deve estar em: `http://localhost:3000`

---

### Teste 1: GET - Listar Todos os Produtos

1. Abra o Postman
2. Clique em "New" → "HTTP Request"
3. Configure:
   - **Método:** GET
   - **URL:** `http://localhost:3000/api/produtos`
4. Clique em "Send"

**Resposta esperada:**
```json
[
  {
    "id": 1,
    "nome": "Pizza Marguerita",
    "categoria": "Lanches",
    "preco": 35.9,
    "ativo": 1,
    "data_criacao": "2025-10-20 18:55:40"
  },
  ...
]
```

---

### Teste 2: GET - Buscar Um Produto

1. **Método:** GET
2. **URL:** `http://localhost:3000/api/produtos/1`
3. Clique em "Send"

**Resposta esperada:**
```json
{
  "id": 1,
  "nome": "Pizza Marguerita",
  "categoria": "Lanches",
  "preco": 35.9,
  "ativo": 1,
  "data_criacao": "2025-10-20 18:55:40"
}
```

---

### Teste 3: POST - Criar Novo Produto

1. **Método:** POST
2. **URL:** `http://localhost:3000/api/produtos`
3. Clique em "Body"
4. Selecione "raw"
5. Selecione "JSON" no dropdown
6. Cole este JSON:

```json
{
  "nome": "X-Salada",
  "categoria": "Lanches",
  "preco": 22.50
}
```

7. Clique em "Send"

**Resposta esperada:**
```json
{
  "id": 21,
  "nome": "X-Salada",
  "categoria": "Lanches",
  "preco": 22.5,
  "ativo": 1,
  "data_criacao": "2025-10-20 19:30:00"
}
```

---

### Teste 4: PUT - Atualizar Produto

1. **Método:** PUT
2. **URL:** `http://localhost:3000/api/produtos/21`
3. **Body (raw JSON):**

```json
{
  "nome": "X-Salada Especial",
  "categoria": "Lanches",
  "preco": 25.00
}
```

4. Clique em "Send"

**Resposta esperada:**
```json
{
  "id": 21,
  "nome": "X-Salada Especial",
  "categoria": "Lanches",
  "preco": 25.0,
  "ativo": 1,
  "data_criacao": "2025-10-20 19:30:00"
}
```

---

### Teste 5: DELETE - Deletar Produto

1. **Método:** DELETE
2. **URL:** `http://localhost:3000/api/produtos/21`
3. Clique em "Send"

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Produto deletado com sucesso"
}
```

---

### Teste 6: Validações - Dados Inválidos

Teste criar produto com dados inválidos:

**POST** `http://localhost:3000/api/produtos`

Body:
```json
{
  "nome": "Pi",
  "categoria": "Comida",
  "preco": -10
}
```

**Resposta esperada (Status 400):**
```json
{
  "error": "Dados inválidos",
  "detalhes": [
    "Nome deve ter pelo menos 3 caracteres",
    "Categoria inválida. Use: Lanches, Bebidas, Sobremesas, Acompanhamentos",
    "Preço deve ser maior que zero"
  ]
}
```

---

## 5. Testando APIs com Bruno

### O que é Bruno?

Alternativa open-source ao Postman (mais leve e local).

### Instalação

1. Acesse: https://www.usebruno.com/downloads
2. Baixe e instale

### Uso

O processo é **idêntico** ao Postman:

1. Criar nova requisição
2. Escolher método (GET, POST, PUT, DELETE)
3. Inserir URL
4. Configurar Body (se POST/PUT)
5. Enviar

---

## 6. Consumindo APIs com Fetch (JavaScript)

### Fetch - GET

```javascript
// Buscar todos os produtos
async function buscarProdutos() {
  try {
    const response = await fetch('http://localhost:3000/api/produtos');

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const produtos = await response.json();
    console.log(produtos);
    return produtos;

  } catch (error) {
    console.error('Erro:', error);
  }
}

buscarProdutos();
```

### Fetch - POST

```javascript
// Criar novo produto
async function criarProduto(nome, categoria, preco) {
  try {
    const response = await fetch('http://localhost:3000/api/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, categoria, preco })
    });

    if (!response.ok) {
      const erro = await response.json();
      console.error('Erro:', erro);
      return null;
    }

    const produto = await response.json();
    console.log('Produto criado:', produto);
    return produto;

  } catch (error) {
    console.error('Erro:', error);
  }
}

criarProduto('Pastel', 'Lanches', 8.50);
```

### Fetch - PUT

```javascript
// Atualizar produto
async function atualizarProduto(id, nome, categoria, preco) {
  try {
    const response = await fetch(`http://localhost:3000/api/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, categoria, preco })
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar');
    }

    const produto = await response.json();
    console.log('Produto atualizado:', produto);
    return produto;

  } catch (error) {
    console.error('Erro:', error);
  }
}

atualizarProduto(1, 'Pizza Marguerita Grande', 'Lanches', 42.90);
```

### Fetch - DELETE

```javascript
// Deletar produto
async function deletarProduto(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/produtos/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar');
    }

    const resultado = await response.json();
    console.log(resultado.message);
    return true;

  } catch (error) {
    console.error('Erro:', error);
    return false;
  }
}

deletarProduto(21);
```

---

## 🧪 EXERCÍCIO 4.1 - Testar API com Postman

**Objetivos:**

1. Inicie o backend: `npm run dev`
2. Abra o Postman
3. Teste todos os 5 endpoints (GET, GET/:id, POST, PUT, DELETE)
4. Tire screenshots de cada teste funcionando

**Checklist:**
- [ ] GET /api/produtos retorna array
- [ ] GET /api/produtos/1 retorna um produto
- [ ] POST /api/produtos cria novo produto
- [ ] PUT /api/produtos/:id atualiza produto
- [ ] DELETE /api/produtos/:id deleta produto
- [ ] POST com dados inválidos retorna erro 400

---

## 🧪 EXERCÍCIO 4.2 - Consumir API com JavaScript

Crie um arquivo `teste-api.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste API</title>
</head>
<body>
  <h1>Teste de API</h1>

  <button onclick="listarProdutos()">Listar Produtos</button>
  <button onclick="adicionarProduto()">Adicionar Produto</button>

  <div id="resultado"></div>

  <script>
    const API_URL = 'http://localhost:3000/api/produtos';

    async function listarProdutos() {
      // TODO: Implementar
    }

    async function adicionarProduto() {
      // TODO: Implementar
    }

    // Exibir no HTML
    function mostrarResultado(dados) {
      document.getElementById('resultado').innerHTML =
        '<pre>' + JSON.stringify(dados, null, 2) + '</pre>';
    }
  </script>
</body>
</html>
```

**Implemente as funções:**

<details>
<summary>💡 Ver Solução</summary>

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste API</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      margin: 5px;
      cursor: pointer;
    }
    #resultado {
      margin-top: 20px;
      background: #f4f4f4;
      padding: 15px;
      border-radius: 5px;
    }
    pre {
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <h1>Teste de API - Produtos</h1>

  <button onclick="listarProdutos()">📋 Listar Produtos</button>
  <button onclick="adicionarProduto()">➕ Adicionar Produto</button>
  <button onclick="buscarProduto()">🔍 Buscar Produto ID 1</button>
  <button onclick="deletarProduto()">🗑️ Deletar Último</button>

  <div id="resultado"></div>

  <script>
    const API_URL = 'http://localhost:3000/api/produtos';

    async function listarProdutos() {
      try {
        const response = await fetch(API_URL);
        const produtos = await response.json();
        mostrarResultado(produtos);
      } catch (error) {
        mostrarErro(error);
      }
    }

    async function adicionarProduto() {
      const nome = prompt('Nome do produto:', 'Produto Teste');
      const categoria = prompt('Categoria:', 'Lanches');
      const preco = parseFloat(prompt('Preço:', '10.00'));

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, categoria, preco })
        });

        const produto = await response.json();
        mostrarResultado(produto);
      } catch (error) {
        mostrarErro(error);
      }
    }

    async function buscarProduto() {
      try {
        const response = await fetch(`${API_URL}/1`);
        const produto = await response.json();
        mostrarResultado(produto);
      } catch (error) {
        mostrarErro(error);
      }
    }

    async function deletarProduto() {
      const id = prompt('ID do produto para deletar:', '21');

      if (!id) return;

      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });

        const resultado = await response.json();
        mostrarResultado(resultado);
      } catch (error) {
        mostrarErro(error);
      }
    }

    function mostrarResultado(dados) {
      document.getElementById('resultado').innerHTML =
        '<strong>Resultado:</strong><pre>' +
        JSON.stringify(dados, null, 2) +
        '</pre>';
    }

    function mostrarErro(erro) {
      document.getElementById('resultado').innerHTML =
        '<strong style="color:red">Erro:</strong><pre>' +
        erro.message +
        '</pre>';
    }
  </script>
</body>
</html>
```

**Para testar:**
1. Salve o arquivo
2. Certifique-se que o backend está rodando
3. Abra o arquivo no navegador
4. Clique nos botões
</details>

---

## Projeto do Dia 4 - Cliente de API Completo

**Objetivo:** Criar página HTML que faz CRUD completo via API.

**Funcionalidades:**
1. Listar produtos em tabela
2. Formulário para adicionar
3. Botão editar (prompt com novos dados)
4. Botão deletar (com confirmação)

**DESAFIO:** Tente fazer sozinho usando os exemplos acima!

---

## Resumo do Dia 4

✅ **O que você aprendeu:**
- O que é uma API REST
- Métodos HTTP (GET, POST, PUT, DELETE)
- Formato JSON
- Testar APIs com Postman/Bruno
- Consumir APIs com `fetch`
- Tratamento de erros em requisições
- async/await

---

## Checklist de Preparação para o Dia 5

Antes de começar o projeto final, certifique-se que:

- [ ] Backend está instalado e funcionando
- [ ] Consegue listar produtos no Postman
- [ ] Consegue criar produto no Postman
- [ ] Consegue atualizar produto no Postman
- [ ] Consegue deletar produto no Postman
- [ ] Entende como usar `fetch` no JavaScript
- [ ] Sabe tratar erros em requisições

---

## Dicas para o Projeto Final

No Dia 5 você vai criar o frontend em SvelteKit. Aqui está o que vai precisar:

```javascript
// Exemplo de como vai ficar no SvelteKit
<script>
  let produtos = [];

  async function carregarProdutos() {
    const response = await fetch('http://localhost:3000/api/produtos');
    produtos = await response.json();
  }

  onMount(carregarProdutos);
</script>

<table>
  {#each produtos as produto}
    <tr>
      <td>{produto.nome}</td>
      <td>{produto.preco}</td>
    </tr>
  {/each}
</table>
```

---

## Próximo Passo

Amanhã é o **DIA FINAL**! Você vai criar o frontend completo em SvelteKit consumindo a API!

🚀 **Parabéns por completar o Dia 4!**

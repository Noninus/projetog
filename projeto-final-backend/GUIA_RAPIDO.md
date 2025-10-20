# Guia Rápido - Backend do Projeto Final

## Para o Instrutor

Este é o backend completo e pronto para o estagiário usar. Siga estes passos para configurar:

### 1. Instalar Dependências

```bash
cd projeto-final-backend
npm install
```

### 2. Popular o Banco com Dados Iniciais (Opcional)

```bash
npm run seed
```

Isso irá criar 20 produtos de exemplo no banco de dados.

### 3. Iniciar o Servidor

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

---

## Verificando se Está Funcionando

### Teste 1: Rota Raiz

Abra no navegador: `http://localhost:3000`

Você deve ver um JSON com informações da API.

### Teste 2: Listar Produtos

Abra no navegador: `http://localhost:3000/api/produtos`

Você deve ver um array JSON com os produtos (vazio se não rodou o seed).

### Teste 3: Criar um Produto

No terminal, execute:

```bash
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","categoria":"Lanches","preco":10.00}'
```

Você deve receber o produto criado com ID.

---

## Para o Estagiário

O backend está **100% pronto**. Você não precisa mexer nele!

### Como Usar a API no Frontend

#### 1. Listar Produtos

```javascript
const response = await fetch('http://localhost:3000/api/produtos');
const produtos = await response.json();
console.log(produtos);
```

#### 2. Criar Produto

```javascript
const response = await fetch('http://localhost:3000/api/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nome: 'Pizza Marguerita',
    categoria: 'Lanches',
    preco: 35.90
  })
});

const produto = await response.json();
console.log(produto);
```

#### 3. Buscar Um Produto

```javascript
const id = 1;
const response = await fetch(`http://localhost:3000/api/produtos/${id}`);
const produto = await response.json();
console.log(produto);
```

#### 4. Atualizar Produto

```javascript
const id = 1;
const response = await fetch(`http://localhost:3000/api/produtos/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nome: 'Pizza Marguerita Grande',
    categoria: 'Lanches',
    preco: 42.90
  })
});

const produto = await response.json();
console.log(produto);
```

#### 5. Deletar Produto

```javascript
const id = 1;
const response = await fetch(`http://localhost:3000/api/produtos/${id}`, {
  method: 'DELETE'
});

const resultado = await response.json();
console.log(resultado); // { success: true, message: "..." }
```

---

## Tratando Erros

Sempre verifique se a resposta foi bem-sucedida:

```javascript
const response = await fetch('http://localhost:3000/api/produtos');

if (!response.ok) {
  const erro = await response.json();
  console.error('Erro:', erro);
  return;
}

const produtos = await response.json();
```

---

## Categorias Válidas

A API só aceita estas categorias:

- `Lanches`
- `Bebidas`
- `Sobremesas`
- `Acompanhamentos`

Se enviar outra categoria, receberá erro 400.

---

## Validações da API

A API valida automaticamente:

✅ **Nome:** obrigatório, mínimo 3 caracteres
✅ **Categoria:** deve ser uma das 4 permitidas
✅ **Preço:** obrigatório, deve ser maior que 0

Se houver erro de validação, a API retorna status 400 com array de erros:

```json
{
  "error": "Dados inválidos",
  "detalhes": [
    "Nome deve ter pelo menos 3 caracteres",
    "Preço deve ser maior que zero"
  ]
}
```

---

## Estrutura do Produto

Quando você recebe um produto da API, ele tem esta estrutura:

```javascript
{
  id: 1,                              // Gerado automaticamente
  nome: "Pizza Marguerita",
  categoria: "Lanches",
  preco: 35.90,
  ativo: 1,                           // 1 = ativo, 0 = inativo
  data_criacao: "2025-10-20 10:30:00" // Gerada automaticamente
}
```

---

## Dicas para o Frontend

### 1. Crie uma função auxiliar para fetch

```javascript
async function apiGet(endpoint) {
  const response = await fetch(`http://localhost:3000${endpoint}`);
  if (!response.ok) throw new Error('Erro na requisição');
  return response.json();
}

async function apiPost(endpoint, data) {
  const response = await fetch(`http://localhost:3000${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Erro na requisição');
  return response.json();
}

// Uso:
const produtos = await apiGet('/api/produtos');
const novoProduto = await apiPost('/api/produtos', { nome: '...', ... });
```

### 2. Use try/catch para tratar erros

```javascript
try {
  const produtos = await apiGet('/api/produtos');
  // sucesso
} catch (error) {
  console.error('Erro:', error);
  // mostrar mensagem de erro para o usuário
}
```

### 3. Formate preços para exibição

```javascript
const precoFormatado = produto.preco.toFixed(2); // "35.90"
const precoComMoeda = `R$ ${precoFormatado}`; // "R$ 35.90"
```

---

## Problemas Comuns

### Erro: "fetch is not defined"

Se estiver usando Node.js antigo, atualize para Node 18+.

### Erro: "CORS"

Já está configurado no backend. Se ainda der erro, certifique-se de estar acessando `http://localhost:3000` (não use IP).

### Erro: "Cannot GET /api/produtos"

Verifique se o servidor está rodando (`npm run dev`).

### Banco de dados está vazio

Execute `npm run seed` para popular com dados iniciais.

---

## Próximos Passos

Agora que o backend está rodando:

1. ✅ Crie a página de **listagem** (`/produtos`)
2. ✅ Crie a página de **adicionar** (`/produtos/novo`)
3. ✅ Crie a página de **editar** (`/produtos/[id]`)

**Boa sorte com o frontend!** 🚀

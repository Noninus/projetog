# API REST - Sistema de Gestão de Produtos (Restaurante)

Backend completo com API REST e banco de dados SQLite para o projeto final do treinamento.

## Instalação

```bash
npm install
```

## Como Rodar

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

## Endpoints da API

### 1. Listar todos os produtos

```http
GET /api/produtos
```

**Response:**
```json
[
  {
    "id": 1,
    "nome": "Pizza Marguerita",
    "categoria": "Lanches",
    "preco": 35.90,
    "ativo": 1,
    "data_criacao": "2025-10-20 10:30:00"
  }
]
```

---

### 2. Buscar produto por ID

```http
GET /api/produtos/:id
```

**Response:**
```json
{
  "id": 1,
  "nome": "Pizza Marguerita",
  "categoria": "Lanches",
  "preco": 35.90,
  "ativo": 1,
  "data_criacao": "2025-10-20 10:30:00"
}
```

**Erros:**
- `400` - ID inválido
- `404` - Produto não encontrado

---

### 3. Criar novo produto

```http
POST /api/produtos
Content-Type: application/json

{
  "nome": "Pizza Marguerita",
  "categoria": "Lanches",
  "preco": 35.90
}
```

**Response:**
```json
{
  "id": 1,
  "nome": "Pizza Marguerita",
  "categoria": "Lanches",
  "preco": 35.90,
  "ativo": 1,
  "data_criacao": "2025-10-20 10:30:00"
}
```

**Validações:**
- `nome`: obrigatório, mínimo 3 caracteres
- `categoria`: deve ser uma de: Lanches, Bebidas, Sobremesas, Acompanhamentos
- `preco`: obrigatório, deve ser maior que 0

**Erros:**
- `400` - Dados inválidos (com lista de erros)

---

### 4. Atualizar produto

```http
PUT /api/produtos/:id
Content-Type: application/json

{
  "nome": "Pizza Marguerita Grande",
  "categoria": "Lanches",
  "preco": 42.90
}
```

**Response:**
```json
{
  "id": 1,
  "nome": "Pizza Marguerita Grande",
  "categoria": "Lanches",
  "preco": 42.90,
  "ativo": 1,
  "data_criacao": "2025-10-20 10:30:00"
}
```

**Erros:**
- `400` - ID inválido ou dados inválidos
- `404` - Produto não encontrado

---

### 5. Deletar produto

```http
DELETE /api/produtos/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Produto deletado com sucesso"
}
```

**Erros:**
- `400` - ID inválido
- `404` - Produto não encontrado

---

## Categorias Permitidas

- Lanches
- Bebidas
- Sobremesas
- Acompanhamentos

---

## Estrutura do Banco de Dados

```sql
CREATE TABLE produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  preco REAL NOT NULL,
  ativo INTEGER DEFAULT 1,
  data_criacao TEXT DEFAULT CURRENT_TIMESTAMP
);
```

---

## Testando a API

### Com cURL:

```bash
# Listar produtos
curl http://localhost:3000/api/produtos

# Criar produto
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Pizza","categoria":"Lanches","preco":35.90}'

# Buscar produto
curl http://localhost:3000/api/produtos/1

# Atualizar produto
curl -X PUT http://localhost:3000/api/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"Pizza Grande","categoria":"Lanches","preco":42.90}'

# Deletar produto
curl -X DELETE http://localhost:3000/api/produtos/1
```

### Com Fetch (JavaScript):

```javascript
// Listar produtos
const response = await fetch('http://localhost:3000/api/produtos');
const produtos = await response.json();

// Criar produto
const response = await fetch('http://localhost:3000/api/produtos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nome: 'Pizza',
    categoria: 'Lanches',
    preco: 35.90
  })
});
const produto = await response.json();
```

---

## Estrutura do Projeto

```
projeto-final-backend/
├── src/
│   ├── database/
│   │   ├── db.js                  (Configuração do banco)
│   │   └── produtoRepository.js   (CRUD no banco)
│   ├── routes/
│   │   └── produtos.js            (Rotas da API)
│   ├── validations.js             (Validações)
│   └── server.js                  (Servidor Express)
├── package.json
└── README.md
```

---

## CORS

O CORS está habilitado para permitir requisições de qualquer origem. Ideal para desenvolvimento.

Para produção, configure apenas as origens permitidas:

```javascript
app.use(cors({
  origin: 'https://seu-frontend.com'
}));
```

---

## Scripts

- `npm run dev` - Inicia servidor com auto-reload (Node 18+)
- `npm start` - Inicia servidor em produção

---

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **Better-SQLite3** - Banco de dados SQLite
- **CORS** - Middleware para habilitar CORS

---

## Observações

- O banco de dados SQLite (`restaurante.db`) é criado automaticamente na primeira execução
- Logs de requisições são exibidos no console
- Erros são tratados e retornam JSON com mensagem descritiva
- A API segue padrões REST

---

## Para o Estagiário

Este backend está **100% pronto para uso**. Você não precisa modificar nada aqui!

Seu trabalho é criar o **frontend em SvelteKit** que consome esta API.

Endpoints que você vai usar:
- `GET /api/produtos` - Para listar na página principal
- `POST /api/produtos` - Para adicionar novo produto
- `GET /api/produtos/:id` - Para buscar produto ao editar
- `PUT /api/produtos/:id` - Para atualizar produto
- `DELETE /api/produtos/:id` - Para deletar produto

**Boa sorte!** 🚀

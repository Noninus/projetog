# Dia 5 - Projeto Final: Sistema de Gestão de Produtos para Restaurante

## Objetivo

Criar um sistema completo de gerenciamento de produtos (cardápio) usando **TUDO** que você aprendeu nos últimos 4 dias.

---

## Especificação do Projeto

### Sistema: Gestão de Produtos (CLI - Terminal)

**Funcionalidades:**

1. ✅ Adicionar produto
2. ✅ Listar todos os produtos
3. ✅ Editar produto
4. ✅ Deletar produto
5. ✅ Menu interativo

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

**Categorias permitidas:**
- Lanches
- Bebidas
- Sobremesas
- Acompanhamentos

---

## Arquitetura do Projeto

```
projeto-final/
├── src/
│   ├── models/
│   │   └── Produto.js          (← Classe Produto com validações)
│   ├── database/
│   │   ├── db.js               (← Configuração do banco)
│   │   └── produtoRepository.js (← CRUD no banco)
│   └── index.js                (← Menu e lógica principal)
└── package.json
```

---

## Passo a Passo da Implementação

### ETAPA 1: Configurar o Projeto

```bash
cd projeto-final
npm init -y
npm install better-sqlite3
```

Edite o `package.json` para adicionar `"type": "module"`:

```json
{
  "name": "projeto-final",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "better-sqlite3": "^11.0.0"
  }
}
```

---

### ETAPA 2: Criar a Classe Produto

**Arquivo:** `src/models/Produto.js`

**Requisitos:**

A classe deve ter:
- Propriedades: `id`, `nome`, `categoria`, `preco`, `ativo`
- Construtor que inicializa as propriedades
- Método `validar()` que retorna objeto com `{ valido: boolean, erros: string[] }`

**Validações:**

1. Nome não pode ser vazio e deve ter pelo menos 3 caracteres
2. Categoria deve ser uma das permitidas (Lanches, Bebidas, Sobremesas, Acompanhamentos)
3. Preço deve ser maior que 0

**Estrutura básica:**

```javascript
export class Produto {
  constructor(nome, categoria, preco, ativo = true, id = null) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.ativo = ativo;
  }

  validar() {
    let erros = [];

    // TODO: Implementar validações

    return {
      valido: erros.length === 0,
      erros: erros
    };
  }

  exibirInfo() {
    console.log(`[${this.id}] ${this.nome} - ${this.categoria} - R$ ${this.preco.toFixed(2)}`);
  }
}
```

**TENTE FAZER SOZINHO!** Complete as validações.

<details>
<summary>💡 Ver Solução Completa</summary>

```javascript
export class Produto {
  constructor(nome, categoria, preco, ativo = true, id = null) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.ativo = ativo;
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
      erros.push(`Categoria inválida. Use: ${categoriasValidas.join(", ")}`);
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

  exibirInfo() {
    const status = this.ativo ? "✓" : "✗";
    console.log(`${status} [${this.id}] ${this.nome} - ${this.categoria} - R$ ${this.preco.toFixed(2)}`);
  }
}
```
</details>

---

### ETAPA 3: Configurar o Banco de Dados

**Arquivo:** `src/database/db.js`

```javascript
import Database from 'better-sqlite3';

const db = new Database('restaurante.db');

// Criar tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    categoria TEXT NOT NULL,
    preco REAL NOT NULL,
    ativo INTEGER DEFAULT 1,
    data_criacao TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log('✓ Banco de dados conectado');

export default db;
```

---

### ETAPA 4: Criar o Repository (CRUD)

**Arquivo:** `src/database/produtoRepository.js`

**Funções necessárias:**

1. `inserirProduto(produto)` - Insere no banco, retorna ID
2. `listarProdutos()` - Retorna array com todos os produtos
3. `buscarProdutoPorId(id)` - Retorna produto ou null
4. `atualizarProduto(id, produto)` - Atualiza produto, retorna número de alterações
5. `deletarProduto(id)` - Remove produto, retorna número de alterações

**Estrutura básica:**

```javascript
import db from './db.js';

export function inserirProduto(produto) {
  // TODO: Implementar
}

export function listarProdutos() {
  // TODO: Implementar
}

export function buscarProdutoPorId(id) {
  // TODO: Implementar
}

export function atualizarProduto(id, produto) {
  // TODO: Implementar
}

export function deletarProduto(id) {
  // TODO: Implementar
}
```

**DESAFIO:** Implemente todas as funções usando o que aprendeu no Dia 4!

<details>
<summary>💡 Ver Solução Completa</summary>

```javascript
import db from './db.js';
import { Produto } from '../models/Produto.js';

export function inserirProduto(produto) {
  const stmt = db.prepare(`
    INSERT INTO produtos (nome, categoria, preco, ativo)
    VALUES (?, ?, ?, ?)
  `);

  const result = stmt.run(
    produto.nome,
    produto.categoria,
    produto.preco,
    produto.ativo ? 1 : 0
  );

  return result.lastInsertRowid;
}

export function listarProdutos() {
  const stmt = db.prepare('SELECT * FROM produtos WHERE ativo = 1 ORDER BY categoria, nome');
  const rows = stmt.all();

  // Converter para objetos Produto
  return rows.map(row => new Produto(
    row.nome,
    row.categoria,
    row.preco,
    row.ativo === 1,
    row.id
  ));
}

export function buscarProdutoPorId(id) {
  const stmt = db.prepare('SELECT * FROM produtos WHERE id = ?');
  const row = stmt.get(id);

  if (!row) return null;

  return new Produto(
    row.nome,
    row.categoria,
    row.preco,
    row.ativo === 1,
    row.id
  );
}

export function atualizarProduto(id, produto) {
  const stmt = db.prepare(`
    UPDATE produtos
    SET nome = ?, categoria = ?, preco = ?, ativo = ?
    WHERE id = ?
  `);

  const result = stmt.run(
    produto.nome,
    produto.categoria,
    produto.preco,
    produto.ativo ? 1 : 0,
    id
  );

  return result.changes;
}

export function deletarProduto(id) {
  const stmt = db.prepare('DELETE FROM produtos WHERE id = ?');
  const result = stmt.run(id);
  return result.changes;
}
```
</details>

---

### ETAPA 5: Criar o Menu Interativo

**Arquivo:** `src/index.js`

**Requisitos:**

1. Importar `readline` para ler input do usuário
2. Criar menu com 5 opções
3. Implementar cada funcionalidade usando o repository
4. Loop infinito até usuário escolher "Sair"

**Estrutura básica:**

```javascript
import readline from 'readline';
import { Produto } from './models/Produto.js';
import * as repository from './database/produtoRepository.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function exibirMenu() {
  console.log('\n=== SISTEMA DE GESTÃO - RESTAURANTE ===');
  console.log('1. Adicionar produto');
  console.log('2. Listar produtos');
  console.log('3. Editar produto');
  console.log('4. Deletar produto');
  console.log('5. Sair');
  console.log('');
}

async function adicionarProduto() {
  console.log('\n--- ADICIONAR PRODUTO ---');

  // TODO: Implementar
  // 1. Perguntar nome, categoria, preço
  // 2. Criar objeto Produto
  // 3. Validar
  // 4. Se válido, inserir no banco
  // 5. Se inválido, mostrar erros
}

async function listarProdutos() {
  console.log('\n--- CARDÁPIO ---');

  // TODO: Implementar
  // 1. Buscar todos os produtos
  // 2. Agrupar por categoria
  // 3. Exibir de forma organizada
}

async function editarProduto() {
  console.log('\n--- EDITAR PRODUTO ---');

  // TODO: Implementar
  // 1. Listar produtos
  // 2. Perguntar ID
  // 3. Buscar produto
  // 4. Perguntar novos valores (ou Enter para manter)
  // 5. Validar
  // 6. Atualizar no banco
}

async function deletarProduto() {
  console.log('\n--- DELETAR PRODUTO ---');

  // TODO: Implementar
  // 1. Listar produtos
  // 2. Perguntar ID
  // 3. Confirmar exclusão
  // 4. Deletar do banco
}

async function executar() {
  let continuar = true;

  while (continuar) {
    await exibirMenu();
    const opcao = await pergunta('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        await adicionarProduto();
        break;
      case '2':
        await listarProdutos();
        break;
      case '3':
        await editarProduto();
        break;
      case '4':
        await deletarProduto();
        break;
      case '5':
        console.log('Até logo!');
        continuar = false;
        rl.close();
        break;
      default:
        console.log('Opção inválida!');
    }
  }
}

executar();
```

**DESAFIO:** Complete todas as funções! Use tudo que você aprendeu.

<details>
<summary>💡 Ver Solução - adicionarProduto()</summary>

```javascript
async function adicionarProduto() {
  console.log('\n--- ADICIONAR PRODUTO ---');

  const nome = await pergunta('Nome do produto: ');

  console.log('\nCategorias: Lanches, Bebidas, Sobremesas, Acompanhamentos');
  const categoria = await pergunta('Categoria: ');

  const precoTexto = await pergunta('Preço: R$ ');
  const preco = parseFloat(precoTexto);

  const produto = new Produto(nome, categoria, preco);
  const validacao = produto.validar();

  if (!validacao.valido) {
    console.log('\n❌ Erros encontrados:');
    validacao.erros.forEach(erro => console.log(`  - ${erro}`));
    return;
  }

  const id = repository.inserirProduto(produto);
  console.log(`\n✓ Produto adicionado com sucesso! ID: ${id}`);
}
```
</details>

<details>
<summary>💡 Ver Solução - listarProdutos()</summary>

```javascript
async function listarProdutos() {
  console.log('\n--- CARDÁPIO ---\n');

  const produtos = repository.listarProdutos();

  if (produtos.length === 0) {
    console.log('Nenhum produto cadastrado.');
    return;
  }

  // Agrupar por categoria
  const categorias = {};

  produtos.forEach(produto => {
    if (!categorias[produto.categoria]) {
      categorias[produto.categoria] = [];
    }
    categorias[produto.categoria].push(produto);
  });

  // Exibir por categoria
  for (let categoria in categorias) {
    console.log(`\n📋 ${categoria.toUpperCase()}`);
    console.log('─'.repeat(50));

    categorias[categoria].forEach(produto => {
      produto.exibirInfo();
    });
  }

  console.log(''); // linha em branco
}
```
</details>

<details>
<summary>💡 Ver Solução - editarProduto()</summary>

```javascript
async function editarProduto() {
  console.log('\n--- EDITAR PRODUTO ---');

  await listarProdutos();

  const idTexto = await pergunta('\nDigite o ID do produto: ');
  const id = parseInt(idTexto);

  const produtoAtual = repository.buscarProdutoPorId(id);

  if (!produtoAtual) {
    console.log('❌ Produto não encontrado!');
    return;
  }

  console.log('\nProduto atual:');
  produtoAtual.exibirInfo();
  console.log('\nDeixe em branco para manter o valor atual.\n');

  const nome = await pergunta(`Nome [${produtoAtual.nome}]: `);
  const categoria = await pergunta(`Categoria [${produtoAtual.categoria}]: `);
  const precoTexto = await pergunta(`Preço [${produtoAtual.preco}]: `);

  // Usar valor novo ou manter o atual
  const novoNome = nome.trim() || produtoAtual.nome;
  const novaCategoria = categoria.trim() || produtoAtual.categoria;
  const novoPreco = precoTexto.trim() ? parseFloat(precoTexto) : produtoAtual.preco;

  const produtoNovo = new Produto(novoNome, novaCategoria, novoPreco, true, id);
  const validacao = produtoNovo.validar();

  if (!validacao.valido) {
    console.log('\n❌ Erros encontrados:');
    validacao.erros.forEach(erro => console.log(`  - ${erro}`));
    return;
  }

  repository.atualizarProduto(id, produtoNovo);
  console.log('\n✓ Produto atualizado com sucesso!');
}
```
</details>

<details>
<summary>💡 Ver Solução - deletarProduto()</summary>

```javascript
async function deletarProduto() {
  console.log('\n--- DELETAR PRODUTO ---');

  await listarProdutos();

  const idTexto = await pergunta('\nDigite o ID do produto: ');
  const id = parseInt(idTexto);

  const produto = repository.buscarProdutoPorId(id);

  if (!produto) {
    console.log('❌ Produto não encontrado!');
    return;
  }

  console.log('\nProduto a ser deletado:');
  produto.exibirInfo();

  const confirmacao = await pergunta('\nTem certeza? (s/n): ');

  if (confirmacao.toLowerCase() !== 's') {
    console.log('Operação cancelada.');
    return;
  }

  repository.deletarProduto(id);
  console.log('\n✓ Produto deletado com sucesso!');
}
```
</details>

---

## Testando o Sistema

Execute o projeto:

```bash
node src/index.js
```

**Fluxo de teste:**

1. Adicione 5 produtos (variando as categorias)
2. Liste os produtos
3. Edite um produto
4. Liste novamente para ver a mudança
5. Delete um produto
6. Liste novamente para confirmar

---

## Checklist do Projeto

- [ ] Classe `Produto` criada com todas as validações
- [ ] Banco de dados configurado (`db.js`)
- [ ] Repository com todas as funções CRUD
- [ ] Menu interativo funcionando
- [ ] Adicionar produto funcionando
- [ ] Listar produtos funcionando (agrupado por categoria)
- [ ] Editar produto funcionando
- [ ] Deletar produto funcionando (com confirmação)
- [ ] Validações sendo exibidas corretamente
- [ ] Tratamento de erros (produto não encontrado, etc.)

---

## Desafios Extras

Se terminou tudo e quer melhorar:

### Nível 1 - Básico
1. Adicionar busca por nome
2. Filtrar produtos por categoria
3. Adicionar campo "descrição" no produto
4. Mostrar data de criação ao listar

### Nível 2 - Intermediário
5. Implementar "inativar" produto em vez de deletar
6. Adicionar relatório de produtos por categoria (quantos de cada)
7. Calcular valor médio dos produtos
8. Exportar cardápio para arquivo .txt

### Nível 3 - Avançado
9. Usar biblioteca `chalk` para colorir o terminal
10. Usar biblioteca `inquirer` para menu mais bonito
11. Adicionar paginação na listagem (10 por página)
12. Implementar sistema de múltiplas mesas (cada mesa tem seus pedidos)

---

## Dicas para Apresentação

Quando apresentar o projeto:

1. **Demonstre todas as funcionalidades** (não deixe nada de fora!)
2. **Mostre o código** e explique as partes principais
3. **Teste cenários de erro** (produto não encontrado, validações)
4. **Explique suas escolhas** (por que fez de determinada forma)
5. **Seja honesto** se não conseguiu fazer algo

---

## O que Você Aprendeu Neste Projeto

✅ **Lógica de programação** (if, for, while, funções)
✅ **Estruturas de dados** (arrays, objetos)
✅ **Orientação a Objetos** (classes, métodos, encapsulamento)
✅ **Banco de dados** (SQLite, CRUD)
✅ **Validações** (regras de negócio)
✅ **Organização de código** (separação em módulos)
✅ **Tratamento de erros**
✅ **Input/Output** (readline)
✅ **Async/Await** (promises)

---

## Próximos Passos

Depois de dominar este projeto:

1. **Aprenda TypeScript** (adiciona tipos ao JavaScript)
2. **Estude APIs REST** (criar endpoints HTTP)
3. **Aprenda um framework** (Express, Fastify)
4. **Crie interface web** (HTML/CSS/JavaScript ou React/Svelte)
5. **Deploy** (colocar seu projeto no ar)

---

## Conclusão

**PARABÉNS!** 🎉

Você saiu do **absoluto zero** e criou um **sistema funcional** em apenas 5 dias!

Agora você tem uma base sólida para continuar aprendendo e evoluindo como programador.

**Lembre-se:** Todo programador experiente já foi iniciante. Continue praticando, errando, aprendendo e melhorando!

🚀 **Bons códigos!**

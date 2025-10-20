# Dia 5 - Projeto Final: CRUD de Produtos em SvelteKit

## Objetivo

Criar um sistema completo de gerenciamento de produtos usando SvelteKit, aplicando **TUDO** que você aprendeu.

**IMPORTANTE:** O backend (API + Banco de Dados) já está pronto! Você vai focar apenas no **frontend**.

---

## O que você vai fazer

Criar 3 páginas:

1. **Listagem de produtos** - `/produtos`
2. **Adicionar produto** - `/produtos/novo`
3. **Editar produto** - `/produtos/[id]`

---

## Estrutura do Projeto

```
projeto-final/
├── src/
│   ├── lib/
│   │   ├── database/          ✅ JÁ PRONTO
│   │   │   ├── db.js
│   │   │   └── produtoRepository.js
│   │   └── validations.js     ✅ JÁ PRONTO
│   └── routes/
│       ├── api/               ✅ JÁ PRONTO
│       │   └── produtos/
│       │       ├── +server.js
│       │       └── [id]/+server.js
│       └── produtos/          👈 VOCÊ VAI CRIAR
│           ├── +page.svelte         (Listagem)
│           ├── novo/+page.svelte    (Adicionar)
│           └── [id]/+page.svelte    (Editar)
```

---

## Backend (API) - Já Fornecido

Os endpoints já estão prontos para usar:

### 1. Listar todos os produtos
```javascript
GET /api/produtos

Response: [
  { id: 1, nome: "Pizza", categoria: "Lanches", preco: 35.90, ativo: 1 },
  { id: 2, nome: "Coca-Cola", categoria: "Bebidas", preco: 8.00, ativo: 1 }
]
```

### 2. Criar produto
```javascript
POST /api/produtos
Body: { nome: "Pizza", categoria: "Lanches", preco: 35.90 }

Response: { id: 1, nome: "Pizza", categoria: "Lanches", preco: 35.90, ativo: 1 }
```

### 3. Buscar um produto
```javascript
GET /api/produtos/1

Response: { id: 1, nome: "Pizza", categoria: "Lanches", preco: 35.90, ativo: 1 }
```

### 4. Atualizar produto
```javascript
PUT /api/produtos/1
Body: { nome: "Pizza Grande", categoria: "Lanches", preco: 42.90 }

Response: { id: 1, nome: "Pizza Grande", categoria: "Lanches", preco: 42.90, ativo: 1 }
```

### 5. Deletar produto
```javascript
DELETE /api/produtos/1

Response: { success: true }
```

---

## ETAPA 1: Página de Listagem

**Arquivo:** `src/routes/produtos/+page.svelte`

**Objetivos:**
1. Buscar produtos da API quando a página carregar
2. Exibir em uma tabela
3. Botão "Adicionar Produto" que vai para `/produtos/novo`
4. Botão "Editar" que vai para `/produtos/[id]`
5. Botão "Deletar" que chama a API e atualiza a lista

---

### Estrutura Básica

```svelte
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let produtos = [];
  let carregando = true;
  let erro = null;

  onMount(async () => {
    await carregarProdutos();
  });

  async function carregarProdutos() {
    // TODO: Implementar
  }

  async function deletarProduto(id) {
    // TODO: Implementar
  }

  function irParaAdicionar() {
    goto('/produtos/novo');
  }

  function irParaEditar(id) {
    goto(`/produtos/${id}`);
  }
</script>

<div class="container">
  <h1>Gestão de Produtos</h1>

  <button on:click={irParaAdicionar}>
    + Adicionar Produto
  </button>

  {#if carregando}
    <p>Carregando...</p>
  {:else if erro}
    <p class="erro">{erro}</p>
  {:else if produtos.length === 0}
    <p>Nenhum produto cadastrado.</p>
  {:else}
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {#each produtos as produto}
          <tr>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.categoria}</td>
            <td>R$ {produto.preco.toFixed(2)}</td>
            <td>
              <button on:click={() => irParaEditar(produto.id)}>
                Editar
              </button>
              <button on:click={() => deletarProduto(produto.id)}>
                Deletar
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  button {
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
  }

  .erro {
    color: red;
  }
</style>
```

---

### DESAFIO 1: Implementar `carregarProdutos()`

Complete a função que busca produtos da API:

```javascript
async function carregarProdutos() {
  try {
    carregando = true;
    erro = null;

    // TODO: Fazer fetch para /api/produtos
    // TODO: Converter resposta para JSON
    // TODO: Atribuir resultado a variável produtos

  } catch (e) {
    erro = "Erro ao carregar produtos: " + e.message;
  } finally {
    carregando = false;
  }
}
```

**Tente fazer sozinho!**

<details>
<summary>💡 Ver Solução</summary>

```javascript
async function carregarProdutos() {
  try {
    carregando = true;
    erro = null;

    const response = await fetch('/api/produtos');

    if (!response.ok) {
      throw new Error('Falha ao buscar produtos');
    }

    produtos = await response.json();

  } catch (e) {
    erro = "Erro ao carregar produtos: " + e.message;
  } finally {
    carregando = false;
  }
}
```
</details>

---

### DESAFIO 2: Implementar `deletarProduto(id)`

Complete a função que deleta um produto:

```javascript
async function deletarProduto(id) {
  // TODO: Pedir confirmação ao usuário
  // TODO: Se confirmado, fazer DELETE para /api/produtos/[id]
  // TODO: Se sucesso, recarregar lista
  // TODO: Se erro, mostrar mensagem
}
```

<details>
<summary>💡 Ver Solução</summary>

```javascript
async function deletarProduto(id) {
  const confirmado = confirm('Tem certeza que deseja deletar este produto?');

  if (!confirmado) return;

  try {
    const response = await fetch(`/api/produtos/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Falha ao deletar produto');
    }

    alert('Produto deletado com sucesso!');
    await carregarProdutos(); // Recarrega a lista

  } catch (e) {
    alert('Erro ao deletar: ' + e.message);
  }
}
```
</details>

---

## ETAPA 2: Página de Adicionar

**Arquivo:** `src/routes/produtos/novo/+page.svelte`

**Objetivos:**
1. Criar formulário com campos: nome, categoria, preço
2. Validar campos antes de enviar
3. Enviar POST para API
4. Redirecionar para listagem se sucesso
5. Mostrar erros se houver

---

### Estrutura Básica

```svelte
<script>
  import { goto } from '$app/navigation';

  let nome = '';
  let categoria = 'Lanches';
  let preco = '';
  let erros = [];
  let salvando = false;

  const categoriasDisponiveis = [
    'Lanches',
    'Bebidas',
    'Sobremesas',
    'Acompanhamentos'
  ];

  function validarFormulario() {
    erros = [];

    // TODO: Implementar validações
    // 1. Nome não pode ser vazio e deve ter pelo menos 3 caracteres
    // 2. Categoria deve estar na lista
    // 3. Preço deve ser maior que 0

    return erros.length === 0;
  }

  async function salvar() {
    // TODO: Implementar
  }

  function cancelar() {
    goto('/produtos');
  }
</script>

<div class="container">
  <h1>Adicionar Produto</h1>

  <form on:submit|preventDefault={salvar}>
    <div class="campo">
      <label for="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        bind:value={nome}
        placeholder="Ex: Pizza Marguerita"
      />
    </div>

    <div class="campo">
      <label for="categoria">Categoria:</label>
      <select id="categoria" bind:value={categoria}>
        {#each categoriasDisponiveis as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
    </div>

    <div class="campo">
      <label for="preco">Preço:</label>
      <input
        type="number"
        id="preco"
        bind:value={preco}
        step="0.01"
        placeholder="Ex: 35.90"
      />
    </div>

    {#if erros.length > 0}
      <div class="erros">
        <p><strong>Erros encontrados:</strong></p>
        <ul>
          {#each erros as erro}
            <li>{erro}</li>
          {/each}
        </ul>
      </div>
    {/if}

    <div class="acoes">
      <button type="button" on:click={cancelar}>
        Cancelar
      </button>
      <button type="submit" disabled={salvando}>
        {salvando ? 'Salvando...' : 'Salvar'}
      </button>
    </div>
  </form>
</div>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .campo {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
  }

  input, select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }

  .erros {
    background-color: #ffebee;
    border: 1px solid #f44336;
    padding: 12px;
    margin-bottom: 16px;
    border-radius: 4px;
  }

  .erros ul {
    margin: 8px 0 0 0;
    padding-left: 20px;
  }

  .acoes {
    display: flex;
    gap: 8px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    border: none;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
```

---

### DESAFIO 3: Implementar `validarFormulario()`

Complete a validação:

<details>
<summary>💡 Ver Solução</summary>

```javascript
function validarFormulario() {
  erros = [];

  // Validar nome
  if (!nome || nome.trim().length === 0) {
    erros.push('Nome é obrigatório');
  } else if (nome.trim().length < 3) {
    erros.push('Nome deve ter pelo menos 3 caracteres');
  }

  // Validar categoria
  if (!categoriasDisponiveis.includes(categoria)) {
    erros.push('Categoria inválida');
  }

  // Validar preço
  const precoNumero = parseFloat(preco);
  if (isNaN(precoNumero) || precoNumero <= 0) {
    erros.push('Preço deve ser maior que zero');
  }

  return erros.length === 0;
}
```
</details>

---

### DESAFIO 4: Implementar `salvar()`

Complete a função de salvar:

<details>
<summary>💡 Ver Solução</summary>

```javascript
async function salvar() {
  if (!validarFormulario()) {
    return;
  }

  try {
    salvando = true;

    const response = await fetch('/api/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome.trim(),
        categoria: categoria,
        preco: parseFloat(preco)
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao salvar produto');
    }

    alert('Produto adicionado com sucesso!');
    goto('/produtos');

  } catch (e) {
    erros = [e.message];
  } finally {
    salvando = false;
  }
}
```
</details>

---

## ETAPA 3: Página de Editar

**Arquivo:** `src/routes/produtos/[id]/+page.svelte`

**Objetivos:**
1. Buscar produto específico da API
2. Preencher formulário com dados atuais
3. Validar alterações
4. Enviar PUT para API
5. Redirecionar para listagem se sucesso

---

### Estrutura Básica

```svelte
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let id = $page.params.id;

  let nome = '';
  let categoria = 'Lanches';
  let preco = '';
  let erros = [];
  let carregando = true;
  let salvando = false;

  const categoriasDisponiveis = [
    'Lanches',
    'Bebidas',
    'Sobremesas',
    'Acompanhamentos'
  ];

  onMount(async () => {
    await carregarProduto();
  });

  async function carregarProduto() {
    // TODO: Implementar busca do produto
  }

  function validarFormulario() {
    // TODO: Mesma validação da página de adicionar
    return true;
  }

  async function salvar() {
    // TODO: Implementar atualização
  }

  function cancelar() {
    goto('/produtos');
  }
</script>

{#if carregando}
  <div class="container">
    <p>Carregando...</p>
  </div>
{:else}
  <div class="container">
    <h1>Editar Produto</h1>

    <form on:submit|preventDefault={salvar}>
      <div class="campo">
        <label for="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          bind:value={nome}
        />
      </div>

      <div class="campo">
        <label for="categoria">Categoria:</label>
        <select id="categoria" bind:value={categoria}>
          {#each categoriasDisponiveis as cat}
            <option value={cat}>{cat}</option>
          {/each}
        </select>
      </div>

      <div class="campo">
        <label for="preco">Preço:</label>
        <input
          type="number"
          id="preco"
          bind:value={preco}
          step="0.01"
        />
      </div>

      {#if erros.length > 0}
        <div class="erros">
          <p><strong>Erros encontrados:</strong></p>
          <ul>
            {#each erros as erro}
              <li>{erro}</li>
            {/each}
          </ul>
        </div>
      {/if}

      <div class="acoes">
        <button type="button" on:click={cancelar}>
          Cancelar
        </button>
        <button type="submit" disabled={salvando}>
          {salvando ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </div>
    </form>
  </div>
{/if}

<style>
  /* Mesmo CSS da página de adicionar */
</style>
```

---

### DESAFIO 5: Implementar `carregarProduto()`

<details>
<summary>💡 Ver Solução</summary>

```javascript
async function carregarProduto() {
  try {
    carregando = true;

    const response = await fetch(`/api/produtos/${id}`);

    if (!response.ok) {
      throw new Error('Produto não encontrado');
    }

    const produto = await response.json();

    nome = produto.nome;
    categoria = produto.categoria;
    preco = produto.preco.toString();

  } catch (e) {
    alert('Erro ao carregar produto: ' + e.message);
    goto('/produtos');
  } finally {
    carregando = false;
  }
}
```
</details>

---

### DESAFIO 6: Implementar `salvar()` para edição

<details>
<summary>💡 Ver Solução</summary>

```javascript
async function salvar() {
  if (!validarFormulario()) {
    return;
  }

  try {
    salvando = true;

    const response = await fetch(`/api/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome.trim(),
        categoria: categoria,
        preco: parseFloat(preco)
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao atualizar produto');
    }

    alert('Produto atualizado com sucesso!');
    goto('/produtos');

  } catch (e) {
    erros = [e.message];
  } finally {
    salvando = false;
  }
}
```
</details>

---

## Checklist do Projeto

### Página de Listagem
- [ ] Busca produtos da API no `onMount`
- [ ] Exibe produtos em tabela
- [ ] Botão "Adicionar" redireciona para `/produtos/novo`
- [ ] Botão "Editar" redireciona para `/produtos/[id]`
- [ ] Botão "Deletar" pede confirmação e chama API DELETE
- [ ] Mostra loading enquanto carrega
- [ ] Mostra mensagem se lista vazia
- [ ] Trata erros da API

### Página de Adicionar
- [ ] Formulário com 3 campos (nome, categoria, preço)
- [ ] Select com categorias corretas
- [ ] Valida nome (mínimo 3 caracteres)
- [ ] Valida preço (maior que 0)
- [ ] Exibe erros de validação
- [ ] Envia POST para `/api/produtos`
- [ ] Redireciona para listagem após sucesso
- [ ] Botão "Cancelar" volta para listagem

### Página de Editar
- [ ] Busca produto por ID no `onMount`
- [ ] Preenche formulário com dados atuais
- [ ] Mesmas validações da página de adicionar
- [ ] Envia PUT para `/api/produtos/[id]`
- [ ] Redireciona para listagem após sucesso
- [ ] Trata caso produto não exista

---

## Testando o Sistema Completo

1. **Adicionar 3 produtos:**
   - Pizza Marguerita - Lanches - R$ 35,90
   - Coca-Cola 2L - Bebidas - R$ 8,00
   - Brownie - Sobremesas - R$ 12,00

2. **Listar produtos** - verificar se todos aparecem

3. **Editar** "Pizza Marguerita" para "Pizza Marguerita Grande" - R$ 42,90

4. **Deletar** "Brownie" - confirmar exclusão

5. **Listar novamente** - verificar se mudanças foram aplicadas

---

## Melhorias Opcionais

Se terminou tudo:

### Nível 1 - UI/UX
1. Adicionar mensagens de sucesso (toast)
2. Melhorar CSS (cores, espaçamentos)
3. Adicionar ícones nos botões
4. Fazer tabela responsiva (mobile)

### Nível 2 - Funcionalidades
5. Adicionar busca por nome
6. Adicionar filtro por categoria
7. Ordenar tabela por coluna (clique no cabeçalho)
8. Paginação (10 produtos por página)

### Nível 3 - Avançado
9. Usar stores do Svelte para gerenciar estado
10. Criar componente reutilizável para formulário
11. Adicionar loading skeleton na tabela
12. Implementar undo após deletar

---

## Resumo - O que Você Aplicou

✅ **Lógica de programação** (if, for, validações)
✅ **Funções** (async/await, fetch)
✅ **Arrays** (each loop, map)
✅ **Objetos** (manipulação de dados)
✅ **Eventos** (on:click, on:submit)
✅ **Bind** (two-way data binding)
✅ **Condicionais** ({#if}, {:else})
✅ **Loops** ({#each})
✅ **Navegação** (goto, $page.params)
✅ **API REST** (GET, POST, PUT, DELETE)
✅ **Validações** (frontend)

---

## Conclusão

**PARABÉNS!** 🎉

Você criou um **CRUD completo** em SvelteKit, aplicando tudo que aprendeu nos 5 dias!

Agora você tem:
- Base sólida em JavaScript
- Conhecimento de lógica de programação
- Experiência com frameworks modernos
- Capacidade de consumir APIs REST

**Próximo passo:** Continue praticando e expandindo este projeto!

🚀 **Bons códigos!**

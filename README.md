# Projeto do Zero - 5 Dias de Programação

**Programa de treinamento intensivo para iniciantes em programação**

## Objetivo

Ensinar os fundamentos de programação do zero em 5 dias, culminando em um projeto prático simples.

## Estrutura do Curso

### **Dia 1** - Lógica de Programação
- Variáveis e tipos de dados
- Operadores matemáticos e lógicos
- Condicionais (if/else)
- Laços de repetição (for, while)
- Funções básicas

**Projeto do dia:** Calculadora de compras

---

### **Dia 2** - Trabalhando com Dados
- Arrays (listas)
- Objetos
- Manipulação de arrays (map, filter, forEach)
- Funções avançadas
- Organização de código

**Projeto do dia:** Sistema de carrinho de compras

---

### **Dia 3** - Orientação a Objetos
- Classes e Objetos
- Propriedades e Métodos
- Construtores
- Validações básicas
- Encapsulamento

**Projeto do dia:** Classe de Produto com validações

---

### **Dia 4** - APIs REST e Testes
- O que é uma API REST
- Métodos HTTP (GET, POST, PUT, DELETE)
- Formato JSON
- **Testando APIs com Postman ou Bruno**
- Consumindo APIs com `fetch`
- Tratamento de erros

**Projeto do dia:** Cliente HTML consumindo API REST

---

### **Dia 5** - Projeto Final
**Sistema de Gestão de Produtos para Restaurante (SvelteKit)**

Um projeto simples mas completo que utiliza tudo que foi aprendido:
- Listar produtos cadastrados
- Adicionar novo produto (prato/bebida)
- Editar produto existente
- Deletar produto
- Backend (API + Banco SQLite) já fornecido pronto

---

## Por que este projeto?

O projeto de **Gestão de Produtos para Restaurante** é ideal para iniciantes porque:

✅ É **relevante** para o contexto de trabalho (sistema de gestão de restaurante)
✅ Usa **todos os conceitos** aprendidos (lógica, arrays, objetos, funções)
✅ É **prático** e aplicável no dia a dia
✅ **Backend já está pronto** - foco total no frontend e lógica
✅ Interface web simples com **SvelteKit** (framework que eles já usam)

---

## Estrutura de Arquivos

```
projetog/
├── README.md (este arquivo)
├── aulas/
│   ├── dia1-logica.md                  ✅ PRONTO
│   ├── dia2-dados.md                   ✅ PRONTO
│   ├── dia3-orientacao-objetos.md      ✅ PRONTO
│   ├── dia4-apis-rest.md               ✅ PRONTO (com Postman/Bruno)
│   ├── dia5-projeto-final.md           📝 Antigo (CLI)
│   └── dia5-projeto-final-sveltekit.md ✅ PRONTO (Web)
├── exercicios/
│   ├── dia1/
│   ├── dia2/
│   ├── dia3/
│   ├── dia4/
│   └── dia5/
├── projeto-final-backend/      ✅ BACKEND PRONTO (Express + SQLite)
│   ├── src/
│   │   ├── database/
│   │   │   ├── db.js
│   │   │   └── produtoRepository.js
│   │   ├── routes/
│   │   │   └── produtos.js     (API REST completa)
│   │   ├── validations.js
│   │   ├── server.js
│   │   └── seed.js
│   ├── package.json
│   ├── README.md
│   └── GUIA_RAPIDO.md
└── projeto-final-frontend/     📝 ESTAGIÁRIO CRIA (SvelteKit)
    └── src/routes/produtos/
        ├── +page.svelte         (Listagem)
        ├── novo/+page.svelte    (Adicionar)
        └── [id]/+page.svelte    (Editar)
```

---

## Requisitos

- Node.js instalado
- Editor de código (VS Code recomendado)
- Terminal/Prompt de comando

---

## Início Rápido

### Para o Instrutor

1. Clone este repositório
2. Configure o backend antes de começar o Dia 5:

```bash
cd projeto-final-backend
npm install
npm run seed  # Popula o banco com 20 produtos de exemplo
npm run dev   # Inicia o servidor na porta 3000
```

3. Siga as aulas em ordem com o estagiário (dia1-logica.md, dia2-dados.md, etc.)

### Para o Estagiário

1. Dias 1-4: Faça TODOS os exercícios (não pule!)
2. Dia 5:
   - Backend já está rodando (não precisa mexer!)
   - Crie o frontend em SvelteKit
   - Consuma a API em `http://localhost:3000/api/produtos`

---

## Projeto Final - Especificação Simplificada

### Sistema de Gestão de Produtos para Restaurante (SvelteKit)

**O que o estagiário vai fazer:**

Criar 3 páginas em SvelteKit para gerenciar produtos:

1. **Página de Listagem** (`/produtos`)
   - Buscar produtos da API
   - Exibir em tabela
   - Botão "Adicionar Produto"
   - Botões "Editar" e "Deletar" em cada linha

2. **Página de Adicionar** (`/produtos/novo`)
   - Formulário com campos: nome, categoria, preço
   - Validações no frontend
   - Enviar POST para API
   - Redirecionar para listagem após sucesso

3. **Página de Editar** (`/produtos/[id]`)
   - Buscar produto específico da API
   - Formulário preenchido com dados atuais
   - Validações no frontend
   - Enviar PUT para API
   - Redirecionar para listagem após sucesso

**Backend (já fornecido):**

- API REST completa
- Banco de dados SQLite configurado
- Endpoints prontos:
  - `GET /api/produtos` - listar todos
  - `POST /api/produtos` - criar novo
  - `GET /api/produtos/[id]` - buscar um
  - `PUT /api/produtos/[id]` - atualizar
  - `DELETE /api/produtos/[id]` - deletar

---

### Estrutura da Tabela (Banco de Dados)

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

**Categorias:** Lanches, Bebidas, Sobremesas, Acompanhamentos

---

### Endpoints da API (Backend Pronto)

```javascript
// Listar todos os produtos
GET /api/produtos
Response: [{ id, nome, categoria, preco, ativo }, ...]

// Criar produto
POST /api/produtos
Body: { nome, categoria, preco }
Response: { id, nome, categoria, preco, ativo }

// Buscar um produto
GET /api/produtos/1
Response: { id, nome, categoria, preco, ativo }

// Atualizar produto
PUT /api/produtos/1
Body: { nome, categoria, preco }
Response: { id, nome, categoria, preco, ativo }

// Deletar produto
DELETE /api/produtos/1
Response: { success: true }
```

---

### Exemplo Visual (Interface Web)

**Página de Listagem:**
```
╔═══════════════════════════════════════════════════╗
║     SISTEMA DE GESTÃO - RESTAURANTE               ║
╠═══════════════════════════════════════════════════╣
║  [+ Adicionar Produto]                            ║
║                                                   ║
║  ID | Nome              | Categoria | Preço      ║
║  ---|-------------------|-----------|--------     ║
║  1  | Pizza Marguerita  | Lanches   | R$ 35,90   ║
║     [Editar] [Deletar]                            ║
║                                                   ║
║  2  | Coca-Cola 2L      | Bebidas   | R$ 8,00    ║
║     [Editar] [Deletar]                            ║
╚═══════════════════════════════════════════════════╝
```

**Página de Adicionar/Editar:**
```
╔═══════════════════════════════════════════════════╗
║     ADICIONAR PRODUTO                             ║
╠═══════════════════════════════════════════════════╣
║  Nome: [___________________________]              ║
║                                                   ║
║  Categoria: [ ▼ ]                                 ║
║             • Lanches                             ║
║             • Bebidas                             ║
║             • Sobremesas                          ║
║             • Acompanhamentos                     ║
║                                                   ║
║  Preço: R$ [_______]                              ║
║                                                   ║
║  [Cancelar]  [Salvar]                             ║
╚═══════════════════════════════════════════════════╝
```

---

## Critérios de Avaliação do Projeto Final

O estagiário deve conseguir:

### Frontend (O que ele vai fazer)
- [ ] Criar página de listagem (`/produtos`)
- [ ] Buscar produtos da API usando `fetch`
- [ ] Exibir produtos em tabela HTML
- [ ] Criar página de adicionar (`/produtos/novo`)
- [ ] Criar formulário com validações frontend
- [ ] Enviar POST para API ao salvar
- [ ] Criar página de editar (`/produtos/[id]`)
- [ ] Buscar produto específico e preencher formulário
- [ ] Enviar PUT para API ao atualizar
- [ ] Implementar exclusão com confirmação
- [ ] Redirecionar após sucesso/erro
- [ ] Exibir mensagens de erro/sucesso

### Backend (Já fornecido pronto)
- ✅ API REST completa
- ✅ Banco de dados SQLite configurado
- ✅ CRUD completo no repository
- ✅ Validações no servidor

---

## Diferenças do Projeto Anterior

**Antes:** Sistema de gerenciamento de produtos com interface web completa
**Agora:** Sistema de gestão de produtos no terminal (CLI)

### Por que mudamos?

| Aspecto | Projeto Anterior | Projeto Novo |
|---------|-----------------|--------------|
| **Complexidade** | Alta (10+ campos, múltiplas telas) | Baixa (3-4 campos, terminal) |
| **Interface** | Web (HTML/CSS/Svelte) | Terminal (mais fácil) |
| **Foco** | Interface + Backend | Apenas lógica e backend |
| **Tempo** | 3-4 dias para iniciante | 1 dia realista |
| **Conceitos extras** | Routing, componentes, formulários | Apenas o essencial |
| **Contexto** | Genérico | Específico para restaurante |

---

## Próximos Passos (Após o Projeto)

Depois de dominar a lista de tarefas, o estagiário pode:

1. **Adicionar funcionalidades:**
   - Categorias (trabalho, pessoal, estudos)
   - Prioridades (alta, média, baixa)
   - Datas de vencimento
   - Filtros e buscas

2. **Melhorar a interface:**
   - Usar biblioteca como `inquirer` para menu mais bonito
   - Adicionar cores com `chalk`

3. **Criar interface web:**
   - Migrar para Svelte/React
   - Criar API REST
   - Separar frontend e backend

4. **Estudar conceitos avançados:**
   - TypeScript
   - Testes automatizados
   - Autenticação
   - Deploy

---

## Dicas para o Instrutor

1. **Dia 1-2:** Foque em fazer MUITOS exercícios pequenos
2. **Dia 3:** Certifique-se que o estagiário entende classes
3. **Dia 4:** Pratique CRUD várias vezes até ficar automático
4. **Dia 5:** Deixe o estagiário tentar sozinho primeiro, depois ajude

---

## Materiais de Apoio

- [Documentação JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Better-SQLite3 Docs](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)
- [Node.js Docs](https://nodejs.org/docs/latest/api/)

---

## Contato e Suporte

Se o estagiário tiver dúvidas ou dificuldades, incentive:
1. Tentar resolver sozinho primeiro (Google, documentação)
2. Revisar a aula do dia correspondente
3. Refazer os exercícios do dia
4. Perguntar ao instrutor

---

**Lembre-se:** O objetivo não é fazer o projeto perfeito, mas **APRENDER** os fundamentos. Errar faz parte do processo!

🚀 Bons estudos!
# projetog

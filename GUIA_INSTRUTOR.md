# Guia do Instrutor - Projeto do Zero

## Visão Geral

Programa de treinamento intensivo de **5 dias** para ensinar programação do zero para estagiários.

---

## Estrutura Completa

### ✅ Dia 1 - Lógica de Programação
**Arquivo:** `aulas/dia1-logica.md`

**Conteúdo:**
- Variáveis e tipos de dados
- Operadores matemáticos e lógicos
- Condicionais (if/else)
- Laços de repetição (for, while)
- Funções básicas

**Projeto do dia:** Calculadora de compras com descontos

**Duração estimada:** 6-8 horas

---

### ✅ Dia 2 - Trabalhando com Dados
**Arquivo:** `aulas/dia2-dados.md`

**Conteúdo:**
- Arrays (criar, acessar, modificar)
- Métodos de array (map, filter, find, forEach)
- Objetos (propriedades e métodos)
- Arrays de objetos
- Desestruturação
- Spread operator

**Projeto do dia:** Sistema de pedidos de restaurante

**Duração estimada:** 6-8 horas

---

### ✅ Dia 3 - Orientação a Objetos
**Arquivo:** `aulas/dia3-orientacao-objetos.md`

**Conteúdo:**
- O que é POO
- Classes e objetos
- Construtores
- Propriedades e métodos
- Validações em classes
- Herança básica

**Projeto do dia:** Sistema de gestão de produtos com POO

**Duração estimada:** 6-8 horas

---

### ✅ Dia 4 - APIs REST e Testes
**Arquivo:** `aulas/dia4-apis-rest.md`

**Conteúdo:**
- O que é uma API REST
- Métodos HTTP (GET, POST, PUT, DELETE)
- Formato JSON
- **Testando APIs com Postman ou Bruno** ⭐
- Consumindo APIs com `fetch`
- Tratamento de erros (try/catch)

**Projeto do dia:** Cliente HTML consumindo API REST

**Duração estimada:** 6-8 horas

**IMPORTANTE:** Configure o backend antes de começar:
```bash
cd projeto-final-backend
npm install
npm run seed
npm run dev
```

---

### ✅ Dia 5 - Projeto Final
**Arquivo:** `aulas/dia5-projeto-final-sveltekit.md`

**Conteúdo:**
- CRUD completo em SvelteKit
- 3 páginas: Listagem, Adicionar, Editar
- Consumir API REST criada
- Validações frontend
- Navegação entre páginas

**Projeto:** Sistema de Gestão de Produtos para Restaurante

**Duração estimada:** 8 horas (dia inteiro)

---

## Configuração do Backend (DIA 4 e 5)

### Passo 1: Instalar

```bash
cd projeto-final-backend
npm install
```

### Passo 2: Popular Banco (Opcional)

```bash
npm run seed
```

Isso cria 20 produtos de exemplo no banco.

### Passo 3: Iniciar Servidor

```bash
npm run dev
```

Servidor rodará em: `http://localhost:3000`

### Passo 4: Testar

Abra o navegador: `http://localhost:3000`

Você deve ver informações da API.

---

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Listar todos |
| GET | `/api/produtos/:id` | Buscar um |
| POST | `/api/produtos` | Criar novo |
| PUT | `/api/produtos/:id` | Atualizar |
| DELETE | `/api/produtos/:id` | Deletar |

---

## Ferramentas Necessárias

### Para o Instrutor

- [ ] Node.js 18+ instalado
- [ ] VSCode ou editor de código
- [ ] Postman ou Bruno (para demonstrar)
- [ ] Navegador moderno (Chrome/Firefox)

### Para o Estagiário

- [ ] Node.js 18+ instalado
- [ ] VSCode ou editor de código
- [ ] Postman ou Bruno (instalar no Dia 4)
- [ ] Navegador moderno

---

## Dicas de Ensino

### Dia 1-2: Fundamentos
- **Incentive tentativas:** Deixe errar antes de mostrar solução
- **Exercícios práticos:** Faça TODOS os exercícios com o estagiário
- **Debugging:** Ensine a usar `console.log()` desde o início

### Dia 3: POO
- **Analogias:** Use exemplos do mundo real (carro, conta bancária)
- **Validações:** Reforce a importância de validar dados
- **Refatoração:** Mostre como POO organiza melhor o código

### Dia 4: APIs REST
- **Postman/Bruno:** Dedique tempo para ensinar a ferramenta
- **Teste todos os endpoints:** Mostre cada método HTTP funcionando
- **Erros:** Mostre erros propositais (dados inválidos, 404, etc)
- **DevTools:** Ensine a usar Network tab do navegador

### Dia 5: Projeto Final
- **Deixe trabalhar sozinho:** Só ajude quando travar
- **Checklist:** Use a lista de tarefas da aula
- **Incremental:** Faça página por página, não tudo de uma vez
- **Teste constante:** Rode no navegador a cada mudança

---

## Checklist de Preparação

### Antes de Começar

- [ ] Clonar/baixar o repositório
- [ ] Ler todos os arquivos de aula
- [ ] Testar todos os códigos de exemplo
- [ ] Instalar backend e testar API
- [ ] Instalar Postman ou Bruno
- [ ] Preparar ambiente para o estagiário

### Dia 4 (Crítico)

- [ ] Backend instalado (`npm install`)
- [ ] Banco populado (`npm run seed`)
- [ ] Servidor rodando (`npm run dev`)
- [ ] Testou todos endpoints no Postman
- [ ] Verificou que CORS está funcionando

### Dia 5 (Projeto Final)

- [ ] Backend ainda rodando
- [ ] Estagiário tem SvelteKit instalado
- [ ] Revisou endpoints da API
- [ ] Tem checklist do projeto impresso/visível

---

## Critérios de Avaliação

### Conhecimentos Técnicos (70%)

**Dia 1-2: Fundamentos (20%)**
- [ ] Usa variáveis corretamente
- [ ] Entende condicionais (if/else)
- [ ] Consegue usar loops (for, forEach)
- [ ] Cria funções simples
- [ ] Manipula arrays e objetos

**Dia 3: POO (20%)**
- [ ] Cria classes com construtor
- [ ] Implementa métodos
- [ ] Adiciona validações
- [ ] Entende `this`

**Dia 4: APIs (15%)**
- [ ] Entende conceito de API REST
- [ ] Conhece métodos HTTP
- [ ] Usa Postman/Bruno
- [ ] Faz requisições com `fetch`
- [ ] Trata erros básicos

**Dia 5: Projeto Final (15%)**
- [ ] Cria as 3 páginas
- [ ] Consume API corretamente
- [ ] Validações funcionam
- [ ] CRUD completo operacional

### Autonomia (20%)

- [ ] Tenta resolver antes de pedir ajuda
- [ ] Pesquisa erros no Google
- [ ] Usa `console.log()` para debugar
- [ ] Faz perguntas específicas (não genéricas)

### Atitude (10%)

- [ ] Proativo
- [ ] Faz todos os exercícios
- [ ] Não desiste quando trava
- [ ] Colaborativo

---

## Problemas Comuns e Soluções

### Problema 1: "fetch is not defined"
**Causa:** Node.js antigo
**Solução:** Atualizar para Node 18+

### Problema 2: CORS Error
**Causa:** Backend não está com CORS habilitado
**Solução:** Já está resolvido no backend fornecido

### Problema 3: "Cannot GET /api/produtos"
**Causa:** Backend não está rodando
**Solução:** `npm run dev` na pasta do backend

### Problema 4: Banco de dados vazio
**Causa:** Não rodou o seed
**Solução:** `npm run seed`

### Problema 5: Porta 3000 ocupada
**Causa:** Outro processo usando a porta
**Solução:** Matar processo ou mudar porta no `server.js`

---

## Materiais de Apoio

### Documentação Online

- [MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Postman Learning](https://learning.postman.com/)
- [Bruno Docs](https://docs.usebruno.com/)
- [SvelteKit Docs](https://kit.svelte.dev/docs)

### Recursos Extras

- `projeto-final-backend/README.md` - Documentação da API
- `projeto-final-backend/GUIA_RAPIDO.md` - Guia rápido da API
- Cada aula tem exercícios com soluções

---

## Cronograma Sugerido

### Dia 1 (8h)
- 09:00-10:30 - Introdução e variáveis
- 10:30-12:00 - Operadores e condicionais
- 12:00-13:00 - Almoço
- 13:00-14:30 - Laços de repetição
- 14:30-16:00 - Funções
- 16:00-17:30 - Projeto do dia

### Dia 2-3 (8h cada)
- Similar ao Dia 1
- Mais tempo para exercícios práticos

### Dia 4 (8h)
- 09:00-10:30 - Teoria de APIs REST
- 10:30-12:00 - **Instalar e usar Postman/Bruno**
- 12:00-13:00 - Almoço
- 13:00-15:00 - **Testar todos os endpoints**
- 15:00-17:30 - Consumir API com fetch

### Dia 5 (8h)
- 09:00-09:30 - Revisão da API
- 09:30-12:00 - Desenvolvimento (página listagem)
- 12:00-13:00 - Almoço
- 13:00-17:00 - Desenvolvimento (páginas add/edit)
- 17:00-17:30 - Testes finais e apresentação

---

## Feedback e Próximos Passos

Após os 5 dias:

### Se foi bem:
- TypeScript
- Testes automatizados
- Autenticação (JWT)
- Deploy (Vercel, Netlify)

### Se teve dificuldades:
- Revisar fundamentos (Dias 1-2)
- Fazer mais exercícios práticos
- Projetos guiados extras

---

## Contato e Suporte

Para dúvidas ou melhorias neste material, abra uma issue no GitHub ou entre em contato com o time de treinamento.

**Boa sorte com o treinamento!** 🚀

# Como Rodar a API

Este guia ensina como executar a API do projeto usando comandos de terminal, explicando cada comando em detalhes.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- Node.js (versão 14 ou superior)
- npm (Node Package Manager - geralmente vem com o Node.js)

## Passo a Passo

### 1. Navegando até a pasta do projeto

```bash
cd /caminho/para/projetog
```

**O que significa `cd`?**
- `cd` significa "Change Directory" (Mudar Diretório)
- É o comando usado para navegar entre pastas no terminal
- Exemplo: `cd Documents` entra na pasta Documents
- Dica: `cd ..` volta para a pasta anterior (pasta pai)

### 2. Instalando as dependências (primeira vez)

```bash
npm install
```

**O que significa `npm install`?**
- `npm` = Node Package Manager (Gerenciador de Pacotes do Node)
- `install` = comando para instalar pacotes
- Este comando lê o arquivo `package.json` e instala todas as bibliotecas e dependências necessárias para o projeto funcionar
- Cria a pasta `node_modules` com todos os pacotes instalados
- Você só precisa executar isso uma vez, ou quando novas dependências forem adicionadas ao projeto

### 3. Rodando a API em modo de desenvolvimento

```bash
npm run dev
```

**O que significa `npm run dev`?**
- `npm` = Node Package Manager
- `run` = comando para executar scripts personalizados definidos no `package.json`
- `dev` = nome do script de desenvolvimento (definido na seção "scripts" do package.json)
- Geralmente este comando:
  - Inicia o servidor de desenvolvimento
  - Ativa o "hot reload" (reinicia automaticamente quando você altera o código)
  - Roda a aplicação em modo de desenvolvimento (com mais logs e ferramentas de debug)

### 4. Parando a execução da API

Para parar o servidor, pressione:
```
Ctrl + C
```
(no Windows, Mac e Linux)

## Outros Comandos Úteis

### Verificar a versão do Node

```bash
node --version
```
ou
```bash
node -v
```

**O que significa?**
- Mostra qual versão do Node.js está instalada no seu computador

### Verificar a versão do npm

```bash
npm --version
```
ou
```bash
npm -v
```

**O que significa?**
- Mostra qual versão do npm está instalada no seu computador

### Listar arquivos e pastas

```bash
ls
```
(Mac/Linux)

```bash
dir
```
(Windows)

**O que significa?**
- Lista todos os arquivos e pastas no diretório atual
- Útil para verificar se você está na pasta correta

### Ver o caminho completo da pasta atual

```bash
pwd
```
(Mac/Linux - Print Working Directory)

```bash
cd
```
(Windows - sem argumentos)

**O que significa?**
- Mostra o caminho completo da pasta onde você está no momento

## Scripts Comuns em Projetos Node.js

Embora dependam do que está configurado no `package.json`, aqui estão alguns scripts comuns:

### Iniciar em modo de produção
```bash
npm start
```
- Inicia a aplicação em modo de produção (sem hot reload)

### Executar testes
```bash
npm test
```
ou
```bash
npm run test
```
- Executa os testes automatizados do projeto

### Fazer build do projeto
```bash
npm run build
```
- Compila/prepara o projeto para produção

## Solução de Problemas

### Erro: "command not found: npm"
- O Node.js/npm não está instalado ou não está no PATH do sistema
- Solução: Instale o Node.js de https://nodejs.org/

### Erro: "Cannot find module"
- As dependências não foram instaladas
- Solução: Execute `npm install`

### Porta já em uso
- Outro processo já está usando a porta da API
- Solução: Pare o outro processo ou configure uma porta diferente

### Permissão negada
- Você não tem permissão para executar o comando
- Solução (Mac/Linux): Tente com `sudo npm install` (use com cuidado!)

## Dicas Adicionais

1. **Auto-completar**: Pressione `Tab` enquanto digita um caminho para auto-completar
2. **Histórico**: Use as setas ↑ e ↓ para navegar pelos comandos anteriores
3. **Limpar terminal**: Digite `clear` (Mac/Linux) ou `cls` (Windows)
4. **Abrir pasta no explorer**:
   - Mac: `open .`
   - Windows: `explorer .`
   - Linux: `xdg-open .`

## Resumo Rápido

```bash
# 1. Navegar até a pasta do projeto
cd /caminho/para/projetog

# 2. Instalar dependências (primeira vez)
npm install

# 3. Rodar a API
npm run dev

# 4. Para parar: Ctrl + C
```

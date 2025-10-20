import Database from 'better-sqlite3';

// Criar/conectar ao banco de dados
const db = new Database('restaurante.db');

// Criar tabela de produtos se não existir
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

console.log('✅ Banco de dados conectado e tabela criada');

export default db;

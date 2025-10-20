import db from './db.js';

/**
 * Repository para operações CRUD de produtos
 */

// CREATE - Inserir novo produto
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

// READ - Listar todos os produtos ativos
export function listarProdutos() {
  const stmt = db.prepare(`
    SELECT * FROM produtos
    WHERE ativo = 1
    ORDER BY categoria, nome
  `);

  return stmt.all();
}

// READ - Buscar produto por ID
export function buscarProdutoPorId(id) {
  const stmt = db.prepare('SELECT * FROM produtos WHERE id = ?');
  return stmt.get(id);
}

// UPDATE - Atualizar produto
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

// DELETE - Deletar produto
export function deletarProduto(id) {
  const stmt = db.prepare('DELETE FROM produtos WHERE id = ?');
  const result = stmt.run(id);
  return result.changes;
}

// DELETE (Soft) - Inativar produto
export function inativarProduto(id) {
  const stmt = db.prepare('UPDATE produtos SET ativo = 0 WHERE id = ?');
  const result = stmt.run(id);
  return result.changes;
}

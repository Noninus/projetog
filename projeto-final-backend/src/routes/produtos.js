import express from 'express';
import * as repository from '../database/produtoRepository.js';
import { validarProduto } from '../validations.js';

const router = express.Router();

/**
 * GET /api/produtos
 * Listar todos os produtos
 */
router.get('/', (req, res) => {
  try {
    const produtos = repository.listarProdutos();
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
});

/**
 * GET /api/produtos/:id
 * Buscar produto por ID
 */
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const produto = repository.buscarProdutoPorId(id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(produto);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

/**
 * POST /api/produtos
 * Criar novo produto
 */
router.post('/', (req, res) => {
  try {
    const { nome, categoria, preco } = req.body;

    // Criar objeto produto
    const produto = {
      nome,
      categoria,
      preco: parseFloat(preco),
      ativo: true
    };

    // Validar
    const validacao = validarProduto(produto);

    if (!validacao.valido) {
      return res.status(400).json({
        error: 'Dados inválidos',
        detalhes: validacao.erros
      });
    }

    // Inserir no banco
    const id = repository.inserirProduto(produto);

    // Buscar produto criado
    const produtoCriado = repository.buscarProdutoPorId(id);

    res.status(201).json(produtoCriado);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

/**
 * PUT /api/produtos/:id
 * Atualizar produto
 */
router.put('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    // Verificar se produto existe
    const produtoExistente = repository.buscarProdutoPorId(id);

    if (!produtoExistente) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    const { nome, categoria, preco, ativo } = req.body;

    // Criar objeto produto atualizado
    const produto = {
      nome: nome !== undefined ? nome : produtoExistente.nome,
      categoria: categoria !== undefined ? categoria : produtoExistente.categoria,
      preco: preco !== undefined ? parseFloat(preco) : produtoExistente.preco,
      ativo: ativo !== undefined ? ativo : produtoExistente.ativo
    };

    // Validar
    const validacao = validarProduto(produto);

    if (!validacao.valido) {
      return res.status(400).json({
        error: 'Dados inválidos',
        detalhes: validacao.erros
      });
    }

    // Atualizar no banco
    const changes = repository.atualizarProduto(id, produto);

    if (changes === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Buscar produto atualizado
    const produtoAtualizado = repository.buscarProdutoPorId(id);

    res.json(produtoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

/**
 * DELETE /api/produtos/:id
 * Deletar produto
 */
router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    // Verificar se produto existe
    const produto = repository.buscarProdutoPorId(id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Deletar do banco
    const changes = repository.deletarProduto(id);

    if (changes === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json({ success: true, message: 'Produto deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

export default router;

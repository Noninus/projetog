/**
 * Funções de validação para produtos
 */

const CATEGORIAS_VALIDAS = ['Lanches', 'Bebidas', 'Sobremesas', 'Acompanhamentos'];

export function validarProduto(produto) {
  const erros = [];

  // Validar nome
  if (!produto.nome || typeof produto.nome !== 'string') {
    erros.push('Nome é obrigatório');
  } else if (produto.nome.trim().length < 3) {
    erros.push('Nome deve ter pelo menos 3 caracteres');
  }

  // Validar categoria
  if (!produto.categoria || !CATEGORIAS_VALIDAS.includes(produto.categoria)) {
    erros.push(`Categoria inválida. Use: ${CATEGORIAS_VALIDAS.join(', ')}`);
  }

  // Validar preço
  if (produto.preco === undefined || produto.preco === null) {
    erros.push('Preço é obrigatório');
  } else if (typeof produto.preco !== 'number' || produto.preco <= 0) {
    erros.push('Preço deve ser maior que zero');
  }

  return {
    valido: erros.length === 0,
    erros: erros
  };
}

import * as repository from './database/produtoRepository.js';

/**
 * Script para popular o banco com dados iniciais
 */

const produtosIniciais = [
  // Lanches
  { nome: 'Pizza Marguerita', categoria: 'Lanches', preco: 35.90, ativo: true },
  { nome: 'Pizza Calabresa', categoria: 'Lanches', preco: 38.90, ativo: true },
  { nome: 'Hamburguer Clássico', categoria: 'Lanches', preco: 25.00, ativo: true },
  { nome: 'Hamburguer Bacon', categoria: 'Lanches', preco: 28.50, ativo: true },
  { nome: 'Hot Dog', categoria: 'Lanches', preco: 15.00, ativo: true },

  // Bebidas
  { nome: 'Coca-Cola 2L', categoria: 'Bebidas', preco: 8.00, ativo: true },
  { nome: 'Suco de Laranja 500ml', categoria: 'Bebidas', preco: 6.50, ativo: true },
  { nome: 'Água Mineral 500ml', categoria: 'Bebidas', preco: 3.00, ativo: true },
  { nome: 'Cerveja Heineken', categoria: 'Bebidas', preco: 7.50, ativo: true },
  { nome: 'Limonada Suíça', categoria: 'Bebidas', preco: 8.00, ativo: true },

  // Sobremesas
  { nome: 'Brownie com Sorvete', categoria: 'Sobremesas', preco: 12.00, ativo: true },
  { nome: 'Petit Gateau', categoria: 'Sobremesas', preco: 15.00, ativo: true },
  { nome: 'Pudim', categoria: 'Sobremesas', preco: 8.00, ativo: true },
  { nome: 'Sorvete 2 Bolas', categoria: 'Sobremesas', preco: 10.00, ativo: true },
  { nome: 'Torta de Limão', categoria: 'Sobremesas', preco: 11.00, ativo: true },

  // Acompanhamentos
  { nome: 'Batata Frita Grande', categoria: 'Acompanhamentos', preco: 12.50, ativo: true },
  { nome: 'Onion Rings', categoria: 'Acompanhamentos', preco: 14.00, ativo: true },
  { nome: 'Salada Caesar', categoria: 'Acompanhamentos', preco: 16.00, ativo: true },
  { nome: 'Porção de Mandioca', categoria: 'Acompanhamentos', preco: 13.00, ativo: true },
  { nome: 'Molho Extra', categoria: 'Acompanhamentos', preco: 2.50, ativo: true }
];

console.log('🌱 Iniciando seed do banco de dados...\n');

let sucessos = 0;
let erros = 0;

for (const produto of produtosIniciais) {
  try {
    const id = repository.inserirProduto(produto);
    console.log(`✅ [${id}] ${produto.nome} - ${produto.categoria} - R$ ${produto.preco.toFixed(2)}`);
    sucessos++;
  } catch (error) {
    console.error(`❌ Erro ao inserir ${produto.nome}:`, error.message);
    erros++;
  }
}

console.log(`
╔═══════════════════════════════════════╗
║         SEED FINALIZADO               ║
╠═══════════════════════════════════════╣
║  ✅ Produtos inseridos: ${sucessos}           ║
║  ❌ Erros: ${erros}                          ║
╚═══════════════════════════════════════╝
`);

process.exit(0);

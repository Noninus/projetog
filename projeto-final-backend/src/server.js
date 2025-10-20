import express from 'express';
import cors from 'cors';
import produtosRouter from './routes/produtos.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite requisições de qualquer origem
app.use(express.json()); // Parse JSON no body das requisições

// Log de requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rotas
app.use('/api/produtos', produtosRouter);

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'API de Gestão de Produtos - Restaurante',
    versao: '1.0.0',
    endpoints: {
      produtos: {
        listar: 'GET /api/produtos',
        buscar: 'GET /api/produtos/:id',
        criar: 'POST /api/produtos',
        atualizar: 'PUT /api/produtos/:id',
        deletar: 'DELETE /api/produtos/:id'
      }
    }
  });
});

// Rota 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════╗
║   🍕 API RESTAURANTE - SISTEMA DE PRODUTOS   ║
╠═══════════════════════════════════════════════╣
║  Servidor rodando na porta: ${PORT}             ║
║  URL: http://localhost:${PORT}                  ║
║                                               ║
║  Endpoints disponíveis:                       ║
║  • GET    /api/produtos                       ║
║  • POST   /api/produtos                       ║
║  • GET    /api/produtos/:id                   ║
║  • PUT    /api/produtos/:id                   ║
║  • DELETE /api/produtos/:id                   ║
╚═══════════════════════════════════════════════╝
  `);
});

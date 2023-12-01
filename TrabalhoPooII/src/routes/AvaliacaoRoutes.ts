import { Router, Request, Response } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController';

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacao', async (req: Request, res: Response) => {
  try {
    const avaliacoes = await AvaliacaoController.listAvaliacao(req, res);
    res.json({ status: 'ok', avaliacoes });
  } catch (error) {
    console.error('Erro ao listar as avaliacoes:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AvaliacaoRouter.post('/avaliacao', async (req: Request, res: Response) => {
  try {
    const avaliacao = await AvaliacaoController.createAvaliacao(req, res);
    res.json({ status: 'ok', avaliacao });
  } catch (error) {
    console.error('Erro ao registrar a avaliacao:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AvaliacaoRouter.put('/avaliacao/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Avaliacao atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar o registro da avaliacao:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AvaliacaoRouter.delete('/aluno/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Avaliacao excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir a avaliacao:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

export default AvaliacaoRouter;
import { Router, Request, Response } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const ProfessorRouter = Router();

ProfessorRouter.get('/professor', async (req: Request, res: Response) => {
  try {
    const professor = await ProfessorController.listProfessor(req, res);
    res.json({ status: 'ok', professor });
  } catch (error) {
    console.error('Erro ao listar os professores:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

ProfessorRouter.post('/usuario', async (req: Request, res: Response) => {
  try {
    const usuario = await ProfessorController.createProfessor(req, res);
    res.json({ status: 'ok', usuario });
  } catch (error) {
    console.error('Erro ao registrar o professor:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

ProfessorRouter.put('/usuario/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Professor atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar o professor:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno no servidor' });
  }
});

ProfessorRouter.delete('/professor/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Professor excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir professor:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

export default ProfessorRouter;
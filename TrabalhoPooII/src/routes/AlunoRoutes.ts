import { Router, Request, Response } from 'express';
import AlunoController from '../controllers/AlunoController';

const AlunoRouter = Router();

AlunoRouter.get('/aluno', async (req: Request, res: Response) => {
  try {
    const alunos = await AlunoController.listAlunos(req, res);
    res.json({ status: 'ok', alunos });
  } catch (error) {
    console.error('Erro ao listar os alunos:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AlunoRouter.post('/aluno', async (req: Request, res: Response) => {
  try {
    const aluno = await AlunoController.createAluno(req, res);
    res.json({ status: 'ok', aluno });
  } catch (error) {
    console.error('Erro ao registrar o aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AlunoRouter.put('/aluno/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Aluno atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar o registro do aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

AlunoRouter.delete('/aluno/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Aluno excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir o aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

export default AlunoRouter;
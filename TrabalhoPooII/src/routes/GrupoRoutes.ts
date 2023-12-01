import { Router, Request, Response } from 'express';
import GrupoController from '../controllers/GrupoController';

const GrupoRouter = Router();

GrupoRouter.get('/grupo', async (req: Request, res: Response) => {
  try {
    const grupo = await GrupoController.listGrupos(req, res);
    res.json({ status: 'ok', grupo });
  } catch (error) {
    console.error('Erro ao listar os grupos:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

GrupoRouter.post('/grupo', async (req: Request, res: Response) => {
  try {
    const grupo = await GrupoController.createGrupo(req, res);
    res.json({ status: 'ok', grupo });
  } catch (error) {
    console.error('Erro ao registrar o grupo:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

GrupoRouter.put('/gupo/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o grupo com o ID fornecido
    res.json({ status: 'ok', message: 'Grupo atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar grupo:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

GrupoRouter.delete('/grupo/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Grupo excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir o grupo:', error);
    res.status(500).json({ status: 'error', message: 'Erro no servidor' });
  }
});

export default GrupoRouter;
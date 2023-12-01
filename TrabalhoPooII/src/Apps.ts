import express, { Response } from 'express';
import AlunoRouter from './routes/AlunoRoutes';  // Importe outras rotas conforme necessário
import ProfessorRouter from './routes/ProfessorRoutes';
import GrupoRouter from './routes/GrupoRoutes';

const app = express();
const PORT = 5555;

// Use as rotas
app.use('/api', AlunoRouter);
app.use('/api', ProfessorRouter);
app.use('/api', GrupoRouter);


// Rota padrão para lidar com a raiz
app.get('/', (_, res: Response) => {
    res.send('Bem-vindo à API!');
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
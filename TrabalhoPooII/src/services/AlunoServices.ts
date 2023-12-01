import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient();

class AlunoService {
  constructor() {}

  async listAlunos(id?: string) {
    try {
      if (id) {
        const alunoId = parseInt(id);
        const aluno = await prisma.aluno.findUnique({
          where: {
            id: alunoId,
          },
        });
        return aluno;
      } else {
        const alunos = await prisma.aluno.findMany();
        return alunos;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createAluno(aluno: Prisma.AlunoCreateInput) {
    try {
      const newAluno = await prisma.aluno.create({
        data: aluno,
      });
      return newAluno;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateAluno(id: string, aluno: Prisma.AlunoUpdateInput) {
    try {
      const updatedAluno = await prisma.aluno.update({
        where: {
          id: parseInt(id),
        },
        data: aluno,
      });
      return updatedAluno;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteAluno(id: string) {
    try {
      const deletedAluno = await prisma.aluno.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedAluno;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AlunoService();
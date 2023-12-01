import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProfessorService {
  constructor() {}

  async listProfessor(id?: string) {
    try {
      if (id) {
        const professorId = parseInt(id);
        const professor = await prisma.professor.findUnique({
          where: {
            id: professorId,
          },
        });
        return professor;
      } else {
        const professor = await prisma.professor.findMany();
        return professor;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createProfessor(professor: Prisma.ProfessorCreateInput) {
    try {
      const newProfessor = await prisma.professor.create({
        data: professor,
      });
      return newProfessor;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateProfessor(id: string, professor: Prisma.ProfessorUpdateInput) {
    try {
      const updatedProfessor = await prisma.professor.update({
        where: {
          id: parseInt(id),
        },
        data: professor,
      });
      return updatedProfessor;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteProfessor(id: string) {
    try {
      const deletedProfessor = await prisma.professor.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedProfessor;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new ProfessorService();
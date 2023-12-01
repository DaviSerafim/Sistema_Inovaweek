import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoService {
  constructor() {}

  async listAvaliacao(id?: string) {
    try {
      if (id) {
        const avaliacaoId = parseInt(id);
        const avaliacao = await prisma.avaliacao.findUnique({
          where: {
            id: avaliacaoId,
          },
        });
        return avaliacao;
      } else {
        const avaliacoes = await prisma.avaliacao.findMany();
        return avaliacoes;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput) {
    try {
      const newAvaliacao = await prisma.avaliacao.create({
        data: avaliacao,
      });
      return newAvaliacao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateAvaliacao(id: string, avaliacao: Prisma.AvaliacaoUpdateInput) {
    try {
      const updatedAvaliacao = await prisma.avaliacao.update({
        where: {
          id: parseInt(id),
        },
        data: avaliacao,
      });
      return updatedAvaliacao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteAvaliacao(id: string) {
    try {
      const deletedAvaliacao = await prisma.avaliacao.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedAvaliacao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AvaliacaoService();
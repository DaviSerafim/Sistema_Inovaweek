import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GrupoService {
  constructor() {}

  async listGrupos(id?: string) {
    try {
      if (id) {
        const grupoId = parseInt(id);
        const grupos = await prisma.grupo.findUnique({
          where: {
            id: grupoId,
          },
        });
        return grupos;
      } else {
        const grupos = await prisma.grupo.findMany();
        return grupos;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createGrupo(grupo: Prisma.GrupoCreateInput) {
    try {
      const newGrupo = await prisma.grupo.create({
        data: grupo,
      });
      return newGrupo;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateGrupo(id: string, grupo: Prisma.GrupoUpdateInput) {
    try {
      const updatedGrupo = await prisma.grupo.update({
        where: {
          id: parseInt(id),
        },
        data: grupo,
      });
      return updatedGrupo;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteGrupo(id: string) {
    try {
      const deletedGrupo = await prisma.grupo.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedGrupo;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new GrupoService();
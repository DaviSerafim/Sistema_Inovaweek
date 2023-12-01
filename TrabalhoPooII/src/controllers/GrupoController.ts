import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import GrupoService from "../services/GrupoServices";

class GrupoController {
    async createGrupo(req: Request, res: Response) {
        const dados: Prisma.GrupoCreateInput = req.body;

        try {
            const newGrupo = await GrupoService.createGrupo(dados);
            res.status(200).json({
                status: 'ok',
                newGrupo: newGrupo
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async listGrupos(req: Request, res: Response) {
        try {
            const grupos = await GrupoService.listGrupos();

            res.status(200).json({
                status: 'ok',
                grupos: grupos
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async updateGrupo(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.GrupoUpdateInput = req.body;

        try {
            const grupoAtualizado = await GrupoService.updateGrupo(id, dados);
            res.status(200).json({
                status: 'ok',
                usuarioAtualizado: grupoAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async deleteGrupo(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const grupoDeletado = await GrupoService.deleteGrupo(id);
            res.status(200).json({
                status: 'ok',
                grupoDeletado: grupoDeletado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }
}

export default new GrupoController();
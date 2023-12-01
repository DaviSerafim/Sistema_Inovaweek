import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AvaliacaoServices from "../services/AvaliacaoServices";

class AvaliacaoController {
    async createAvaliacao(req: Request, res: Response) {
        const dados: Prisma.AvaliacaoCreateInput = req.body;

        try {
            const newAvaliacao = await AvaliacaoServices.createAvaliacao(dados);
            res.status(200).json({
                status: 'ok',
                newAluno: newAvaliacao
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async listAvaliacao(req: Request, res: Response) {
        try {
            const avaliacao = await AvaliacaoServices.listAvaliacao();

            res.status(200).json({
                status: 'ok',
                avaliacao: avaliacao
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async updateAvaliacao(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.AvaliacaoUpdateInput = req.body;

        try {
            const avaliacaoAtualizado = await AvaliacaoServices.updateAvaliacao(id, dados);
            res.status(200).json({
                status: 'ok',
                avaliacaoAtualizado: avaliacaoAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async deleteAvaliacao(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const avaliacaoDeletado = await AvaliacaoServices.deleteAvaliacao(id);
            res.status(200).json({
                status: 'ok',
                avaliacaoDeletado: avaliacaoDeletado
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

export default new AvaliacaoController();
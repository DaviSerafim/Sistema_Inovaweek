import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import AlunoServices from "../services/AlunoServices";

class AlunoController {
    async createAluno(req: Request, res: Response) {
        const dados: Prisma.AlunoCreateInput = req.body;

        try {
            const newAluno = await AlunoServices.createAluno(dados);
            res.status(200).json({
                status: 'ok',
                newAluno: newAluno
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async listAlunos(req: Request, res: Response) {
        try {
            const alunos = await AlunoServices.listAlunos();

            res.status(200).json({
                status: 'ok',
                alunos: alunos
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async updateAluno(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.AlunoUpdateInput = req.body;

        try {
            const alunoAtualizado = await AlunoServices.updateAluno(id, dados);
            res.status(200).json({
                status: 'ok',
                alunoAtualizado: alunoAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async deleteAluno(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const alunoDeletado = await AlunoServices.deleteAluno(id);
            res.status(200).json({
                status: 'ok',
                alunoDeletado: alunoDeletado
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

export default new AlunoController();
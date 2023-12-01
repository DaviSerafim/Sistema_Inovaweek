import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ProfessorService from "../services/ProfessorServices";

class ProfessorController {
    async createProfessor(req: Request, res: Response) {
        const dados: Prisma.ProfessorCreateInput = req.body;

        try {
            const newProfessor = await ProfessorService.createProfessor(dados);
            res.status(200).json({
                status: 'ok',
                newProfessor: newProfessor
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async listProfessor(req: Request, res: Response) {
        try {
            const professor = await ProfessorService.listProfessor();

            res.status(200).json({
                status: 'ok',
                professor: professor
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async updateProfessor(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.ProfessorUpdateInput = req.body;

        try {
            const professorAtualizado = await ProfessorService.updateProfessor(id, dados);
            res.status(200).json({
                status: 'ok',
                professorAtualizado: professorAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro no servidor'
            });
        }
    }

    async deleteProfessor(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const professorDeletado = await ProfessorService.deleteProfessor(id);
            res.status(200).json({
                status: 'ok',
                professorDeletado: professorDeletado
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

export default new ProfessorController();
import tarefas from "../models/tarefas.model.js";
import { validationResult } from "express-validator";

export default class tarefasController {
    static async getAll(req, res) {
        res.json(await tarefas.findMany({include: { usuario: { select: { nome: true } } }}))
    }

    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        return res.json(await tarefas.create({ data: req.body }))
    }

    static async getId(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const tarefa = await tarefas.findUnique({ where: { id: parseInt(req.params.id) }, include: { usuario: { select: { nome: true } } } })
        if (!tarefa) { return res.status(400).json({ message: `Id não encontrado` }) }
        return res.json(tarefa)
    }

    static async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const tarefa = await tarefas.update({ where: { id: parseInt(req.params.id) }, data: req.body })
        if (!tarefa) { return res.status(400).json({ message: `Id não encontrado` }) }
        return res.json(tarefa)
    }

    static async delete(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const tarefa = await tarefas.delete({ where: { id: parseInt(req.params.id) } })
        if (!tarefa) { return res.status(400).json({ message: `Id não encontrado` }) }
        return res.json(tarefa)
    }
}
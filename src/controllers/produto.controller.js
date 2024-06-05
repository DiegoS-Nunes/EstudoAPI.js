import Produtos from '../models/produto.model.js'
import { validationResult } from 'express-validator'

export default class produtoController {

  static async getAll(req, res) {
    res.json(await Produtos.findMany({include: {Image: true}}))
  }

  static async create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    return res.json(await Produtos.create({ data: req.body }))
  }

  static async getId(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const produto = await Produtos.findUnique({ where: { id: parseInt(req.params.id) } })
    if (!produto) { return res.status(400).json({ message: "Id não encontrado" }) }
    return res.json(produto)
  }

  static async update(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const produto = await Produtos.update({ where: { id: parseInt(req.params.id) } , data: req.body})
    if (!produto) { return res.status(400).json({ message: 'Produto não encontrado' }) }
    return res.json(produto)
  }

  static async delete(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const produto = await Produtos.delete({ where: { id: parseInt(req.params.id) }})
    if (!produto) { return res.status(400).json({ message: 'Produto não encontrado' }) }
    else { return res.status(204).json({ message: 'Produto deletado com sucesso' })}
  }
}
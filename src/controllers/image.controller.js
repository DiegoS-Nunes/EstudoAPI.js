import Image from '../models/image.model.js'
import { validationResult } from 'express-validator'

export default class imageController {

  static async getAll(req, res) {
    res.json(await Image.findMany())
  }

  static async create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    return res.json(await Image.create({ data: req.body }))
  }

  static async getId(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const image = await Image.findUnique({ where: { id: parseInt(req.params.id) } })
    if (!image) { return res.status(400).json({ message: "Id não encontrado" }) }
    return res.json(image)
  }

  static async update(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const image = await Image.update({ where: { id: parseInt(req.params.id) } , data: req.body})
    if (!image) { return res.status(400).json({ message: 'Imagem não encontrado' }) }
    return res.json(image)
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
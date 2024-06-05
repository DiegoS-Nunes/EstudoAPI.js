import { body, param } from 'express-validator'

export const createProdutoValidator = [
    body('descricao').isString().withMessage("Descrição inválido"),
    body('preco').isFloat().withMessage("Preço inválido"),
]

export const updateProdutoValidator = [
    body('descricao').optional().isString().withMessage("Descrição inválido"),
    body('preco').optional().isFloat().withMessage("Preço inválido"),
]

export const idProdutoValidator = [
    param("id").isInt().withMessage("Id Inválido")
]
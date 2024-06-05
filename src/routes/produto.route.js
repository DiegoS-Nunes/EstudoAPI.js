import { Router } from "express";
import { createProdutoValidator, idProdutoValidator, updateProdutoValidator } from '../validator/produtos.validator.js'
import produtoController from "../controllers/produto.controller.js";

const router = Router()

router.get('/', produtoController.getAll)
router.post('/', createProdutoValidator, produtoController.create)
router.get('/:id', idProdutoValidator, produtoController.getId)
router.put('/:id', [idProdutoValidator, updateProdutoValidator], produtoController.update)
router.delete('/:id', idProdutoValidator, produtoController.delete)

export default router
import { Router } from "express";
import { createTarefasValidator, idTarefasValidator, updateTarefasValidator } from '../validator/tarefas.validator.js'
import tarefasController from "../controllers/tarefas.controller.js";

const router = Router()

router.get('/', tarefasController.getAll)
router.post('/', createTarefasValidator, tarefasController.create)
router.get('/:id', idTarefasValidator, tarefasController.getId)
router.put('/:id', [idTarefasValidator, updateTarefasValidator], tarefasController.update)
router.delete('/:id', idTarefasValidator, tarefasController.delete)

export default router
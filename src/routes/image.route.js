import { Router } from "express";
import { createImageValidator, idImageValidator, updateImageValidator } from '../validator/image.validator.js'
import imageController from "../controllers/image.controller.js";

const router = Router()

router.get('/', imageController.getAll)
router.post('/', createImageValidator, imageController.create)
router.get('/:id', idImageValidator, imageController.getId)
router.put('/:id', [idImageValidator, updateImageValidator], imageController.update)
router.delete('/:id', idImageValidator, imageController.delete)

export default router
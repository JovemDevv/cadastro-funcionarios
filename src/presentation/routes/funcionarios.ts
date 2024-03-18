// src/routes/funcionarios.ts

import express from "express";
import FuncionarioController from "../controllers/FuncionarioController";
const router = express.Router();

router.post("/", FuncionarioController.create);

router.get("/", FuncionarioController.getAll);
router.get("/:id", FuncionarioController.get);
router.put("/:id", FuncionarioController.update);
router.delete("/:id", FuncionarioController.delete);

export default router;

// src/routes/funcionarios.ts

import express from "express";
import { cadastrarFuncionario } from "../controllers/FuncionarioController";

const router = express.Router();

router.post("/", cadastrarFuncionario);

export default router;

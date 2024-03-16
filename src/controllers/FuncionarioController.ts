// src/controllers/FuncionarioController.ts

import { Request, Response } from "express";
import { db } from "../config/firebaseAdminConfig";
import Funcionario from "../models/Funcionario";

const colecaoFuncionarios = db.collection("funcionarios");

async function cadastrarFuncionario(req: Request, res: Response) {
  try {
    const dados: Funcionario = req.body;
    const docRef = await colecaoFuncionarios.add(dados);
    res.status(201).send(`Funcionário cadastrado com ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Adicione outros métodos de controle conforme necessário

export { cadastrarFuncionario };

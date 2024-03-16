// src/server.ts

import express from "express";
import funcionariosRouter from "./routes/funcionarios";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/funcionarios", funcionariosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

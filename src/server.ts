// src/server.ts

import express from "express";
import funcionariosRoutes from "./presentation/routes/funcionarios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/funcionarios", funcionariosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

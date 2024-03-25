// src/server.ts

import express from "express";
import employeeRoutes from "./routes/employeeRoutes";
const app = express();
const PORT = process.env.PORT || 3000;

// Registrando as rotas
app.use("/api", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// src/modules/routes/employeeRoutes.ts

import express from "express";
import { EmployeeController } from "../employee/controllers/EmployeeController";

const router = express.Router();
const employeeService = new EmployeeService();
const employeeController = new EmployeeController(employeeService);

// Rotas relacionadas a funcionários
router.get("/employees", employeeController.getAllEmployees);
router.get("/employees/:id", employeeController.getEmployeeById);
router.post("/employees", employeeController.createEmployee);
router.put("/employees/:id", employeeController.updateEmployee);
router.delete("/employees/:id", employeeController.deleteEmployee);

export default router;

import { Request, Response } from "express";
import { EmployeeService } from "../services/EmployeeService";
import { EmployeeDTO } from "../dtos/EmployeeDTO";
import * as admin from "firebase-admin";

export class EmployeeController {
  private readonly employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  // Método para criar um novo funcionário
  async createEmployee(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    try {
      // Extrair dados do corpo da solicitação
      const employeeData: EmployeeDTO = req.body;

      // Verificar se uma foto foi enviada
      if (!req.file) {
        return res.status(400).json({ error: "Photo file is required" });
      }

      // Preparar o arquivo para upload no Firebase Storage
      const file = req.file;

      // Chamar o serviço para criar o funcionário, passando dados do funcionário e a foto
      const newEmployee = await this.employeeService.createEmployee(
        employeeData,
        file,
      );

      // Responder com o novo funcionário criado
      return res.status(201).json(newEmployee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para atualizar informações de um funcionário
  async updateEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employeeId: string = req.params.id;
      const updatedEmployeeData: EmployeeDTO = req.body;
      const updatedEmployee = await this.employeeService.updateEmployee(
        employeeId,
        updatedEmployeeData,
      );
      if (updatedEmployee) {
        res.status(200).json(updatedEmployee);
      } else {
        res.status(404).json({ error: "Employee not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para excluir um funcionário
  async deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employeeId: string = req.params.id;
      const deletionSuccess = await this.employeeService.deleteEmployee(
        employeeId,
      );
      if (deletionSuccess) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Employee not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

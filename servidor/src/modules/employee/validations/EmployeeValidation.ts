import { EmployeeDTO } from "../dtos/EmployeeDTO";
import { Employee } from "../models/Employee"; // Verifique o caminho do arquivo de definição de Employee

export class EmployeeValidation {
  static validateLoginInput(email: string, password: string): void {
    if (!email || !password) {
      throw new Error("Por favor, forneça um email e uma senha.");
    }
    // Outras validações podem ser adicionadas conforme necessário
  }

  static validateRegistrationInput(email: string, password: string): void {
    if (!email || !password) {
      throw new Error("Por favor, forneça um email e uma senha.");
    }
    // Outras validações podem ser adicionadas conforme necessário
  }

  static validateEmployeeData(employeeData: EmployeeDTO): void {
    // Adicione validações para os dados do funcionário aqui
    if (
      !employeeData.name ||
      !employeeData.gender ||
      !employeeData.address ||
      !employeeData.phoneNumber ||
      !employeeData.birthDate ||
      !employeeData.position ||
      !employeeData.hireDate ||
      !employeeData.department ||
      !employeeData.salary
    ) {
      throw new Error(
        "Por favor, forneça todos os dados necessários do funcionário.",
      );
    }
    // Outras validações podem ser adicionadas conforme necessário
  }
}

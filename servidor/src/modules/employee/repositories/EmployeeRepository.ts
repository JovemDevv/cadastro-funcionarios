import { db } from "../../../config/firebaseAdmin";

class EmployeeRepository {
  async createEmployee(employeeData) {
    try {
      const employeeRef = await db.collection("employees").add(employeeData);
      return employeeRef.id;
    } catch (error) {
      throw new Error(`Erro ao criar funcionário: ${error}`);
    }
  }

  async getEmployeeById(employeeId) {
    try {
      const employeeSnapshot = await db
        .collection("employees")
        .doc(employeeId)
        .get();
      if (!employeeSnapshot.exists) {
        throw new Error("Funcionário não encontrado");
      }
      return { id: employeeSnapshot.id, ...employeeSnapshot.data() };
    } catch (error) {
      throw new Error(`Erro ao buscar funcionário por ID: ${error}`);
    }
  }

  async updateEmployee(employeeId, updatedEmployeeData) {
    try {
      await db
        .collection("employees")
        .doc(employeeId)
        .update(updatedEmployeeData);
      return "Funcionário atualizado com sucesso";
    } catch (error) {
      throw new Error(`Erro ao atualizar funcionário: ${error}`);
    }
  }

  async deleteEmployee(employeeId) {
    try {
      await db.collection("employees").doc(employeeId).delete();
      return "Funcionário excluído com sucesso";
    } catch (error) {
      throw new Error(`Erro ao excluir funcionário: ${error}`);
    }
  }
}

export default new EmployeeRepository();

import { db, storage, auth } from "../../../config/firebaseAdmin";
import { Employee } from "../models/Employee";
import { EmployeeValidation } from "../validations/EmployeeValidation";

export class EmployeeService {
  async createEmployee(employeeData: Employee): Promise<Employee> {
    try {
      // Validar os dados do funcionário
      EmployeeValidation.validateEmployeeData(employeeData);

      // Adicionar o funcionário ao Firestore
      const employeeRef = await db.collection("employees").add(employeeData);
      employeeData.id = employeeRef.id;

      return employeeData;
    } catch (error) {
      throw new Error("Error creating employee");
    }
  }

  async getEmployeeById(employeeId: string): Promise<Employee | null> {
    try {
      const employeeDoc = await db
        .collection("employees")
        .doc(employeeId)
        .get();

      if (employeeDoc.exists) {
        return { id: employeeDoc.id, ...employeeDoc.data() } as Employee;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error getting employee");
    }
  }

  async loginUser(email: string, password: string): Promise<void> {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error("Error logging in user");
    }
  }

  async registerUser(email: string, password: string): Promise<void> {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error("Error registering user");
    }
  }
}

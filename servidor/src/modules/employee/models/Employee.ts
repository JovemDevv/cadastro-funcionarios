export interface Employee {
  id: string;
  name: string;
  gender: string;
  address: string;
  phoneNumber: string;
  profilePicture?: string; // Opcional
  birthDate: Date;
  position: string;
  hireDate: Date;
  department: string;
  salary: number;
}

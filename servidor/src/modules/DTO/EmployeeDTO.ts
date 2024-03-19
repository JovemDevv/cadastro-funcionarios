// backend/src/modules/employee/dtos/EmployeeDTO.ts

export interface EmployeeDTO {
  name: string;
  gender?: string;
  address?: string;
  phone?: string;
  profilePicture?: string;
  birthday?: Date;
  position?: string;
  hireDate?: Date;
  department?: string;
  salary?: number;
}

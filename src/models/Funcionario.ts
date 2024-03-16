// src/models/Funcionario.ts

interface Funcionario {
  id?: string;
  nome: string;
  sexo: string;
  endereco: string;
  telefone: string;
  fotoPerfilURL: string;
  dataAniversario: Date;
  cargo: string;
  dataAdmissao: Date;
  setor: string;
  salario: number;
}

export default Funcionario;

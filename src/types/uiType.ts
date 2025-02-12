export type TbasicModel = {
  firstName: string;
  id: string;
};

export type TbasicSelectProps = {
  id: string;
  handleChange: (e: any) => void;
  departments: string;
};

export type TEmployee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  status: string;
  hireDate: string;
};

export type TEmployeeList = {
  employees: TEmployee[];
};

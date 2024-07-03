import * as Yup from 'yup';

import { ValidateEmployeesSchema } from '../model/schemas/validate-employees-schema';

import { IEmployee } from '@/src/entities/employee';

export const validateEmployees = async (employees: IEmployee[]) => {
  for (const employee of employees) {
    try {
      if (!employee.login || !employee.name || !employee.password) {
        return 'Заполните все поля';
      } else {
        await ValidateEmployeesSchema.validate(employee);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return err.errors[0];
      } else {
        throw err;
      }
    }
  }

  return null;
};

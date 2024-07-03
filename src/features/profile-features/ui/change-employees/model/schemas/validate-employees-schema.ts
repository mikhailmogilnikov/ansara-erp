import * as Yup from 'yup';

import { ValidatorSchemas } from '@/src/shared/model/schemas/validator-schemas';

export const ValidateEmployeesSchema = Yup.object().shape({
  password: ValidatorSchemas.password,
  login: ValidatorSchemas.login,
  name: ValidatorSchemas.name,
});

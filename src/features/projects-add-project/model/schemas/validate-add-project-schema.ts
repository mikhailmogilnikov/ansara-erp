import * as Yup from 'yup';

import { ValidatorSchemas } from '@/src/shared/model/schemas/validator-schemas';

export const ValidateAddProjectSchema = Yup.object().shape({
  password: ValidatorSchemas.password,
  login: ValidatorSchemas.login,
  phone: ValidatorSchemas.phone,
  name: ValidatorSchemas.name,
});

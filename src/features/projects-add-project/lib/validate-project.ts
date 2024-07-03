import * as Yup from 'yup';

import { ValidateAddProjectSchema } from '../model/schemas/validate-add-project-schema';
import { TProject } from '../model/add-project-store';

export const validateProject = async (project: TProject) => {
  try {
    await ValidateAddProjectSchema.validate(project);
    if (!project.stages) return 'Выберите количество этапов';
    if (!project.accounters) return 'Выберите аккаунтера';
    if (project.startDate < project.payDate)
      return 'Дата запуска первой версии не может быть раньше даты первой оплаты';
    if (project.endDate < project.startDate)
      return 'Дата завершения окна правок не может быть раньше дата запуска первой версии';

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return error.errors[0];
    } else {
      throw error;
    }
  }
};

import * as Yup from 'yup';

import { ProjectI } from '../model/add-project-store';

import { ValidateProjectSchema } from '@/src/shared/model/schemas/validate-project-schemas';

export const validateProject = async (project: ProjectI) => {
  try {
    await ValidateProjectSchema.validate(project);
    if (!project.stages) return 'Выберите количество этапов';
    if (!project.accounters) return 'Выберите аккаунтера';
    if (project.startDate < project.payDate)
      return 'Дата первой старта проекта не может быть раньше даты первой оплаты';

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return error.errors[0];
    } else {
      throw error;
    }
  }
};

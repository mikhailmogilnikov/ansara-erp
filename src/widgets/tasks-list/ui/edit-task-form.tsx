'use client';

import { ITask } from '@/src/entities/task';
import { ModalWrapper } from '@/src/shared/ui/modal';

export const EditTaskForm = ({ body }: ITask) => {
  return <ModalWrapper title='Редактировать задачу'>{body}</ModalWrapper>;
};

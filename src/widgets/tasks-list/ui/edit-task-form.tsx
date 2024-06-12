'use client';

import { ITask } from '@/src/entities/task';
import { Text } from '@/src/shared/ui/(layout)/text';

export const EditTaskForm = ({ body }: ITask) => {
  //const modalProps: ITask = useModalField('modalProps');

  return <Text>{body}</Text>;
};

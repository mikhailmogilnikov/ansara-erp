import { ITask } from '@/src/shared/model/task.type';

export interface IEmptyTask extends Omit<ITask, 'projectId' | 'id' | 'userId'> {
  projectId: number | null;
  userId: number | null;
}

import { ITask } from '@/src/shared/model/task.type';

export interface IEmptyTask
  extends Omit<ITask, 'projectId' | 'userId' | 'id' | 'startTime' | 'endTime'> {
  startTime: number;
  endTime: number;
  projectId: number | null;
  userId: number | null;
}

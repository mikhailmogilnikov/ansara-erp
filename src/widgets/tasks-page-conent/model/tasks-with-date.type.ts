import { ITask } from '@/src/shared/model/task.type';

export interface ItasksWithDate {
  date: string;
  tasks: ITask[];
  time: number;
}

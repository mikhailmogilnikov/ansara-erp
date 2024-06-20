import { ITask } from '@/src/shared/model/task.type';

export const countSumTime = (tasks: ITask[]) => {
  return tasks.reduce((time, task) => {
    if (task.endTime && task.startTime) {
      return (time += task.endTime - task.startTime);
    }

    return time;
  }, 0);
};

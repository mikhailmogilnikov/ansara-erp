import { ItasksWithDate } from '../../model/tasks-with-date.type';

import { ITask } from '@/src/shared/model/task.type';

const getStringDate = (time: number) => {
  return new Date(time).toISOString().slice(0, 10);
};

export const getTasksWithDate = (tasks: ITask[]) => {
  const tasksWithDate: ItasksWithDate[] = [];

  tasks.forEach((task) => {
    if (task.endTime && task.startTime) {
      const lastTaskGroup = tasksWithDate.at(-1);

      if (lastTaskGroup && lastTaskGroup.date === getStringDate(task.endTime)) {
        lastTaskGroup.tasks.push(task);
        lastTaskGroup.time += task.endTime - task.startTime;
      } else {
        tasksWithDate.push({
          date: getStringDate(task.endTime),
          tasks: [task],
          time: task.endTime - task.startTime,
        });
      }
    } else {
      const lastTaskGroup = tasksWithDate.at(-1);

      if (lastTaskGroup && lastTaskGroup.date === getStringDate(new Date().getTime())) {
        lastTaskGroup.tasks.push(task);
      } else {
        tasksWithDate.push({
          date: getStringDate(new Date().getTime()),
          tasks: [task],
          time: 0,
        });
      }
    }
  });

  return tasksWithDate;
};

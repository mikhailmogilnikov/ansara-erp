import { ITask } from '@/src/entities/task';

const getStringDate = (time: number) => {
  return new Date(time).toISOString().slice(0, 10);
};

export const getPassedTasks = (tasks: ITask[]) => {
  const passedTasks: {
    date: string;
    tasks: ITask[];
    time: number;
  }[] = [];

  tasks.forEach((task) => {
    if (task.endTime && task.startTime) {
      const lastTaskGroup = passedTasks.at(-1);

      if (lastTaskGroup && lastTaskGroup.date === getStringDate(task.endTime)) {
        lastTaskGroup.tasks.push(task);
        lastTaskGroup.time += task.endTime - task.startTime;
      } else {
        passedTasks.push({
          date: getStringDate(task.endTime),
          tasks: [task],
          time: task.endTime - task.startTime,
        });
      }
    }
  });

  return passedTasks;
};

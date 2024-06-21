'use client';

import { DraggbleTasks } from './draggble-tasks';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Task } from '@/src/entities/task';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatDate } from '@/src/shared/lib/utils/format-date';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { EditTask } from '@/src/features/tasks-edit-task';
import { getPassedTasks } from '@/src/shared/lib/utils/get-passed-tasks';
import { ITask } from '@/src/shared/model/task.type';
import { TasksCreateTask } from '@/src/features/tasks-create-task';

interface Props {
  tasks: ITask[];
  showUsers?: boolean;
}

export const TasksList = ({ tasks, showUsers }: Props) => {
  const currentTasks = tasks.filter((task) => !task.endTime);
  const passedTasks = getPassedTasks(tasks);

  if (!passedTasks.length) {
    passedTasks.push({
      date: new Date().toISOString().slice(0, 10),
      tasks: [],
      time: 0,
    });
  }
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <>
      {!showUsers ? (
        <DraggbleTasks showUsers={showUsers} tasks={currentTasks} />
      ) : (
        <>
          {currentTasks.map((task) => (
            <EditTask key={task.id} task={task}>
              <Task {...task} showUsers={showUsers} />
            </EditTask>
          ))}
          {!currentTasks.length && (
            <Text className='mt-3' tag='h1'>
              Нет текущих задач
            </Text>
          )}
        </>
      )}
      {passedTasks.map((day) => (
        <div key={day.date}>
          <Flex className='mt-20 justify-between pb-4 border-b-1 border-divider'>
            <Flex className='items-center'>
              {day.date === currentDate ? (
                <>
                  <Text size={20}>Сегодня</Text>
                  <TasksCreateTask
                    isButton
                    isFinishedTask
                    showProjects={!showUsers}
                    showUsers={showUsers}
                  />
                </>
              ) : (
                <Text size={20}>{formatDate(new Date(day.date))}</Text>
              )}
            </Flex>
            <Text className='text-primary text-nowrap' size={20}>
              {day.time ? formatTime(day.time) : ''}
            </Text>
          </Flex>
          <div>
            {day.tasks.map((task) => (
              <EditTask key={task.id} task={task}>
                <Task {...task} showUsers={showUsers} />
              </EditTask>
            ))}
            {!day.tasks.length && (
              <Text className='mt-3' tag='h1'>
                Нет задач на сегодня
              </Text>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

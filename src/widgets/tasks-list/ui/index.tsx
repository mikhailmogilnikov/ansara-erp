import { DraggbleTasks } from './draggble-tasks';
import { TaskForm } from './task-form';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ITask, Task } from '@/src/entities/task';
import { AddFinishedTask } from '@/src/features/tasks-add-finished-task';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatDate } from '@/src/shared/lib/format-date';
import { formatTime } from '@/src/shared/lib/format-time';

interface Props {
  tasks: ITask[];
  date?: string;
  time?: number;
}

export const TasksList = ({ tasks, date, time }: Props) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const isToday = date === currentDate;

  return date && time ? (
    <>
      <Flex className='mt-20 justify-between pb-4 border-b-1 border-divider'>
        <Flex className='items-center'>
          {isToday ? (
            <>
              <Text size={20}>Сегодня</Text>
              <AddFinishedTask modalContent={<TaskForm />} />
            </>
          ) : (
            <Text size={20}>{formatDate(new Date(date))}</Text>
          )}
        </Flex>
        <Text className='text-primary text-nowrap' size={20}>
          {formatTime(time)}
        </Text>
      </Flex>
      <div>
        {tasks.map((task) => (
          <Task {...task} key={task.id} modalContent={<TaskForm task={task} />} />
        ))}
      </div>
    </>
  ) : (
    <DraggbleTasks tasks={tasks} />
  );
};

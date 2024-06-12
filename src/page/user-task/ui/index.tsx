'use client';

import { useState } from 'react';

import { tasksList } from '../config/tasks';

import { Text } from '@/src/shared/ui/(layout)/text';
import { CreationBar } from '@/src/widgets/creation-bar';
import { Task } from '@/src/entities/task';
import { TaskContainer } from '@/src/widgets/task-container';
import { users } from '@/src/entities/user';

export const UserTasksPage = ({ id }: { id: number }) => {
  const [tasks, setTasks] = useState(tasksList);
  const user = users.find((user) => user.id == id);
  const date = new Date();
  const yesterday = new Date(date);

  yesterday.setDate(date.getDate() - 1);

  return (
    <div className='py-3 px-4 mt-8 w-full flex justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Text className='mb-4' size={24}>
          {user?.name}
        </Text>
        <CreationBar />
        {tasks.map((task) => (
          <Task {...task} key={task.id} />
        ))}
        <TaskContainer date={date.getTime()} time={2312412}>
          {tasks.map((task) => (
            <Task {...task} key={task.id} />
          ))}
        </TaskContainer>
        <TaskContainer date={yesterday.getTime()} time={2312412}>
          {tasks.map((task) => (
            <Task {...task} key={task.id} />
          ))}
        </TaskContainer>
      </div>
    </div>
  );
};

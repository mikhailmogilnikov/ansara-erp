'use client';

import { useState } from 'react';

import { tasksList } from '../config/tasks';

import { Text } from '@/src/shared/ui/(layout)/text';
import { CreationBar } from '@/src/widgets/creation-bar';
import { TaskContainer } from '@/src/widgets/task-container';
import { users } from '@/src/entities/user';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { BackButton } from '@/src/shared/ui/(buttons)/back-button';
import { TasksList } from '@/src/widgets/tasks-list';

export const UserTasksPage = ({ id }: { id: number }) => {
  const [tasks, setTasks] = useState(tasksList);
  const user = users.find((user) => user.id == id);
  const date = new Date();
  const yesterday = new Date(date);

  yesterday.setDate(date.getDate() - 1);

  return (
    <div className='py-3 px-4 mt-8 w-full flex justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Flex className='mb-3 items-center' gap={3}>
          <BackButton />
          <Text className='font-semibold' size={30} tag='h2'>
            {user?.name}
          </Text>
        </Flex>

        <CreationBar />
        <TasksList isDraggble tasks={tasks} />
        <TaskContainer date={date.getTime()} time={2312412}>
          <TasksList tasks={tasks} />
        </TaskContainer>
        <TaskContainer date={yesterday.getTime()} time={2312412}>
          <TasksList tasks={tasks} />
        </TaskContainer>
      </div>
    </div>
  );
};

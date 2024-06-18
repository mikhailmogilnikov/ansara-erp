'use client';

import { getPassedTasks } from '../lib/get-passed-tasks';

import { Text } from '@/src/shared/ui/(layout)/text';
import { CreationBar } from '@/src/widgets/creation-bar';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksListConst } from '@/src/shared/config/tasks-list-const';
import { TasksList } from '@/src/widgets/tasks-list';
import { BackButton } from '@/src/features/back-button';
import { users } from '@/src/entities/user/user-card';

export const UserTasksPage = ({ id }: { id: number }) => {
  const currentTasks = TasksListConst.filter((task) => !task.endTime);
  const passedTasks = getPassedTasks(TasksListConst);
  const user = users.find((user) => user.id == id);
  const date = new Date();
  const yesterday = new Date(date);

  yesterday.setDate(date.getDate() - 1);

  return (
    <Flex className='py-3 px-4 mt-8 justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Flex className='mb-3 items-center' gap={3}>
          <BackButton />
          <Text className='font-semibold' size={30} tag='h2'>
            {user?.name}
          </Text>
        </Flex>
        <CreationBar />
        <TasksList tasks={currentTasks} />
        {passedTasks.map((day) => (
          <TasksList key={day.date} date={day.date} tasks={day.tasks} time={day.time} />
        ))}
      </div>
    </Flex>
  );
};

'use client';

import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/select';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { CreateTask } from '@/src/features/tasks-create-task';

export const CreationBar = () => {
  const [task, setTask] = useState('');
  const router = useRouter();
  const [project, setProject] = useState('');

  const handleAddTask = () => {
    if (task.length > 3 && project) {
      //request
      router.refresh();
    }
  };

  return (
    <Flex col className='w-full pb-5 border-b-1 border-divider'>
      <Input
        classNames={{
          inputWrapper: `!bg-default`,
        }}
        placeholder='Введите задачу'
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <Flex className='items-center justify-between'>
        <Select
          aria-label='Выберете проект'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          placeholder='Выберите проект'
          onChange={(e) => setProject(e.target.value)}
        >
          {TasksProjectsListConst.map((project) => (
            <SelectItem key={project.id}>{project.name}</SelectItem>
          ))}
        </Select>
        <CreateTask onPress={handleAddTask} />
      </Flex>
    </Flex>
  );
};

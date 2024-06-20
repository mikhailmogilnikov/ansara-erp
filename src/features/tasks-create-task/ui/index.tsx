'use client';

import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/select';
import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';

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
        <Button
          className='flex-shrink-0'
          color='primary'
          size='md'
          variant='shadow'
          onPress={handleAddTask}
        >
          <PiPlusBold size={14} />
          Создать задачу
        </Button>
      </Flex>
    </Flex>
  );
};

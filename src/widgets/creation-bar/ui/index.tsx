'use client';

import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { CreateButton } from '@/src/shared/ui/(buttons)/create-button';
import { useModal } from '@/src/shared/ui/modal';

export const CreationBar = () => {
  const [task, setTask] = useState('');
  const router = useRouter();
  const { setModal } = useModal();
  const handleAddTask = () => {
    if (task.length > 3) {
      //request
      //router.refresh();
      setModal(true);
    }
  };

  return (
    <Flex className='w-full pb-5 border-b-1 border-divider'>
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
      <CreateButton onPress={handleAddTask} />
    </Flex>
  );
};

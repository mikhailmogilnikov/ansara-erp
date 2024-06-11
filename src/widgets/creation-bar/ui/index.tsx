'use client';
import { CreateButton } from '@/src/shared/ui/(buttons)/create-button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

export const CreationBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Flex className='w-full pb-5 border-b-1'>
      <Input
        placeholder='Введите задачу'
        classNames={{
          inputWrapper: `bg-white dark:bg-zinc-800`,
          mainWrapper: `bg-white`,
        }}
        onFocus={() => setIsFocused(true)}
      />
      <CreateButton />
    </Flex>
  );
};

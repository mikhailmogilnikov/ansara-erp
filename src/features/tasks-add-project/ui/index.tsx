'use client';

import { PiPlusBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { useModal } from '@/src/shared/ui/modal';

export const TasksAddProject = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(true);
  };

  return (
    <Button className='text-[14px] shadow-base' radius='full' size='sm' onPress={handleClick}>
      <PiPlusBold />
      Добавить проект
    </Button>
  );
};

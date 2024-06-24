'use client';

import { PiPlusBold } from 'react-icons/pi';

import { AddProjectModal } from './modal';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { useModal } from '@/src/shared/ui/modal';

export const AddProject = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<AddProjectModal />);
  };

  return (
    <Button className='text-[14px] flex-shrink-0' radius='full' size='sm' onPress={handleClick}>
      <PiPlusBold />
      Добавить проект
    </Button>
  );
};

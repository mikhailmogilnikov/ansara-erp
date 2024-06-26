'use client';

import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';

import { CreateProjectForm } from './create-project-form';

import { useModal } from '@/src/shared/ui/modal';

export const TasksCreateProject = () => {
  const { setModal } = useModal();

  const handleCreate = () => {
    setModal(<CreateProjectForm />);
  };

  return (
    <Button
      className='text-[14px] flex-shrink-0 font-medium'
      color='primary'
      onPress={handleCreate}
    >
      <PiPlusBold />
      Создать проект
    </Button>
  );
};

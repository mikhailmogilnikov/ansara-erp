'use client';

import { PiPlusCircle } from 'react-icons/pi';

import { AddFinishedTaskForm } from './add-finished-task';

import { useModal } from '@/src/shared/ui/modal';

export const AddFinishedTask = () => {
  const { setModal } = useModal();
  const handleAdd = () => {
    setModal(<AddFinishedTaskForm />);
  };

  return (
    <button onClick={handleAdd}>
      <PiPlusCircle opacity={50} size={24} />
    </button>
  );
};

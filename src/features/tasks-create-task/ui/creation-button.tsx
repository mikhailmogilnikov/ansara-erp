'use client';

import { Button } from '@nextui-org/button';
import { PiPlusBold, PiPlusCircle } from 'react-icons/pi';

import { CreateTaskForm } from './create-task-form';

import { useModal } from '@/src/shared/ui/modal';
import { IEmptyTask } from '@/src/shared/model/task.type';

interface Props {
  handleCreateTask: (newTask: IEmptyTask) => void;
  isFinishedTask?: boolean;
  showUsers?: boolean;
  showProjects?: boolean;
}

export const CreationButton = ({
  handleCreateTask,
  isFinishedTask,
  showProjects,
  showUsers,
}: Props) => {
  const { setModal } = useModal();

  const handleCreate = () => {
    setModal(
      <CreateTaskForm
        handleCreateTask={handleCreateTask}
        isFinishedTask={isFinishedTask}
        showProjects={showProjects}
        showUsers={showUsers}
      />,
    );
  };

  return isFinishedTask ? (
    <button onClick={handleCreate}>
      <PiPlusCircle opacity={50} size={24} />
    </button>
  ) : (
    <Button
      className='text-[14px] shadow-base flex-shrink-0 font-medium'
      radius='full'
      size='sm'
      onPress={handleCreate}
    >
      <PiPlusBold />
      Создать задачу
    </Button>
  );
};

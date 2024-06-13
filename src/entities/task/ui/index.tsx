'use client';

import { ITask } from '../model/task.type';

import { useModal } from '@/src/shared/ui/modal';
import { Text } from '@/src/shared/ui/(layout)/text';

interface TaskI extends ITask {
  modalContent: React.ReactNode;
}

export const Task = ({ modalContent, body, id, startTime, endTime, projectId }: TaskI) => {
  const { setModal } = useModal();

  const editTask = () => {
    setModal(modalContent);
  };

  return (
    <button
      className='w-full text-start py-5 border-b-1 border-divider cursor-pointer'
      onClick={editTask}
    >
      <Text size={16}>{body}</Text>
    </button>
  );
};

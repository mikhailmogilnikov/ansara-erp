'use client';

import { ITask } from '../model/task.type';

import { useModal } from '@/src/shared/ui/modal';
import { Text } from '@/src/shared/ui/(layout)/text';

interface TaskI extends ITask {
  modalContent: React.ReactNode;
}

export const Task = ({ modalContent, body, id, startTime, endTime }: TaskI) => {
  const { setModal, setModalProps } = useModal();

  const editTask = () => {
    setModal(modalContent);
    setModalProps({ body, id, startTime, endTime });
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

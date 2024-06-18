'use client';

import { ITask } from '../model/task.type';

import { useModal } from '@/src/shared/ui/modal';
import { Text } from '@/src/shared/ui/(layout)/text';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { formatTime, getDuration } from '@/src/shared/lib/format-time';

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
      className='w-full text-start py-5 border-b-1 border-divider cursor-pointer flex justify-between'
      onClick={editTask}
    >
      <div>
        <Text size={16}>{body}</Text>
        <Text opacity={0.5} size={16}>
          {TasksProjectsListConst.find((project) => projectId === project.id)?.name}
        </Text>
      </div>
      {startTime && endTime && (
        <div>
          <Text className='text-end text-primary'>{formatTime(endTime - startTime)}</Text>
          <Text opacity={0.5} size={16}>
            {getDuration(startTime, endTime)}
          </Text>
        </div>
      )}
    </button>
  );
};

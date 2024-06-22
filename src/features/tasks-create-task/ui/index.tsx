'use client';

import { useRouter } from 'next/navigation';

import { CreationBar } from './creation-bar';
import { CreationButton } from './creation-button';

import { IEmptyTask } from '@/src/shared/model/task.type';

export interface Props {
  showUsers?: boolean;
  showProjects?: boolean;
  isButton?: boolean;
  isFinishedTask?: boolean;
}

export const TasksCreateTask = ({ showUsers, isButton, isFinishedTask, showProjects }: Props) => {
  const router = useRouter();

  const handleCreateTask = (newTask: IEmptyTask) => {
    if (newTask.body.length > 3) {
      //request
      router.refresh();
    }
  };

  return isButton ? (
    <CreationButton
      handleCreateTask={handleCreateTask}
      isFinishedTask={isFinishedTask}
      showProjects={showProjects}
      showUsers={showUsers}
    />
  ) : (
    <CreationBar handleCreateTask={handleCreateTask} showUsers={showUsers} />
  );
};

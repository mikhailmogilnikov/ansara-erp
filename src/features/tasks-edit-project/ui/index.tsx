import { Button } from '@nextui-org/button';
import { PiPencilSimpleBold } from 'react-icons/pi';

import { EditProjectForm } from './edit-project-form';

import { useModal } from '@/src/shared/ui/modal';
import { ITasksProject } from '@/src/entities/tasks-project';

export const TasksEditProject = (project: ITasksProject) => {
  const { setModal } = useModal();
  const handleEditProject = () => {
    setModal(<EditProjectForm {...project} />);
  };

  return (
    <Button isIconOnly size='sm' onPress={handleEditProject}>
      <PiPencilSimpleBold size={18} />
    </Button>
  );
};

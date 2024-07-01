import { PiPlusCircleBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectsTasksAddTask = () => {
  return (
    <Button className='w-full'>
      <PiPlusCircleBold size={20} />
      Добавить задачу
    </Button>
  );
};

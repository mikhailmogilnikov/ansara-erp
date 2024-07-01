import { PiPlusCircleBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectsAddProjectButton = () => {
  return (
    <Button className='w-full' color='primary' variant='shadow'>
      <PiPlusCircleBold size={20} />
      Создать проект
    </Button>
  );
};

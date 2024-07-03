import { PiPlusCircleBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';

type Props  = {
  actionFunc: (obj: Object) => void;
}

export const ProjectsAddProjectButton = ({ actionFunc }: Props) => {
  return (
    <Button className='w-full' color='primary' variant='shadow' onPress={actionFunc}>
      <PiPlusCircleBold size={20} />
      Создать проект
    </Button>
  );
};

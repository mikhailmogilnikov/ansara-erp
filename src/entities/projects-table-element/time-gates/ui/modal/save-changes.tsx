import { PiFloppyDiskBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectsTimegatesSaveChanges = () => {
  return (
    <>
      <Button fullWidth>Отмена</Button>
      <Button fullWidth color='success' variant='shadow'>
        <PiFloppyDiskBold size={20} />
        Сохранить изменения
      </Button>
    </>
  );
};

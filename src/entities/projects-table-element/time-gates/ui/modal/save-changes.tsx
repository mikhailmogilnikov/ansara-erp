import { PiFloppyDiskBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';

type Props = {
  handleSave: VoidFunction;
};

export const ProjectsTimegatesSaveChanges = ({ handleSave }: Props) => {
  return (
    <>
      <Button fullWidth>Отмена</Button>
      <Button fullWidth color='success' variant='shadow' onClick={handleSave}>
        <PiFloppyDiskBold size={20} />
        Сохранить изменения
      </Button>
    </>
  );
};

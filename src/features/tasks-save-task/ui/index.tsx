import { Button } from '@nextui-org/button';
import { PiTrashBold } from 'react-icons/pi';

import { Text } from '@/src/shared/ui/(layout)/text';
import { ITask } from '@/src/entities/task';

export const SaveTaskButton = (task: ITask) => {
  const handleSave = () => {};

  return (
    <Button color='primary' onPress={handleSave}>
      <PiTrashBold />
      <Text className='font-normal'>Сохранить</Text>
    </Button>
  );
};

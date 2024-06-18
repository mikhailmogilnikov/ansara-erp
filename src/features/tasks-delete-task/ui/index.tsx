import { Button } from '@nextui-org/button';
import { PiTrashBold } from 'react-icons/pi';

import { Text } from '@/src/shared/ui/(layout)/text';

export const DeleteTaskButton = ({ id }: { id: number }) => {
  const handleDelete = () => {};

  return (
    <Button onPress={handleDelete}>
      <PiTrashBold />
      <Text className='font-normal'>Удалить</Text>
    </Button>
  );
};

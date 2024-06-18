import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';

interface ICreateButton {
  onPress: () => void;
}

export const CreateTask = ({ onPress }: ICreateButton) => {
  return (
    <Button className='flex-shrink-0' color='primary' size='md' variant='shadow' onPress={onPress}>
      <PiPlusBold size={14} />
      Создать задачу
    </Button>
  );
};

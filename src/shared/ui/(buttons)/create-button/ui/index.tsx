import { PiPlusBold } from 'react-icons/pi';

import { Button } from '../../button';

interface ICreateButton {
  onPress: () => void;
}

export const CreateButton = ({ onPress }: ICreateButton) => {
  return (
    <Button className='flex-shrink-0' color='primary' size='md' variant='shadow' onPress={onPress}>
      <PiPlusBold size={14} />
      Создать задачу
    </Button>
  );
};

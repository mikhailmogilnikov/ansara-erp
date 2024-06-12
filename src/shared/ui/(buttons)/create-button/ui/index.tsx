import { Button } from '@nextui-org/button';
import { PiPlusCircle } from 'react-icons/pi';

interface ICreateButton {
  onPress: () => void;
}

export const CreateButton = ({ onPress }: ICreateButton) => {
  return (
    <Button isIconOnly onPress={onPress}>
      <PiPlusCircle size={24} />
    </Button>
  );
};

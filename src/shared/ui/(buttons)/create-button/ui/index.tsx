import { Button } from '@nextui-org/button';

interface ICreateButton {
  onPress: () => void;
}

export const CreateButton = ({ onPress }: ICreateButton) => {
  return (
    <Button className='flex-shrink-0' onPress={onPress}>
      {/* <PiPlusCircle size={24} /> */}
      Создать задачу
    </Button>
  );
};

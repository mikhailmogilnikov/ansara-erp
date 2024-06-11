import { Button } from '@nextui-org/button';
import { PiPlusCircle, PiPlusCircleBold } from 'react-icons/pi';

interface ICreateButton {}

export const CreateButton = ({}: ICreateButton) => {
  return (
    <Button isIconOnly>
      <PiPlusCircle size={24} />
    </Button>
  );
};

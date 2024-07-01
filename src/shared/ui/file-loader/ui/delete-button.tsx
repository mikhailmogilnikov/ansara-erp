import { Button } from '@nextui-org/button';
import { PiTrashBold } from 'react-icons/pi';

interface Props {
  handleDeleteFile: () => void;
}

export const DeleteButton = ({ handleDeleteFile }: Props) => {
  return (
    <Button
      isIconOnly
      className='absolute right-1 bottom-1 z-10'
      size='sm'
      onClick={handleDeleteFile}
    >
      <PiTrashBold className='text-danger' size={18} />
    </Button>
  );
};

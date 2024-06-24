import { PiTrashBold } from 'react-icons/pi';
import { TbArchive } from 'react-icons/tb';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';

export const NotesControls = () => {
  return (
    <Flex className='mt-6'>
      <Button fullWidth>
        <TbArchive size={22} />
        Перенести в архив
      </Button>
      <ButtonWithConfirm
        actionFn={() => {}}
        className='text-danger w-full'
        confirmColor='danger'
        confirmTitle='Удалить'
        description='Вы действительно хотите удалить этот проект? Это действие необратимо.'
        icon={<PiTrashBold size={20} />}
      >
        Удалить проект
      </ButtonWithConfirm>
    </Flex>
  );
};

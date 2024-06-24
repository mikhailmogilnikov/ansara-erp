import { PiPlusCircleBold, PiUserCircleBold } from 'react-icons/pi';

import { InfoBadge } from '../../../customer/ui/info-badge';

import { TableTasksList } from './task-list';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectTasksEditorModal = () => {
  return (
    <ModalWrapper title='Редактор задач'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>
      <TableTasksList />
      <Button className='w-fit'>
        <PiPlusCircleBold size={20} />
        Добавить задачу
      </Button>
    </ModalWrapper>
  );
};

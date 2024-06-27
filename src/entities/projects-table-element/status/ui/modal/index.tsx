import { PiUserCircleBold } from 'react-icons/pi';

import { InfoBadge } from '../../../customer/ui/info-badge';

import { EditableStages } from './editable-stages';
import { TableStatus } from './status';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Article } from '@/src/shared/ui/(layout)/article';

export const ProjectTasksStatusModal = () => {
  return (
    <ModalWrapper title='Редактор личного кабинета'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>
      <Article className='mb-2' title='Стадии'>
        <EditableStages />
      </Article>
      <Article className='mb-2' title='Статус'>
        <TableStatus />
      </Article>
    </ModalWrapper>
  );
};

import { PiUserCircleBold } from 'react-icons/pi';

import { InfoBadge } from '../../../customer/ui/info-badge';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectTasksStatusModal = () => {
  return (
    <ModalWrapper title='Редактор личного кабинета'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>
    </ModalWrapper>
  );
};

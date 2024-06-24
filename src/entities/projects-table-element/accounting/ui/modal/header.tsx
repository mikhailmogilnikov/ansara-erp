import { PiPhoneBold, PiPlusCircleBold, PiUserCircleBold } from 'react-icons/pi';

import { InfoBadge } from '../../../customer/ui/info-badge';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const AccountingHeader = () => {
  return (
    <Flex col>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>
      <InfoBadge icon={PiPhoneBold} title='Телефон'>
        +7 (932) 050-54-97
      </InfoBadge>
      <Button className='mt-4'>
        <PiPlusCircleBold size={20} />
        Добавить результат аккаунтинга
      </Button>
    </Flex>
  );
};

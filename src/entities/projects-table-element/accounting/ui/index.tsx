import { ProjectAccountingModal } from './modal';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { useModal } from '@/src/shared/ui/modal';

export const Accounting = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<ProjectAccountingModal />);
  };

  return (
    <button className='w-full min-w-36 h-fit text-start' type='button' onClick={handleClick}>
      <Flex col gap={0}>
        <Text className='w-full font-medium' opacity={0.5} size={15}>
          Вт, 12 декабря, 14:18
        </Text>
        <Text className='w-full line-clamp-1 font-medium' size={15}>
          Прошедший аккаунтинг, максимум в 1 строчку
        </Text>
      </Flex>
    </button>
  );
};

import { clsx } from 'clsx';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

type Props = {
  isEven: boolean;
};

export const TableElement = ({ isEven }: Props) => {
  const containerClassName = clsx('p-4 rounded-2xl min-w-[1000px] w-full', {
    'bg-default': isEven,
  });

  return (
    <Flex className={containerClassName}>
      <Flex col className='!w-40 flex-shrink-0' gap={2}>
        <Text className='line-clamp-1 font-medium' size={15}>
          Семён Рубин Авто
        </Text>
        <div className='w-6 h-2 bg-success rounded-full' />
      </Flex>

      <Text className='w-full' size={15}>
        Аккаунтинг
      </Text>
      <Text className='w-full' size={15}>
        Следующая задача
      </Text>
      <Text className='w-72 flex-shrink-0' size={15}>
        Временные рамки
      </Text>
      <Text className='w-full' size={15}>
        Отображаемый статус
      </Text>
      <Text className='w-28 flex-shrink-0' size={15}>
        Оплачено
      </Text>
      <Text className='' size={15}>
        Осталось
      </Text>
    </Flex>
  );
};

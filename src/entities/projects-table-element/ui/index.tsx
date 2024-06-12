import { clsx } from 'clsx';

import { StageProgress } from './stage-progress';
import { TimeProgress } from './time-progress';
import { PaymentProgress } from './payment-progress';
import { Accounting } from './accounting';

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
    <Flex className={containerClassName} gap={8}>
      <StageProgress />
      <Accounting />

      <Text className='w-full line-clamp-2 font-medium' size={15}>
        Пример задачи. Тест. Этот текст здесь должен отображаться максимум в 2 строчки
      </Text>

      <TimeProgress />

      <Text className='w-full line-clamp-2 font-medium' size={15}>
        Пример отображаемого статуса в ЛК. Текст должен показываться максимум в 2 строчки
      </Text>

      <PaymentProgress />
    </Flex>
  );
};

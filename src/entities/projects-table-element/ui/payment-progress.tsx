import { Progress } from '@nextui-org/progress';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const PaymentProgress = () => {
  return (
    <Flex col className='!w-44 flex-shrink-0' gap={1}>
      <Flex className='justify-between' gap={2}>
        <Text size={14}>1 500 000 ₽</Text>
        <Text size={14}>500 000 ₽</Text>
      </Flex>
      <Flex gap={2}>
        <Progress aria-label='Прогресс оплаты' color='primary' size='sm' value={70} />
      </Flex>
    </Flex>
  );
};

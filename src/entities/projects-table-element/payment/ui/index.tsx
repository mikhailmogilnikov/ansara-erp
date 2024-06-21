import { Progress } from '@nextui-org/progress';
import { ChangeEventHandler, useState } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const Payment = () => {
  const [payed, setPayed] = useState(1500000);
  const [needPay, setNeedPay] = useState(500000);

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('ru-RU')} ₽`;
  };

  const handlePayedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    setPayed(Number(value));
  };

  const handleNeedPayChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    setNeedPay(Number(value));
  };

  const progress = (payed / (needPay + payed)) * 100;

  return (
    <Flex col className='!w-44 flex-shrink-0 mt-1' gap={2}>
      <Flex className='justify-between' gap={2}>
        <input
          className='bg-transparent outline-none w-1/2 text-sm font-medium'
          value={formatCurrency(payed)}
          onChange={handlePayedChange}
        />
        <input
          className='bg-transparent outline-none w-1/2 text-sm font-medium text-right'
          value={formatCurrency(needPay)}
          onChange={handleNeedPayChange}
        />
      </Flex>
      <Flex gap={2}>
        <Progress
          aria-label='Прогресс оплаты'
          color={needPay === 0 ? 'success' : 'primary'}
          size='sm'
          value={progress}
        />
      </Flex>
    </Flex>
  );
};

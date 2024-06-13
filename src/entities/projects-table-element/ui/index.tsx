import { clsx } from 'clsx';

import { StageProgress } from './stage-progress';
import { TimeProgress } from './time-progress';
import { PaymentProgress } from './payment-progress';
import { Accounting } from './accounting';
import { TableTasks } from './tasks';
import { TableStatus } from './status';

import { Flex } from '@/src/shared/ui/(layout)/flex';

type Props = {
  isEven: boolean;
};

export const TableElement = ({ isEven }: Props) => {
  const containerClassName = clsx('p-4 rounded-2xl min-w-[1264px] w-full', {
    'bg-default': isEven,
  });

  return (
    <Flex className={containerClassName} gap={8}>
      <StageProgress />
      <Accounting />
      <TableTasks />
      <TimeProgress />
      <TableStatus />
      <PaymentProgress />
    </Flex>
  );
};

import { clsx } from 'clsx';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Accounting } from '@/src/entities/projects-table-element/accounting';
import { Customer } from '@/src/entities/projects-table-element/customer';
import { Tasks } from '@/src/entities/projects-table-element/tasks';
import { TimeGates } from '@/src/entities/projects-table-element/time-gates';
import { Status } from '@/src/entities/projects-table-element/status';
import { Payment } from '@/src/entities/projects-table-element/payment';

type Props = {
  isEven: boolean;
};

export const TableElement = ({ isEven }: Props) => {
  const containerClassName = clsx('p-4 rounded-2xl min-w-[1264px] w-full', {
    'bg-default': isEven,
  });

  return (
    <Flex className={containerClassName} gap={8}>
      <Customer />
      <Accounting />
      <Tasks />
      <TimeGates />
      <Status />
      <Payment />
    </Flex>
  );
};

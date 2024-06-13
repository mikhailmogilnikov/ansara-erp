import { Skeleton } from '@nextui-org/skeleton';

import { Flex } from '../../(layout)/flex';

import { LocalOptionsProps } from '.';

type Props = Pick<LocalOptionsProps, 'variants'>;

export const LocalOptionsSkeleton = ({ variants }: Props) => (
  <Flex className='!w-fit' gap={2}>
    {variants.map(({ id, name }) => (
      <Skeleton key={id} className='w-min px-2 h-8 rounded-full'>
        {name}
      </Skeleton>
    ))}
  </Flex>
);

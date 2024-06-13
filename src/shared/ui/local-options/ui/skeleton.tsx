import { Skeleton } from '@nextui-org/skeleton';

import { Flex } from '../../(layout)/flex';

export const LocalOptionsSkeleton = () => (
  <Flex className='!w-fit' gap={2}>
    <Skeleton className='w-20 h-8 rounded-full' />
    <Skeleton className='w-28 h-8 rounded-full' />
  </Flex>
);

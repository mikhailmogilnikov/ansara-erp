import { Progress } from '@nextui-org/progress';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const TimeProgress = () => {
  return (
    <Flex col className='!w-64 flex-shrink-0' gap={1}>
      <Flex className='justify-between' gap={2}>
        <Text size={14}>10 октября</Text>
        <Text size={14}>10 ноября</Text>
        <Text size={14}>17 ноября</Text>
      </Flex>
      <Flex gap={2}>
        <Progress aria-label='Прогресс времени' color='success' size='sm' value={100} />
        <Progress aria-label='Прогресс времени' size='sm' value={50} />
      </Flex>
    </Flex>
  );
};

import { Button } from '@nextui-org/button';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsState = () => {
  return (
    <Flex className='!w-fit' gap={2}>
      <Button className='text-[14px]' color='primary' radius='full' size='sm'>
        Активные
      </Button>
      <Button className='text-[14px]' radius='full' size='sm'>
        Завершённые
      </Button>
    </Flex>
  );
};

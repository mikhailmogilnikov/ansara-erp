import { Divider } from '@nextui-org/divider';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsFilters = () => {
  return (
    <Flex className='py-3 items-center px-4' tag='aside'>
      <Flex className='!w-min' gap={2}>
        <Button className='text-[14px]' color='primary' radius='full' size='sm'>
          Активные
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Завершённые
        </Button>
      </Flex>

      <Divider orientation='vertical' />

      <Flex className='!w-min' gap={2}>
        <Button className='text-[14px]' radius='full' size='sm'>
          Арина
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Алексей
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Родион
        </Button>
        <Button className='text-[14px]' color='primary' radius='full' size='sm'>
          Все
        </Button>
      </Flex>
    </Flex>
  );
};

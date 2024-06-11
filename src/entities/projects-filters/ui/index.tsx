import { Divider } from '@nextui-org/divider';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsFilters = () => {
  return (
    <Flex wrap className='py-4 items-center px-4' tag='aside'>
      <Flex wrap className='!w-fit' gap={2}>
        <Button className='text-[14px]' color='primary' radius='full' size='sm'>
          Активные
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Завершённые
        </Button>
      </Flex>

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <Flex wrap className='!w-fit' gap={2}>
        <Button className='text-[14px]' color='primary' radius='full' size='sm'>
          Все
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Арина
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Алексей
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Родион
        </Button>
      </Flex>
    </Flex>
  );
};

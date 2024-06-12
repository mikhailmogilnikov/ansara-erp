import { Divider } from '@nextui-org/divider';
import { PiPlusBold } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsFilters = () => {
  return (
    <Flex className='py-4 items-center px-4 overflow-x-scroll scrollbar-hide' tag='aside'>
      <Button className='text-[14px] shadow-base' radius='full' size='sm'>
        <PiPlusBold />
        Добавить проект
      </Button>

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <Flex className='!w-fit' gap={2}>
        <Button className='text-[14px]' color='primary' radius='full' size='sm'>
          Активные
        </Button>
        <Button className='text-[14px]' radius='full' size='sm'>
          Завершённые
        </Button>
      </Flex>

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <Flex className='!w-fit' gap={2}>
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

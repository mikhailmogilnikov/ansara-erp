import { Divider } from '@nextui-org/divider';
import { ReactNode } from 'react';

import { ProjectsState } from './projects-state';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';

type Props = {
  addProjectButton: ReactNode;
};

export const ProjectsFilters = ({ addProjectButton }: Props) => {
  return (
    <Flex className='py-4 items-center px-4 overflow-x-scroll scrollbar-hide' tag='aside'>
      {addProjectButton}

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <ProjectsState />

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

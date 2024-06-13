import { Divider } from '@nextui-org/divider';

import { tasksFiltersVariants } from '../config/tasks-filters-variants';

import { TasksLocalFilters } from './tasks-local-filters';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const TasksFilters = ({ addProject }: { addProject: React.ReactNode }) => {
  return (
    <Flex className='py-4 items-center px-4 overflow-x-scroll scrollbar-hide' tag='aside'>
      {addProject}

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <Flex className='!w-fit' gap={2}>
        <TasksLocalFilters localKey='tasksFilterLocalState' variants={tasksFiltersVariants} />
      </Flex>
    </Flex>
  );
};

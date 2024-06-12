import { TableHeader } from './table-header';
import { TableList } from './table-list';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsTable = () => {
  return (
    <section className='flex flex-col items-center justify-start relative px-4 py-4 h-full'>
      <TableHeader />
      <Flex
        col
        className='h-[calc(100vh-144px)] overflow-y-scroll scrollbar-hide pt-10 pb-72'
        gap={10}
      >
        <TableList />
        <TableList />
      </Flex>
    </section>
  );
};

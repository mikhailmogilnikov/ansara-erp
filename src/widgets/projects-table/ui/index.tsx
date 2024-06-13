import { TableContent } from './table-content';
import { TableHeader } from './table-header';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const ProjectsTable = () => {
  return (
    <Flex col className='items-center justify-start relative px-4 pt-4 h-[calc(100vh-128px)]'>
      <TableHeader />
      <TableContent />
    </Flex>
  );
};

import { Divider } from '@nextui-org/divider';
import { ReactNode } from 'react';

import { TaskNamesFilters, TaskStateFilters } from '../config/filters';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { LocalOptions } from '@/src/shared/ui/local-options';
import { EStorageKeys } from '@/src/shared/ui/local-options/model/options.enum';

type Props = {
  addProjectButton: ReactNode;
};

export const ProjectsFilters = ({ addProjectButton }: Props) => {
  return (
    <Flex className='py-4 items-center px-4 overflow-x-scroll scrollbar-hide' tag='aside'>
      {addProjectButton}

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <LocalOptions storageKey={EStorageKeys.PROJECTS_STATE} variants={TaskStateFilters} />

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <LocalOptions storageKey={EStorageKeys.PROJECTS_USER} variants={TaskNamesFilters} />
    </Flex>
  );
};

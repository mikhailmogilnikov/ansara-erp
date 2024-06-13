'use client';

import { ProjectsList } from './projects-list';
import { UsersList } from './users-list';

import { EStorageKeys } from '@/src/shared/ui/local-options/model/options.enum';
import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';

export const TasksPageContent = () => {
  const { filters } = useFilters();

  return (
    <div className='w-full px-5 pb-5'>
      <div className='grid grid-cols-3 gap-5 w-full'>
        {filters && filters[EStorageKeys.TASKS_STATE] === 'projects' && <ProjectsList />}
        {filters && filters[EStorageKeys.TASKS_STATE] === 'users' && <UsersList />}
      </div>
    </div>
  );
};

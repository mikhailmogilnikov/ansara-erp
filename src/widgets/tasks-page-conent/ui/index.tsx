'use client';

import { useSearchParams } from 'next/navigation';

import { ProjectsList } from './projects-list';
import { UsersList } from './users-list';

export const TasksPageContent = () => {
  const searchParams = useSearchParams();

  const filter = searchParams.get('filter');

  return filter === 'projects' ? <ProjectsList /> : <UsersList />;
};

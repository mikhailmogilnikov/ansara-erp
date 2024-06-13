'use client';

import { ProjectsList } from './projects-list';
import { UsersList } from './users-list';

export const TasksPageContent = () => {
  return (
    <>
      <ProjectsList />
      <UsersList />;
    </>
  );
};

import { AllTasksList } from '../ui/content-variants/all-tasks-list';
import { ProjectsList } from '../ui/content-variants/projects-list';
import { UsersList } from '../ui/content-variants/users-list';

export const contentVariants = {
  projects: <ProjectsList />,
  users: <UsersList />,
  allTasks: <AllTasksList />,
};

export type ContentVariantKeyType = keyof typeof contentVariants;

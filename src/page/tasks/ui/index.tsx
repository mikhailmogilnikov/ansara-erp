import { TasksFilters } from '@/src/widgets/tasks-filters';
import { TasksPageContent } from '@/src/widgets/tasks-page-conent';

export const TasksPage = () => {
  return (
    <>
      <TasksFilters />
      <TasksPageContent />
    </>
  );
};

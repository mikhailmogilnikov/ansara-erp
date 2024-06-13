import { TasksFilters } from '@/src/widgets/tasks-filters';
import { TasksAddProject } from '@/src/features/tasks-add-project';
import { TasksPageContent } from '@/src/widgets/tasks-page-conent';

export const TasksPage = () => {
  return (
    <>
      <TasksFilters addProject={<TasksAddProject />} />
      <TasksPageContent />
    </>
  );
};

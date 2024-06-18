import { TasksProject } from '@/src/entities/tasks-project';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';

export const ProjectsList = () => {
  return (
    <>
      {TasksProjectsListConst.map((project) => (
        <TasksProject {...project} key={project.id} />
      ))}
    </>
  );
};

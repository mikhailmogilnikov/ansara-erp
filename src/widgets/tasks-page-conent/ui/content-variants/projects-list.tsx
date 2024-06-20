import { TasksProject } from '@/src/entities/tasks-project';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';

export const ProjectsList = () => {
  return (
    <div className='grid grid-cols-3 gap-5 w-full'>
      {TasksProjectsListConst.map((project) => (
        <TasksProject {...project} key={project.id} />
      ))}
    </div>
  );
};

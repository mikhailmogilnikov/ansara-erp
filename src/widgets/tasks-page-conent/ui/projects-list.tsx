import { TasksProject, tasksProjects } from '@/src/entities/tasks-project';

export const ProjectsList = () => {
  return (
    <>
      {tasksProjects.map((project) => (
        <TasksProject {...project} key={project.id} />
      ))}
    </>
  );
};

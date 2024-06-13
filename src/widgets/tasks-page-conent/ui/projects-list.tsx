import { TasksProject, tasksProjects } from '@/src/entities/tasks-project';

export const ProjectsList = () => {
  return (
    <div className='w-full p-5'>
      <div className='grid grid-cols-3 gap-5 w-full'>
        {tasksProjects.map((project) => (
          <TasksProject {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

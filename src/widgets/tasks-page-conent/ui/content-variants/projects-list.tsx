import { useState } from 'react';

import { TasksProject } from '@/src/entities/tasks-project';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { AutocompleteInput } from '@/src/shared/ui/(inputs)/autocompete';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksCreateProject } from '@/src/features/tasks-create-project';
import { TasksEditProject } from '@/src/features/tasks-edit-project';

export const ProjectsList = () => {
  const [projectId, setProjectId] = useState<null | number>(null);
  const [projectList, setProjectList] = useState(TasksProjectsListConst);

  const changeProject = (value: Key | null) => {
    setProjectId(Number(value));
    if (value) {
      setProjectList(TasksProjectsListConst.filter((project) => project.id === Number(value)));
    } else setProjectList(TasksProjectsListConst);
  };

  return (
    <div className='w-full'>
      <Flex className='pb-4 border-b-1 border-divider items-center'>
        <AutocompleteInput
          placeholder='Поиск проектов'
          value={projectId}
          variants={TasksProjectsListConst.map((project) => ({
            id: project.id,
            title: project.name,
          }))}
          onChange={changeProject}
        />
        <TasksCreateProject />
      </Flex>
      {projectList.map((project) => (
        <TasksProject
          {...project}
          key={project.id}
          editButton={<TasksEditProject {...project} />}
        />
      ))}
    </div>
  );
};

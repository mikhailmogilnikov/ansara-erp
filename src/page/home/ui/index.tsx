import { ProjectsFilters } from '@/src/entities/projects-filters';
import { AddProject } from '@/src/features/projects-add-project';
import { ProjectsTable } from '@/src/widgets/projects-table';

export const HomePage = () => {
  return (
    <>
      <ProjectsFilters addProjectButton={<AddProject />} />
      <ProjectsTable />
    </>
  );
};

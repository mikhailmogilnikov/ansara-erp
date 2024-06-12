import { ProjectsFilters } from '@/src/entities/projects-filters';
import { ProjectsTable } from '@/src/widgets/projects-table';

export const HomePage = () => {
  return (
    <>
      <ProjectsFilters />
      <ProjectsTable />
    </>
  );
};

import { ProjectsAddProjectButton } from './button';
import { AddProjectForm } from './form';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const AddProjectModal = () => {
  return (
    <ModalWrapper actionButtons={<ProjectsAddProjectButton />} title='Добавить проект'>
      <AddProjectForm />
    </ModalWrapper>
  );
};

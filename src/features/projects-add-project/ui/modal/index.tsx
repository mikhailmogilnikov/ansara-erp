import { AddProjectForm } from './form';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const AddProjectModal = () => {
  return (
    <ModalWrapper title='Добавить проект'>
      <AddProjectForm />
    </ModalWrapper>
  );
};

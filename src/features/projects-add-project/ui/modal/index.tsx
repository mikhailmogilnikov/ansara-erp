import { useEffect } from 'react';

import { useAddProject } from '../../model/add-project-store';
import { validateProject } from '../../lib/validate-project';

import { ProjectsAddProjectButton } from './button';
import { AddProjectForm } from './form';

import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { ModalWrapper } from '@/src/shared/ui/modal';

export const AddProjectModal = () => {
  const { addNotification } = useNotification();
  const { project, reset } = useAddProject();

  const handleSave = () => {
    validateProject(project).then((error) => {
      if (error) {
        addNotification({ text: error, type: 'danger' });
      } else {
        addNotification({ text: 'Проект успешно создан', type: 'success' });
      }
    });
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <ModalWrapper
      actionButtons={<ProjectsAddProjectButton actionFunc={handleSave} />}
      title='Добавить проект'
    >
      <AddProjectForm actionFunc={handleSave} />
    </ModalWrapper>
  );
};

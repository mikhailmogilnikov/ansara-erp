import { NotesControls } from './controls';
import { NotesProjectInfo } from './project-info';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectNotesModal = () => {
  return (
    <ModalWrapper actionButtons={<NotesControls />} title='Заметки по проекту'>
      <NotesProjectInfo />
    </ModalWrapper>
  );
};

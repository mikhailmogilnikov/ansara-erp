import { NotesProjectInfo } from './user-info';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectNotesModal = () => {
  return (
    <ModalWrapper title='Заметки по проекту'>
      <NotesProjectInfo />
    </ModalWrapper>
  );
};

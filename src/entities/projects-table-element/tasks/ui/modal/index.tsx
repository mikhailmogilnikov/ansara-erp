import { PiUserCircleBold } from 'react-icons/pi';

import { InfoBadge } from '../../../customer/ui/info-badge';

import { TableTasksList } from './task-list';
import { ProjectsTasksAddTask } from './add-task';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectTasksEditorModal = () => {
  return (
    <ModalWrapper actionButtons={<ProjectsTasksAddTask />} title='Редактор задач'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>
      <TableTasksList />
    </ModalWrapper>
  );
};

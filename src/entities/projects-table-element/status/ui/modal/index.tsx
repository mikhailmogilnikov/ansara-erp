import { PiUserCircleBold } from 'react-icons/pi';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useEffect, useState } from 'react';

import { InfoBadge } from '../../../customer/ui/info-badge';
import { useProjectStatus } from '../../model/status-store';

import { EditableStages } from './stages/editable-stages';
import { TableStatus } from './status';
import { ProjectsEditTimeGates } from './edit-time-gates';
import { ProjectStatusMainControls } from './main-controls';
import { ProjectsStatusEditGate } from './editgate';
import { ProjectsStatusPhases } from './phases';
import { ProjectsStatusSaveChanges } from './save-changes';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Article } from '@/src/shared/ui/(layout)/article';
import { Fader } from '@/src/shared/ui/(layout)/fader';
import { FileLoaderList } from '@/src/shared/ui/file-loader';

export const ProjectTasksStatusModal = () => {
  const { data, reset } = useProjectStatus();

  const [rateImg, setRateImg] = useState<File[]>([]);
  const [imageLinks, setImageLinks] = useState([
    'https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
  ]);
  const { modulesVisibility } = data;

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <ModalWrapper actionButtons={<ProjectsStatusSaveChanges />} title='Редактор личного кабинета'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>

      <Article className='mb-2' title='Видимость модулей'>
        <ProjectStatusMainControls />
      </Article>

      <Article className='!text-medium' title='Тарифы'>
        <FileLoaderList
          isSingle
          accept='image/*'
          buttonTitle='Прикрепить изображение тарифов'
          fileList={rateImg}
          imageLinks={imageLinks}
          setFileList={setRateImg}
          setImageLinks={setImageLinks}
        />
      </Article>

      <LayoutGroup>
        <AnimatePresence>
          {modulesVisibility.stages && (
            <Fader>
              <Article className='mb-2' title='Стадии'>
                <EditableStages />
              </Article>
            </Fader>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {modulesVisibility.status && (
            <Fader>
              <Article className='mb-2' title='Статус'>
                <TableStatus />
              </Article>
            </Fader>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {modulesVisibility.editgates && (
            <Fader>
              <Article className='my-2' title='Окно правок'>
                <ProjectsStatusEditGate />
              </Article>
            </Fader>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {modulesVisibility.timegates && (
            <Fader>
              <ProjectsEditTimeGates />
            </Fader>
          )}
        </AnimatePresence>
        
        <AnimatePresence>{modulesVisibility.phases && <ProjectsStatusPhases />}</AnimatePresence>
        
      </LayoutGroup>
    </ModalWrapper>
  );
};

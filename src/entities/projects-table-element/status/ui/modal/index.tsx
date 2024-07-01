import { PiUserCircleBold } from 'react-icons/pi';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useImmer } from 'use-immer';
import { Divider } from '@nextui-org/divider';
import { useState } from 'react';

import { InfoBadge } from '../../../customer/ui/info-badge';
import { TProjectModulesVisibility } from '../../model/modules-visibility.type';

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
  const [modulesVisibility, setModulesVisibility] = useImmer<TProjectModulesVisibility>({
    stages: false,
    status: false,
    editgates: false,
    timegates: false,
    phases: true,
  });

  const [rateImg, setRateImg] = useState<File[]>([]);

  return (
    <ModalWrapper actionButtons={<ProjectsStatusSaveChanges />} title='Редактор личного кабинета'>
      <InfoBadge icon={PiUserCircleBold} title='Заказчик'>
        Семён РубинАвто
      </InfoBadge>

      <Article className='mb-2' title='Видимость модулей'>
        <ProjectStatusMainControls
          modulesVisibility={modulesVisibility}
          setModulesVisibility={setModulesVisibility}
        />
      </Article>

      <Article title='Тарифы'>
        <FileLoaderList
          isSingle
          accept='image/*'
          buttonTitle='Прикрепить изображение тарифов'
          fileList={rateImg}
          setFileList={setRateImg}
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

        <AnimatePresence>
          {modulesVisibility.phases && (
            <Fader>
              <Article className='my-2 text-xl !font-semibold !opacity-100' title='Этапы'>
                <Divider className=' mb-4' />
                <ProjectsStatusPhases />
              </Article>
            </Fader>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </ModalWrapper>
  );
};

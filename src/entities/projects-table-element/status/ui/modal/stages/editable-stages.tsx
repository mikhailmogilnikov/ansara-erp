import { Reorder } from 'framer-motion';

import { useProjectStatus } from '../../../model/status-store';

import { ProgressThumb } from './stage';
import { NewStageForm } from './new-stage';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const EditableStages = () => {
  const { data, setStages: setStage } = useProjectStatus();
  const { stages, status, activeStage } = data.stages;

  const handleClick = (item: string) => () => {
    if (item === activeStage) {
      if (status === 'complete') {
        setStage('status', 'pending25');
      } else {
        switch (status) {
          case 'pending25': {
            setStage('status', 'pending50');

            return;
          }
          case 'pending50': {
            setStage('status', 'pending75');

            return;
          }
        }
        setStage('status', 'complete');
      }

      return;
    }
    setStage('activeStage', item);
    setStage('status', 'pending25');
  };

  const setStages = (stages: string[]) => {
    setStage('stages', stages);
  };

  const activeStageIndex = stages.indexOf(activeStage);

  return (
    <Flex col gap={8}>
      <NewStageForm />
      <Reorder.Group axis='x' className='flex gap-4 w-full' values={stages} onReorder={setStages}>
        {stages.map((item, index) => {
          const getStatus = () => {
            if (index < activeStageIndex) return 'complete';
            if (index === activeStageIndex) return status as 'complete';

            return 'wait';
          };

          return (
            <Reorder.Item key={item} className='w-full h-fit' value={item}>
              <ProgressThumb status={getStatus()} value={item} onClick={handleClick(item)} />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </Flex>
  );
};

import { Reorder } from 'framer-motion';
import { useImmer } from 'use-immer';

import { TestStage } from '../../../config/test-stages';
import { TStagesStates } from '../../../model/stage.type';

import { ProgressThumb } from './stage';
import { NewStageForm } from './new-stage';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const EditableStages = () => {
  const [stagesState, setStagesState] = useImmer<TStagesStates>(TestStage);

  const { stages, status, activeStage } = stagesState;

  const handleClick = (item: string) => () => {
    if (item === activeStage) {
      setStagesState((draft) => {
        if (status === 'complete') {
          draft.status = 'pending25';
        } else {
          switch (status) {
            case 'pending25': {
              draft.status = 'pending50';

              return;
            }
            case 'pending50': {
              draft.status = 'pending75';

              return;
            }
          }
          draft.status = 'complete';
        }
      });

      return;
    }

    setStagesState((draft) => {
      draft.activeStage = item;

      draft.status = 'pending25';
    });
  };

  const setStages = (stages: string[]) => {
    setStagesState((draft) => {
      draft.stages = stages;
    });
  };

  const activeStageIndex = stages.indexOf(activeStage);

  return (
    <Flex col gap={8}>
      <NewStageForm setStagesState={setStagesState} stagesState={stagesState} />
      <Reorder.Group axis='x' className='flex gap-4 w-full' values={stages} onReorder={setStages}>
        {stages.map((item, index) => {
          const getStatus = () => {
            if (index < activeStageIndex) return 'complete';
            if (index === activeStageIndex) return status as 'complete';

            return 'wait';
          };

          return (
            <Reorder.Item key={item} className='w-full h-fit' value={item}>
              <ProgressThumb
                setStagesState={setStagesState}
                status={getStatus()}
                value={item}
                onClick={handleClick(item)}
              />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </Flex>
  );
};

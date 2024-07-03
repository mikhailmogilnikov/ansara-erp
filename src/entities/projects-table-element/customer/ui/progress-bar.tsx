import { Progress } from '@nextui-org/progress';
import { SetStateAction } from 'react';

import { TStages } from '../model/stages.type';

type Props = {
  index: number;
  stage: TStages;
  stages: TStages[];
  setStages: React.Dispatch<SetStateAction<TStages[]>>;
};

export const ProgeressBar = ({ index, stage, stages, setStages }: Props) => {
  const handleChangeStage = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newStages = [...stages];

    newStages[index].progress === 100
      ? (newStages[index].progress = 0)
      : (newStages[index].progress += 50);
    setStages(newStages);
  };

  return (
    <Progress
      key={stage.id}
      aria-label='Прогресс стадии'
      classNames={{ base: 'w-10', indicator: 'rounded-sm' }}
      color={stage.progress === 100 ? 'success' : 'primary'}
      value={stage.progress}
      onClick={(e) => handleChangeStage(e)}
    />
  );
};

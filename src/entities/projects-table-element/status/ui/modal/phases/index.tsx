import { Reorder } from 'framer-motion';
import { memo } from 'react';
import { PiPlusCircleBold } from 'react-icons/pi';

import { useProjectStatus } from '../../../model/status-store';
import { createPhase } from '../../../lib/create-phase';

import { Phase } from './phase';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectsStatusPhases = memo(() => {
  const { data, setPhases } = useProjectStatus();
  const { phases } = data;

  const handleAddPhase = () => {
    const biggestId = phases.reduce(
      (acc, { id }) => (acc < (id as number) ? (id as number) : acc),
      0,
    );

    setPhases([...phases, createPhase(biggestId)]);
  };

  return (
    <Reorder.Group axis='y' className='flex flex-col gap-8' values={phases} onReorder={setPhases}>
      {phases.map((phase, index) => {
        return (
          <Reorder.Item key={phase.id} className='w-full h-fit' value={phase}>
            <Phase index={index} phase={phase} />
          </Reorder.Item>
        );
      })}
      <Button className='w-fit' onPress={handleAddPhase}>
        <PiPlusCircleBold size={20} />
        Добавить этап
      </Button>
    </Reorder.Group>
  );
});

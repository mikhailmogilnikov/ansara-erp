import { Reorder, m } from 'framer-motion';
import { memo } from 'react';
import { PiPlusCircleBold } from 'react-icons/pi';
import { Divider } from '@nextui-org/divider';

import { useProjectStatus } from '../../../model/status-store';
import { createPhase } from '../../../lib/create-phase';

import { Phase } from './phase';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const ProjectsStatusPhases = memo(() => {
  const { data, setPhases } = useProjectStatus();
  const { phases } = data;

  const handleAddPhase = () => {
    const biggestId = phases.reduce(
      (acc, { id }) => (acc < (id as number) ? (id as number) : acc),
      0,
    );

    setPhases([createPhase(biggestId), ...phases]);
  };

  return (
    <Flex col>
      <m.div layout className='flex flex-col gap-4'>
        <Flex center>
          <Text size={24} weight={600}>
            Этапы
          </Text>
          <Button isIconOnly radius='full' size='sm' variant='light' onPress={handleAddPhase}>
            <PiPlusCircleBold size={22} />
          </Button>
        </Flex>
        <Divider className='mb-2' />
      </m.div>

      <Reorder.Group axis='y' className='flex flex-col gap-8' values={phases} onReorder={setPhases}>
        {phases.map((phase, index) => {
          return (
            <Reorder.Item key={phase.id} className='w-full h-fit' value={phase}>
              <Phase index={index} phase={phase} />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </Flex>
  );
});

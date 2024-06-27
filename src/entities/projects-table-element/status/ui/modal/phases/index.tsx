import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Phase } from './phase';

export const ProjectsStatusPhases = () => {
  const [phases, setPhases] = useState([1, 2]);

  return (
    <Reorder.Group axis='y' className='flex flex-col gap-8' values={phases} onReorder={setPhases}>
      {phases.map((item) => {
        return (
          <Reorder.Item key={item} className='w-full h-fit' value={item}>
            <Phase />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};

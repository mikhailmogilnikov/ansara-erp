import { Progress } from '@nextui-org/progress';
import { useState } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { UnitInput } from '@/src/shared/ui/(inputs)/hours-input';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';

export const ProjectsEditTimeGates = () => {
  const [hours, setHours] = useState(12);
  const [restHours, setRestHours] = useState(2);

  const progress = 100 - (restHours * 100) / hours;

  return (
    <Flex col className='mt-4'>
      <Flex center>
        <InputLabel className='!opacity-50' title='Время на правки'>
          <UnitInput initialUnit='ч' setValue={setHours} unit='hour' value={hours} />
        </InputLabel>

        <InputLabel className='text-right !opacity-50' title='Осталось'>
          <UnitInput
            className='text-right w-full bg-default rounded-[14px] h-12 px-3 outline-none shadow-sm'
            initialUnit='ч'
            setValue={setRestHours}
            unit='hour'
            value={restHours}
          />
        </InputLabel>
      </Flex>
      <Progress color={progress > 99 ? 'success' : 'primary'} value={progress} />
    </Flex>
  );
};

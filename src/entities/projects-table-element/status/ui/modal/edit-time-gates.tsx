import { Progress } from '@nextui-org/progress';

import { useProjectStatus } from '../../model/status-store';
import { TProjectTimegates } from '../../model/user-profile.type';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { UnitInput } from '@/src/shared/ui/(inputs)/hours-input';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';

export const ProjectsEditTimeGates = () => {
  const { data, setTimegates } = useProjectStatus();
  const { timegatesHours } = data;
  const { all, remain } = timegatesHours;

  const progress = 100 - (remain * 100) / all;

  const handleEdit = (id: keyof TProjectTimegates) => (number: number) => {
    setTimegates(id, number);
  };

  return (
    <Flex col className='mt-4'>
      <Flex center>
        <InputLabel className='!opacity-50' title='Время на правки'>
          <UnitInput
            aria-label='Время на правки'
            id='all'
            initialUnit='ч'
            setValue={handleEdit('all')}
            unit='hour'
            value={all}
          />
        </InputLabel>

        <InputLabel className='text-right !opacity-50' title='Осталось'>
          <UnitInput
            aria-label='Осталось'
            className='text-right w-full bg-default rounded-[14px] h-12 px-3 outline-none shadow-sm'
            id='remain'
            initialUnit='ч'
            setValue={handleEdit('remain')}
            unit='hour'
            value={remain}
          />
        </InputLabel>
      </Flex>
      <Progress color={progress > 99 ? 'success' : 'primary'} value={progress} />
    </Flex>
  );
};

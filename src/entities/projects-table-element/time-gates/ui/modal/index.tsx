import { DateValue } from '@internationalized/date';
import { useState } from 'react';

import { ProjectsTimegatesSaveChanges } from './save-changes';

import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectTasksTimeGatesModal = () => {
  const [payDate, setPayDate] = useState<Date | DateValue>(new Date());
  const [startDate, setStartDate] = useState<Date | DateValue>(new Date());
  const [endDate, setEndDate] = useState<Date | DateValue>(new Date());

  return (
    <ModalWrapper actionButtons={<ProjectsTimegatesSaveChanges />} title='Временные рамки'>
      <div className='grid grid-cols-2 gap-8 pt-4'>
        <InputLabel title='Дата первой оплаты'>
          <DatePickerInput date={payDate as Date} size='lg' onChange={setPayDate} />
        </InputLabel>

        <InputLabel title='Дата запуска первой версии'>
          <DatePickerInput date={startDate as Date} size='lg' onChange={setStartDate} />
        </InputLabel>

        <InputLabel title='Дата завершения окна правок'>
          <DatePickerInput date={endDate as Date} size='lg' onChange={setEndDate} />
        </InputLabel>
      </div>
    </ModalWrapper>
  );
};

import { DateValue } from '@internationalized/date';
import { useState } from 'react';
import { PiFloppyDiskBold } from 'react-icons/pi';

import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ModalWrapper } from '@/src/shared/ui/modal';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectTasksTimeGatesModal = () => {
  const [payDate, setPayDate] = useState<Date | DateValue>(new Date());
  const [startDate, setStartDate] = useState<Date | DateValue>(new Date());
  const [endDate, setEndDate] = useState<Date | DateValue>(new Date());

  return (
    <ModalWrapper title='Временные рамки'>
      <Flex col>
        <InputLabel title='Дата первой оплаты'>
          <DatePickerInput date={payDate as Date} size='lg' onChange={setPayDate} />
        </InputLabel>

        <InputLabel title='Дата запуска первой версии'>
          <DatePickerInput date={startDate as Date} size='lg' onChange={setStartDate} />
        </InputLabel>

        <InputLabel title='Дата завершения окна правок'>
          <DatePickerInput date={endDate as Date} size='lg' onChange={setEndDate} />
        </InputLabel>

        <Button className='mt-2' color='success' variant='shadow'>
          <PiFloppyDiskBold size={20} />
          Сохранить изменения
        </Button>
      </Flex>
    </ModalWrapper>
  );
};

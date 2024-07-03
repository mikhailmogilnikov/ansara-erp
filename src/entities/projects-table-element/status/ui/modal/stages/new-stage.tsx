import { Input } from '@nextui-org/input';
import { PiPlusCircleBold } from 'react-icons/pi';
import { FormEventHandler, useState } from 'react';

import { useProjectStatus } from '../../../model/status-store';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';

export const NewStageForm = () => {
  const { data, setStages: setStage } = useProjectStatus();
  const { stages } = data.stages;

  const [newStage, setNewStage] = useState('');
  const { addNotification } = useNotification();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (stages.length > 4) {
      addNotification({ text: 'Слишком много стадий', type: 'danger' });

      return;
    }

    if (newStage.length > 20) {
      addNotification({ text: 'Слишком длинное название', type: 'danger' });

      return;
    }

    if (newStage.length < 4) {
      addNotification({ text: 'Слишком короткое название', type: 'danger' });

      return;
    }

    const newStagesList = [...stages, newStage];

    setStage('stages', newStagesList);

    setNewStage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите название этапа'
          size='lg'
          value={newStage}
          onChange={(e) => setNewStage(e.target.value)}
        />
        <Button className='flex-shrink-0' type='submit'>
          <PiPlusCircleBold size={20} />
          Добавить этап
        </Button>
      </Flex>
    </form>
  );
};

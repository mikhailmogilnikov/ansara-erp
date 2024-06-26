import { Input } from '@nextui-org/input';
import { PiPlusCircleBold } from 'react-icons/pi';
import { FormEventHandler, useState } from 'react';
import { Updater } from 'use-immer';

import { TStagesStates } from '../../model/stage.type';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';

type Props = {
  stagesState: TStagesStates;
  setStagesState: Updater<TStagesStates>;
};

export const NewStageForm = ({ stagesState, setStagesState }: Props) => {
  const [newStage, setNewStage] = useState('');
  const { addNotification } = useNotification();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (stagesState.stages.length > 4) {
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

    setStagesState((draft) => {
      draft.stages.push(newStage);
    });

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

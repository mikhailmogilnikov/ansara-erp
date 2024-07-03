import { Input, Textarea } from '@nextui-org/input';
import { memo, useEffect, useState } from 'react';
import { DateValue } from '@internationalized/date';
import { PiCaretUpBold, PiPencilSimpleBold, PiTrashBold } from 'react-icons/pi';

import { TProjectStatusStore, useProjectStatusStore } from '../../../model/status-store';
import { IUserProfile, TProjectPhase } from '../../../model/user-profile.type';

import { ProjectsStatusPhasesLinks } from './links';

import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { Button } from '@/src/shared/ui/(buttons)/button';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { Text } from '@/src/shared/ui/(layout)/text';
import { FileLoaderList } from '@/src/shared/ui/file-loader';

type Props = {
  phase: TProjectPhase;
  index: number;
};

export const Phase = memo(({ phase, index }: Props) => {
  const editPhase = useProjectStatusStore((state: TProjectStatusStore) => state.editPhase);

  const { name, date, description, fileImages, id } = phase;

  const [isEditable, setIsEditable] = useState(false);
  const [dateInput, setDateInput] = useState<Date | DateValue>(new Date(date));

  useEffect(() => {
    if (dateInput) {
      editPhase(id, 'date', dateInput.toString());
    }
  }, [dateInput]);

  const handleSetFilelist = (filelist: File[]) => {
    editPhase(id, 'fileImages', filelist);
  };

  return isEditable ? (
    <Flex col className='border-b-1 border-divider pb-8' gap={6}>
      <InputLabel title='Заголовок'>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите название этапа'
          size='lg'
          value={name}
          onChange={(e) => editPhase(id, 'name', e.target.value)}
        />
      </InputLabel>

      <InputLabel title='Дата'>
        <DatePickerInput date={dateInput as Date} onChange={setDateInput} />
      </InputLabel>

      <InputLabel title='Описание'>
        <Textarea
          classNames={{ inputWrapper: '!bg-default min-h-24' }}
          placeholder='Введите описание этапа'
          size='lg'
          value={description}
          onChange={(e) => editPhase(id, 'description', e.target.value)}
        />
      </InputLabel>

      <InputLabel title='Фотографии'>
        <FileLoaderList
          multiple
          accept='image/*'
          buttonTitle='Добавить'
          fileList={fileImages}
          setFileList={handleSetFilelist}
        />
      </InputLabel>

      <ProjectsStatusPhasesLinks />

      <Flex>
        <Button onPress={() => setIsEditable(false)}>
          <PiCaretUpBold size={20} />
          Свернуть
        </Button>
        <ButtonWithConfirm
          actionFn={() => {}}
          className='text-danger'
          confirmColor='danger'
          confirmTitle='Удалить'
          description='Вы действительно хотите удалить этот этап? Это действие нельзя отменить.'
          icon={<PiTrashBold size={20} />}
        >
          Удалить этап
        </ButtonWithConfirm>
      </Flex>
    </Flex>
  ) : (
    <Flex col className='border-b-1 border-divider pb-8'>
      {name ? (
        <Text size={20}>{name}</Text>
      ) : (
        <Text opacity={0.5} size={20}>
          Введите название этапа
        </Text>
      )}

      <Button onPress={() => setIsEditable(true)}>
        <PiPencilSimpleBold size={20} />
        Редактировать
      </Button>
    </Flex>
  );
});

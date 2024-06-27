import { Input, Textarea } from '@nextui-org/input';
import { useState } from 'react';
import { DateValue } from '@internationalized/date';
import { PiCaretUpBold, PiPencilSimpleBold, PiPlusCircleBold, PiTrashBold } from 'react-icons/pi';

import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { Button } from '@/src/shared/ui/(buttons)/button';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { Text } from '@/src/shared/ui/(layout)/text';

export const Phase = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [date, setDate] = useState<Date | DateValue>(new Date());

  return isEditable ? (
    <Flex col className='border-b-1 border-divider pb-8' gap={6}>
      <InputLabel title='Заголовок'>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите название этапа'
          size='lg'
        />
      </InputLabel>

      <InputLabel title='Дата'>
        <DatePickerInput date={date as Date} onChange={setDate} />
      </InputLabel>

      <InputLabel title='Описание'>
        <Textarea
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите описание этапа'
          size='lg'
        />
      </InputLabel>

      <InputLabel title='Фотографии'>
        <Button>
          <PiPlusCircleBold size={20} />
          Добавить
        </Button>
      </InputLabel>

      <InputLabel title='Ссылки'>
        <Flex col>
          <Flex>
            <Input classNames={{ inputWrapper: '!bg-default' }} placeholder='URL-адрес' size='lg' />
            <Input
              classNames={{ inputWrapper: '!bg-default' }}
              placeholder='Название ссылки'
              size='lg'
            />
            <ButtonWithConfirm
              isIconOnly
              actionFn={() => {}}
              className='text-danger'
              confirmColor='danger'
              confirmTitle='Удалить'
              description='Вы действительно хотите удалить эту ссылку? Это действие нельзя отменить.'
              icon={<PiTrashBold size={20} />}
            />
          </Flex>
          <Button>
            <PiPlusCircleBold size={20} />
            Добавить
          </Button>
        </Flex>
      </InputLabel>

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
      <Text size={20}>Название этапа</Text>
      <Button onPress={() => setIsEditable(true)}>
        <PiPencilSimpleBold size={20} />
        Редактировать
      </Button>
    </Flex>
  );
};
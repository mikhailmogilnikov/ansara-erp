import { Checkbox } from '@nextui-org/checkbox';
import { useState } from 'react';
import { PiTrashBold } from 'react-icons/pi';

import { TTableTask } from '../../model/task.type';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';

type Props = { item: TTableTask };

export const TableTask = ({ item }: Props) => {
  const { name, isCompleted } = item;

  const [isChecked, setIsChecked] = useState(isCompleted);
  const [value, setValue] = useState(name);

  return (
    <Flex center className='h-16 border-b-1 border-divider' gap={2}>
      <Checkbox
        classNames={{ wrapper: 'before:border-divider' }}
        color='success'
        isSelected={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <input
        className='bg-transparent outline-none w-full font-medium h-min cursor-default'
        placeholder='Добавьте описание задачи'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Text className='flex-shrink-0' opacity={0.5}>Пн, 1 апреля</Text>
      <ButtonWithConfirm
        isIconOnly
        actionFn={() => {}}
        className='text-danger ml-1'
        confirmColor='danger'
        description={`Вы действительно хотите удалить задачу "${name}"? Это действие необратимо.`}
        icon={<PiTrashBold size={18} />}
        size='sm'
      />
    </Flex>
  );
};

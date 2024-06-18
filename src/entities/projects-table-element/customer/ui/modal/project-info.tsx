import { useImmer } from 'use-immer';
import { ChangeEventHandler, useState } from 'react';
import { Textarea } from '@nextui-org/input';

import { NotesUserVariants } from '../../config/notes-user';

import { NotesActions } from './actions';
import { NotesControls } from './controls';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';

export const NotesProjectInfo = () => {
  const userInfo = {
    name: 'Семён РубинАвто',
    phone: '',
    accounterId: 'Арина',
    login: 'client_login',
    password: 'client_password',
    stages: '2',
    description: '',
  };

  const [user, updateUser] = useImmer(userInfo);

  const handleUpdate: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.currentTarget;

    updateUser((draft) => {
      draft[id as 'name'] = value;
    });
  };

  const [value, setValue] = useState<Set<string>>(new Set([]));
  const variants = [
    { id: 'matvei', title: 'Матвей' },
    { id: 'misha', title: 'Михаил' },
  ];

  return (
    <Flex col gap={8} tag='section'>
      <div className='w-full grid sm:grid-cols-2 gap-2'>
        {NotesUserVariants.map(({ id, title, icon: Icon }) => (
          <Flex key={id} className='items-center flex-shrink-0' gap={3}>
            <Icon className='flex-shrink-0' opacity={0.5} size={22} />
            <Text className='w-24 flex-shrink-0' opacity={0.5}>
              {title}
            </Text>
            <input
              className='bg-transparent outline-none'
              id={id}
              placeholder='Введите значение'
              value={user[id]}
              onChange={handleUpdate}
            />
          </Flex>
        ))}
      </div>

      <SelectInput
        selectedVariants={value}
        variants={variants}
        onSelectionChange={(keys) => setValue(keys)}
      />

      <Textarea
        className='outline-none'
        classNames={{ inputWrapper: '!bg-default' }}
        id='description'
        maxRows={30}
        placeholder='Начните ввод заметок...'
        size='lg'
        value={user.description}
        onChange={handleUpdate}
      />
      <NotesActions />
      <NotesControls />
    </Flex>
  );
};

import { useImmer } from 'use-immer';
import { useState } from 'react';
import { Textarea } from '@nextui-org/input';

import { NotesUserVariants } from '../../config/notes-user';

import { NotesActions } from './actions';
import { NotesControls } from './controls';
import { PropertiesInput } from './properties-input';

import { Flex } from '@/src/shared/ui/(layout)/flex';
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

  const handleUpdate = (id: string, type: string) => (e: any) => {
    if (type === 'select') {
      updateUser((draft) => {
        draft[id as 'name'] = e;
      });
    } else {
      const { value } = e.currentTarget;

      updateUser((draft) => {
        draft[id as 'name'] = value;
      });
    }
  };

  const [value, setValue] = useState<Set<string>>(new Set([]));
  const variants = [
    { id: 'matvei', title: 'Матвей' },
    { id: 'misha', title: 'Михаил' },
  ];

  return (
    <Flex col gap={8} tag='section'>
      <div className='w-full grid sm:grid-cols-2 gap-2'>
        {NotesUserVariants.map(({ id, title, icon, type, variants }) => (
          <PropertiesInput
            key={id}
            icon={icon}
            title={title}
            type={type}
            value={user[id as 'name']}
            variants={variants}
            onChange={handleUpdate(id, type)}
          />
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
        onChange={handleUpdate('description', 'text')}
      />
      <NotesActions />
      <NotesControls />
    </Flex>
  );
};

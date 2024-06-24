import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';
import { Input } from '@nextui-org/input';
import { FormEventHandler, useState } from 'react';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';

export const CreateProjectForm = () => {
  const [taskName, setTaskName] = useState('');
  const [users, setUsers] = useState<number[]>([]);
  const { addNotification } = useNotification();

  const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (taskName.length < 3) {
      addNotification({ text: 'Слишком короткое название проекта', type: 'danger' });
    } else if (!users.length) {
      addNotification({ text: 'Добавьте хотя бы одного исполнителя', type: 'danger' });
    } else {
      addNotification({ text: 'Проект успешно создан', type: 'success' });
    }
  };
  const changeUser = (value: any) => {
    setUsers(!!value.currentKey ? value.currentKey.split(',').map(Number) : []);
  };

  return (
    <ModalWrapper title='Создать проект'>
      <form action='submit' className='flex flex-col gap-5' onSubmit={handleCreate}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          size='lg'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <SelectInput
          multiple
          className='max-w-full'
          placeholder='Выберите исполнителя'
          selectedVariants={users.map(String)}
          variants={TasksUsersListConst.map((user) => ({ id: user.id, title: user.name }))}
          onSelectionChange={changeUser}
        />
        <Button className='font-medium' color='primary' type='submit'>
          <PiPlusBold />
          Создать
        </Button>
      </form>
    </ModalWrapper>
  );
};

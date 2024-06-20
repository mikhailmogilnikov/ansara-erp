import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';
import { Input } from '@nextui-org/input';
import { FormEventHandler, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/select';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';

export const CreateProjectForm = () => {
  const [taskName, setTaskName] = useState('');
  const [users, setUsers] = useState<number[]>([]);
  const { addNotification } = useNotification();

  const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (taskName.length < 3) {
      addNotification({ text: 'Слишком короткое название проекта', type: 'danger' });
    }
    if (!users.length) {
      addNotification({ text: 'Добавьте хотя бы одного исполнителя', type: 'danger' });
    }
    if (taskName.length >= 3 && users.length) {
      addNotification({ text: 'Проект успешно создан', type: 'success' });
    }
  };
  const changeUser = (value: string) => {
    setUsers(!!value ? value.split(',').map(Number) : []);
  };

  return (
    <ModalWrapper title='Создать проект'>
      <form action='submit' className='flex flex-col gap-3' onSubmit={handleCreate}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Select
          aria-label='Выберете исполнителя'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          placeholder='Выберите исполнителя'
          selectionMode='multiple'
          onChange={(e) => changeUser(e.target.value)}
        >
          {TasksUsersListConst.map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
        </Select>
        <Button className='font-medium' color='primary' type='submit'>
          <PiPlusBold />
          Создать
        </Button>
      </form>
    </ModalWrapper>
  );
};

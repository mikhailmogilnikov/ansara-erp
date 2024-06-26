import { FormEventHandler, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { PiPencilSimpleBold } from 'react-icons/pi';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { ITasksProject } from '@/src/entities/tasks-project';

export const EditProjectForm = ({ name, usersIds }: ITasksProject) => {
  const [taskName, setTaskName] = useState(name);
  const [users, setUsers] = useState<number[]>(usersIds);
  const { addNotification } = useNotification();

  const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (taskName.length < 3) {
      addNotification({ text: 'Слишком короткое название проекта', type: 'danger' });
    } else if (!users.length) {
      addNotification({ text: 'Добавьте хотя бы одного исполнителя', type: 'danger' });
    } else {
      addNotification({ text: 'Проект успешно отредактирован', type: 'success' });
    }
  };
  const changeUser = (value: any) => {
    setUsers([...value]);
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
        <Button className='font-medium  mt-2' color='primary' type='submit' size='lg'>
          <PiPencilSimpleBold size={18} />
          Редактировать
        </Button>
      </form>
    </ModalWrapper>
  );
};

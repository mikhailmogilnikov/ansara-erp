import { FormEventHandler, useState } from 'react';
import { Input } from '@nextui-org/input';
import { PiPencilSimpleBold } from 'react-icons/pi';

import { ModalWrapper, useModal } from '@/src/shared/ui/modal';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { ITasksProject } from '@/src/entities/tasks-project';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const EditProjectForm = ({ name, usersIds }: ITasksProject) => {
  const { setModal } = useModal();
  const [taskName, setTaskName] = useState(name);
  const [users, setUsers] = useState<number[]>(usersIds);
  const { addNotification } = useNotification();

  const formEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleEdit();
  };
  const changeUser = (value: any) => {
    setUsers([...value]);
  };

  const handleEdit = () => {
    if (taskName.length < 3) {
      addNotification({ text: 'Слишком короткое название проекта', type: 'danger' });
    } else if (!users.length) {
      addNotification({ text: 'Добавьте хотя бы одного исполнителя', type: 'danger' });
    } else {
      addNotification({ text: 'Проект успешно отредактирован', type: 'success' });
      setModal(null);
    }
  };

  return (
    <ModalWrapper
      actionButtons={
        <Button fullWidth color='primary' type='submit' variant='shadow' onPress={handleEdit}>
          <PiPencilSimpleBold size={18} />
          Редактировать
        </Button>
      }
      title='Редактировать проект'
    >
      <form action='submit' className='flex flex-col gap-5' onSubmit={formEvent}>
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
      </form>
    </ModalWrapper>
  );
};

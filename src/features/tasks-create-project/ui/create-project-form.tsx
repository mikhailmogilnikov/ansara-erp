import { Input } from '@nextui-org/input';
import { FormEventHandler, useState } from 'react';
import { PiFloppyDiskBold } from 'react-icons/pi';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const CreateProjectForm = () => {
  const [taskName, setTaskName] = useState('');
  const [users, setUsers] = useState<number[]>([]);
  const { addNotification } = useNotification();

  const formEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleCreate();
  };

  const handleCreate = () => {
    if (taskName.length < 3) {
      addNotification({ text: 'Слишком короткое название проекта', type: 'danger' });
    } else if (!users.length) {
      addNotification({ text: 'Добавьте хотя бы одного исполнителя', type: 'danger' });
    } else {
      addNotification({ text: 'Проект успешно создан', type: 'success' });
    }
  };
  const changeUser = (value: any) => {
    setUsers([...value]);
  };

  return (
    <ModalWrapper
      actionButtons={
        <Button fullWidth color='success' type='submit' variant='shadow' onPress={handleCreate}>
          <PiFloppyDiskBold size={18} />
          Сохранить
        </Button>
      }
      title='Создать проект'
    >
      <form action='submit' className='flex flex-col gap-5' onSubmit={formEvent}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Название проекта'
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

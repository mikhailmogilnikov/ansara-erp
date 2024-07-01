'use client';

import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PiPlusBold } from 'react-icons/pi';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { ITask } from '@/src/shared/model/task.type';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { AutocompleteInput } from '@/src/shared/ui/(inputs)/autocomplete';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { Button } from '@/src/shared/ui/(buttons)/button';

interface Props {
  handleCreateTask: (newTask: Omit<ITask, 'id'>) => void;
  showUsers?: boolean;
}

export const CreationBar = ({ showUsers }: Props) => {
  const [task, setTask] = useState('');
  const router = useRouter();
  const [project, setProject] = useState<Key | null>(null);
  const [user, setUser] = useState<number | null>(null);
  const { addNotification } = useNotification();

  const handleAddTask = () => {
    if (task.length < 3) {
      addNotification({ text: 'Слишком короткая заметка', type: 'danger' });
    } else if (showUsers && !user) {
      addNotification({ text: 'Выберите исполнителя', type: 'danger' });
    } else if (!showUsers && !project) {
      addNotification({ text: 'Выберите проект', type: 'danger' });
    } else {
      //request
      addNotification({ text: 'Задача успешно создана', type: 'success' });
      router.refresh();
    }
  };

  const changeUser = (value: any) => {
    const newValue = [...value][0] ? Number([...value][0]) : null;

    setUser(newValue);
  };

  return (
    <Flex col className='w-full pb-5 border-b-1 border-divider'>
      <Input
        classNames={{
          inputWrapper: `!bg-default`,
        }}
        placeholder='Введите задачу'
        size='lg'
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <Flex className='items-center justify-between'>
        {showUsers ? (
          <SelectInput
            className='max-w-full'
            placeholder='Выберите исполнителя'
            selectedVariants={null}
            variants={TasksUsersListConst.map((project) => ({
              id: project.id,
              title: project.name,
            }))}
            onSelectionChange={changeUser}
          />
        ) : (
          <AutocompleteInput
            className='max-w-full'
            placeholder='Выберите проект'
            size='lg'
            variants={TasksProjectsListConst.map((project) => ({
              id: project.id,
              title: project.name,
            }))}
            onSelectionChange={(value) => setProject(value)}
          />
        )}
        <Button className='flex-shrink-0' color='primary' variant='shadow' onPress={handleAddTask}>
          <PiPlusBold size={14} />
          Создать задачу
        </Button>
      </Flex>
    </Flex>
  );
};

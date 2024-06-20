'use client';

import { ChangeEventHandler, FormEvent } from 'react';
import { Input } from '@nextui-org/input';
import { useImmer } from 'use-immer';
import { TimeInput } from '@nextui-org/date-input';
import { Time, parseAbsoluteToLocal } from '@internationalized/date';
import { Select, SelectItem } from '@nextui-org/select';
import { DatePicker } from '@nextui-org/date-picker';
import { Button } from '@nextui-org/button';
import { PiStorefrontBold } from 'react-icons/pi';

import { IEmptyTask } from '../model/empty-task.type';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { formatTaskDate, formatTaskTime } from '@/src/shared/lib/utils/format-tasks-data';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';

const emptyTask: IEmptyTask = {
  body: '',
  startTime: new Date().getTime(),
  endTime: new Date().getTime(),
  projectId: null,
  userId: null,
};

export const AddFinishedTaskForm = () => {
  const [newTask, setNewTask] = useImmer<IEmptyTask>(emptyTask);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
  };

  const changeBody: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTask((state) => {
      state.body = e.target.value;
    });
  };

  const changeStartTime = (e: { hour: number; minute: number }) => {
    setNewTask((state) => {
      state.startTime = formatTaskTime(e, newTask.startTime);
    });
  };

  const changeEndTime = (e: { hour: number; minute: number }) => {
    setNewTask((state) => {
      state.endTime = formatTaskTime(e, newTask.endTime);
    });
  };

  const changeProject = (projectId: number) => {
    setNewTask((state) => {
      state.projectId = projectId;
    });
  };
  const changeUser = (userId: number) => {
    setNewTask((state) => {
      state.userId = userId;
    });
  };

  const changeDate = (date: Date) => {
    if (getDateWithoutTime(date) <= getDateWithoutTime(new Date())) {
      const [newStartTime, newEndTime] = formatTaskDate(date, newTask.startTime, newTask.endTime);

      setNewTask((state) => {
        state.endTime = newEndTime;
        state.startTime = newStartTime;
      });
    }
  };

  return (
    <ModalWrapper title={newTask.hasOwnProperty('id') ? 'Редактировать задачу' : 'Создать задачу'}>
      <form action='submit' className='flex flex-col gap-3' onSubmit={handleEdit}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          value={newTask.body}
          onChange={changeBody}
        />
        <Select
          aria-label='Выберете проект'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          placeholder='Выберите проект'
          onChange={(e) => changeProject(Number(e.target.value))}
        >
          {TasksProjectsListConst.map((project) => (
            <SelectItem key={project.id}>{project.name}</SelectItem>
          ))}
        </Select>
        <Select
          aria-label='Выберете исполнителя'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          placeholder='Выберите исполнителя'
          onChange={(e) => changeUser(Number(e.target.value))}
        >
          {TasksUsersListConst.map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
        </Select>
        <Flex className='items-center'>
          <TimeInput
            aria-label='Выберете начальное время'
            className='w-fit'
            classNames={{ inputWrapper: '!bg-default' }}
            defaultValue={new Time(new Date().getHours(), new Date().getMinutes())}
            hourCycle={24}
            labelPlacement='outside'
            onChange={changeStartTime}
          />
          -
          <TimeInput
            aria-label='Выберете конечное время'
            className='w-fit'
            classNames={{ inputWrapper: '!bg-default' }}
            defaultValue={new Time(new Date().getHours(), new Date().getMinutes())}
            hourCycle={24}
            labelPlacement='outside'
            onChange={changeEndTime}
          />
          <Text className='text-primary font-normal' size={16}>
            {newTask.endTime > newTask.startTime
              ? formatTime(newTask.endTime - newTask.startTime)
              : ''}
          </Text>
        </Flex>
        <DatePicker
          isDisabled
          aria-label='Выберете дату'
          className='max-w-[165px]'
          dateInputClassNames={{ inputWrapper: '!bg-default' }}
          granularity='day'
          value={parseAbsoluteToLocal(new Date().toISOString())}
          onChange={(e) => {
            changeDate(e.toDate());
          }}
        />
        <Button className='font-medium' color='primary' size='lg' type='submit'>
          <PiStorefrontBold />
          Сохранить
        </Button>
      </form>
    </ModalWrapper>
  );
};

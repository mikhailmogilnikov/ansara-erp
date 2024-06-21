'use client';

import { ChangeEventHandler, FormEvent } from 'react';
import { Input } from '@nextui-org/input';
import { useImmer } from 'use-immer';
import { TimeInput } from '@nextui-org/date-input';
import { Time, parseAbsoluteToLocal } from '@internationalized/date';
import { Select, SelectItem } from '@nextui-org/select';
import { DatePicker } from '@nextui-org/date-picker';
import { Button } from '@nextui-org/button';
import { PiPenBold, PiTrashBold } from 'react-icons/pi';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatTime, getHours, getMins } from '@/src/shared/lib/utils/format-time';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { formatTaskDate, formatTaskTime } from '@/src/shared/lib/utils/format-tasks-data';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { ITask } from '@/src/shared/model/task.type';

interface Props {
  task: ITask;
}

export const EditTaskForm = ({ task }: Props) => {
  const [newTask, setNewTask] = useImmer(task);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleDelete = () => {};

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
    <ModalWrapper title='Редактировать задачу'>
      <form action='submit' className='flex flex-col gap-4' onSubmit={handleEdit}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          value={newTask.body}
          onChange={changeBody}
        />

        <Select
          aria-label='Выберете исполнителя'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          defaultSelectedKeys={[String(task.userId)]}
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
            defaultValue={
              task.startTime ? new Time(getHours(task.startTime), getMins(task.startTime)) : null
            }
            hourCycle={24}
            labelPlacement='outside'
            onChange={changeStartTime}
          />
          -
          <TimeInput
            aria-label='Выберете конечное время'
            className='w-fit'
            classNames={{ inputWrapper: '!bg-default' }}
            defaultValue={
              task.endTime ? new Time(getHours(task.endTime), getMins(task.endTime)) : null
            }
            hourCycle={24}
            labelPlacement='outside'
            onChange={changeEndTime}
          />
          <Text className='text-primary font-normal' size={16}>
            {newTask.endTime && newTask.startTime && newTask.endTime > newTask.startTime
              ? formatTime(newTask.endTime - newTask.startTime)
              : ''}
          </Text>
        </Flex>
        {task.endTime && (
          <DatePicker
            aria-label='Выберете дату'
            className='max-w-[165px]'
            dateInputClassNames={{ inputWrapper: '!bg-default' }}
            granularity='day'
            value={parseAbsoluteToLocal(
              newTask.endTime ? new Date(newTask.endTime).toISOString() : new Date().toISOString(),
            )}
            onChange={(e) => {
              changeDate(e.toDate());
            }}
          />
        )}
        <Flex className='items-center' gap={3}>
          <Button className='font-medium' color='primary' size='lg' type='submit'>
            <PiPenBold />
            Редактировать
          </Button>
          <ButtonWithConfirm
            actionFn={handleDelete}
            confirmColor='danger'
            description='Вы точно хотите удалить задачу?'
            icon={<PiTrashBold />}
          >
            Удалить
          </ButtonWithConfirm>
        </Flex>
      </form>
    </ModalWrapper>
  );
};

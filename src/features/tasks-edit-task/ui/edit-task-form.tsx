'use client';

import { ChangeEventHandler, FormEventHandler } from 'react';
import { Input } from '@nextui-org/input';
import { useImmer } from 'use-immer';
import { PiFloppyDiskBold, PiTrashBold } from 'react-icons/pi';
import { DateValue } from '@internationalized/date';

import { ModalWrapper, useModal } from '@/src/shared/ui/modal';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { formatTaskDate, formatTaskTime } from '@/src/shared/lib/utils/format-tasks-data';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { ITask } from '@/src/shared/model/task.type';
import { TimeInputField } from '@/src/shared/ui/(inputs)/time-input';
import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { Button } from '@/src/shared/ui/(buttons)/button';

interface Props {
  task: ITask;
}

export const EditTaskForm = ({ task }: Props) => {
  const [newTask, setNewTask] = useImmer(task);
  const { setModal } = useModal();
  const { addNotification } = useNotification();

  const formEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleEdit();
  };

  const handleEdit = () => {
    if (newTask.body.length < 3) {
      addNotification({ text: 'Слишком короткая задача', type: 'danger' });
    } else if (newTask.body.length > 100) {
      addNotification({ text: 'Слишком длинная задача', type: 'danger' });
    } else if (!newTask.userId) {
      addNotification({ text: 'Выберите исполнителя', type: 'danger' });
    } else if (newTask.startTime && newTask.endTime && newTask.startTime >= newTask.endTime) {
      addNotification({ text: 'Некорректное время', type: 'danger' });
    } else {
      setModal(null);
      addNotification({ text: 'Задача сохранена', type: 'success' });
    }
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

  const changeUser = (value: any) => {
    const newValue = [...value][0] ? Number([...value][0]) : null;

    setNewTask((prev) => ({ ...prev, userId: newValue }));
  };

  const changeDate = (date: Date | DateValue) => {
    if (getDateWithoutTime(date as Date) <= getDateWithoutTime(new Date())) {
      const [newStartTime, newEndTime] = formatTaskDate(
        date as Date,
        newTask.startTime,
        newTask.endTime,
      );

      setNewTask((state) => {
        state.endTime = newEndTime;
        state.startTime = newStartTime;
      });
    }
  };

  return (
    <ModalWrapper
      actionButtons={
        <Flex className='items-center w-full' gap={3}>
          <Button fullWidth color='primary' type='submit' variant='shadow' onPress={handleEdit}>
            <PiFloppyDiskBold size={18} />
            Сохранить
          </Button>
          <ButtonWithConfirm
            actionFn={handleDelete}
            className='text-danger  w-full'
            confirmColor='danger'
            confirmTitle='Удалить'
            description='Вы точно хотите удалить задачу? Это действие необратимо.'
            icon={<PiTrashBold size={18} />}
          >
            Удалить
          </ButtonWithConfirm>
        </Flex>
      }
      title='Редактировать задачу'
    >
      <form action='submit' className='flex flex-col gap-5' onSubmit={formEvent}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          size='lg'
          value={newTask.body}
          onChange={changeBody}
        />
        <SelectInput
          className='max-w-full'
          placeholder='Выберете исполнителя'
          selectedVariants={[String(newTask.userId)]}
          variants={TasksUsersListConst.map((project) => ({
            id: project.id,
            title: project.name,
          }))}
          onSelectionChange={changeUser}
        />
        <Flex>
          {task.endTime && (
            <DatePickerInput
              date={newTask.endTime ? new Date(newTask.endTime) : null}
              size='lg'
              onChange={changeDate}
            />
          )}
          <Flex className='items-center'>
            <TimeInputField time={newTask.startTime} onChange={changeStartTime} />
            -
            <TimeInputField time={newTask.endTime} onChange={changeEndTime} />
            <Text className='text-primary font-normal' size={16}>
              {newTask.endTime && newTask.startTime && newTask.endTime > newTask.startTime
                ? formatTime(newTask.endTime - newTask.startTime)
                : ''}
            </Text>
          </Flex>
        </Flex>
      </form>
    </ModalWrapper>
  );
};

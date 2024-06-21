import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';
import { Input } from '@nextui-org/input';
import { FormEventHandler, useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/select';
import { TimeInput } from '@nextui-org/date-input';
import { Time, parseAbsoluteToLocal } from '@internationalized/date';
import { DatePicker } from '@nextui-org/date-picker';
import { useParams } from 'next/navigation';
import { Checkbox } from '@nextui-org/checkbox';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';
import { IEmptyTask } from '@/src/shared/model/task.type';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { formatTime, getHours, getMins } from '@/src/shared/lib/utils/format-time';
import { formatTaskDate, formatTaskTime } from '@/src/shared/lib/utils/format-tasks-data';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';

interface Props {
  handleCreateTask: (newTask: IEmptyTask) => void;
  isFinishedTask?: boolean;
  showUsers?: boolean;
  showProjects?: boolean;
}

const emptyTask: IEmptyTask = {
  body: '',
  startTime: null,
  endTime: null,
  projectId: null,
  userId: null,
};

export const CreateTaskForm = ({
  handleCreateTask,
  isFinishedTask = false,
  showUsers,
  showProjects,
}: Props) => {
  const { id } = useParams();
  const [newTask, setNewTask] = useState(emptyTask);
  const [isFinished, setIsFinished] = useState(isFinishedTask);

  useEffect(() => {
    if (id) {
      if (showUsers && !showProjects) {
        setNewTask((prev) => ({ ...prev, projectId: Number(id) }));
      } else {
        setNewTask((prev) => ({ ...prev, projectId: Number(id) }));
      }
    }
  }, [id]);

  useEffect(() => {
    if (!isFinished) {
      setNewTask((prev) => ({ ...prev, startTime: null, endTime: null }));
    } else {
      setNewTask((prev) => ({
        ...prev,
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
      }));
    }
  }, [isFinished]);

  const { addNotification } = useNotification();

  const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTask.projectId && newTask.userId) {
      handleCreateTask(newTask as IEmptyTask);
    }
  };

  const changeStartTime = (e: { hour: number; minute: number }) => {
    setNewTask((prev) => ({ ...prev, startTime: formatTaskTime(e, newTask.startTime) }));
  };

  const changeEndTime = (e: { hour: number; minute: number }) => {
    setNewTask((prev) => ({ ...prev, endTime: formatTaskTime(e, newTask.endTime) }));
  };

  const changeDate = (date: Date) => {
    if (getDateWithoutTime(date) <= getDateWithoutTime(new Date())) {
      const [newStartTime, newEndTime] = formatTaskDate(date, newTask.startTime, newTask.endTime);

      setNewTask((prev) => ({ ...prev, endTime: newEndTime, startTime: newStartTime }));
    }
  };

  return (
    <ModalWrapper title='Создать задачу'>
      <form action='submit' className='flex flex-col gap-3' onSubmit={handleCreate}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          value={newTask?.body}
          onChange={(e) => setNewTask((prev) => ({ ...prev, body: e.target.value }))}
        />
        {showProjects && (
          <Select
            aria-label='Выберете проект'
            className='w-full'
            classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
            placeholder='Выберите проект'
            onChange={(e) => setNewTask((prev) => ({ ...prev, projectId: Number(e.target.value) }))}
          >
            {TasksProjectsListConst.map((project) => (
              <SelectItem key={project.id}>{project.name}</SelectItem>
            ))}
          </Select>
        )}
        {showUsers && (
          <Select
            aria-label='Выберете исполнителя'
            className='w-full'
            classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
            placeholder='Выберите исполнителя'
            onChange={(e) => setNewTask((prev) => ({ ...prev, userId: Number(e.target.value) }))}
          >
            {TasksUsersListConst.map((user) => (
              <SelectItem key={user.id}>{user.name}</SelectItem>
            ))}
          </Select>
        )}
        <Checkbox onValueChange={(value) => setIsFinished(value)}>Завершенная задача</Checkbox>
        {isFinished && (
          <>
            <Flex className='items-center'>
              <TimeInput
                aria-label='Выберете начальное время'
                className='w-fit'
                classNames={{ inputWrapper: '!bg-default' }}
                defaultValue={new Time(getHours(newTask.startTime), getMins(newTask.startTime))}
                hourCycle={24}
                labelPlacement='outside'
                onChange={changeStartTime}
              />
              -
              <TimeInput
                aria-label='Выберете конечное время'
                className='w-fit'
                classNames={{ inputWrapper: '!bg-default' }}
                defaultValue={new Time(getHours(newTask.endTime), getMins(newTask.endTime))}
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
          </>
        )}

        <Button className='font-medium' color='primary' type='submit'>
          <PiPlusBold />
          Создать
        </Button>
      </form>
    </ModalWrapper>
  );
};

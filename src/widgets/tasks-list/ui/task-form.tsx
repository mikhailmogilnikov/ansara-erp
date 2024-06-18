'use client';

import { ChangeEventHandler, FormEvent } from 'react';
import { Input } from '@nextui-org/input';
import { useImmer } from 'use-immer';
import { TimeInput } from '@nextui-org/date-input';
import { Time, parseAbsoluteToLocal } from '@internationalized/date';
import { Select, SelectItem } from '@nextui-org/select';
import { DatePicker } from '@nextui-org/date-picker';

import { ITask } from '@/src/entities/task';
import { ModalWrapper } from '@/src/shared/ui/modal';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { formatTime, getHours, getMins, getTimeStamp } from '@/src/shared/lib/format-time';
import { Text } from '@/src/shared/ui/(layout)/text';
import { DeleteTaskButton } from '@/src/features/tasks-delete-task';
import { SaveTaskButton } from '@/src/features/tasks-save-task';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';

interface EmptyTask extends Omit<ITask, 'projectId' | 'id'> {
  projectId: number | null;
}

export const TaskForm = ({
  task = {
    body: '',
    startTime: new Date().getTime(),
    endTime: new Date().getTime(),
    projectId: null,
  },
}: {
  task?: ITask | EmptyTask;
}) => {
  const [newTask, setNewTask] = useImmer(task);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
  };

  const changeBody: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTask((state) => {
      state.body = e.target.value;
    });
  };

  const changeStartTime = (e: { hour: number; minute: number }) => {
    const newStartTime = getTimeStamp(task.startTime, e);

    setNewTask((state) => {
      state.startTime = newStartTime;
    });
  };

  const changeEndTime = (e: { hour: number; minute: number }) => {
    const newEndTime = getTimeStamp(task.startTime, e);

    setNewTask((state) => {
      state.endTime = newEndTime;
    });
  };

  const changeProject = (projectId: number) => {
    setNewTask((state) => {
      state.projectId = projectId;
    });
  };

  return (
    <ModalWrapper title='Редактировать задачу'>
      <form action='submit' className='flex flex-col gap-3' onSubmit={handleEdit}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите'
          value={newTask.body}
          onChange={changeBody}
        />
        <Select
          aria-label='Выберете проект'
          className='w-full'
          classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
          defaultSelectedKeys={[String(task.projectId)]}
          placeholder='Выберите проект'
          onChange={(e) => changeProject(Number(e.target.value))}
        >
          {TasksProjectsListConst.map((project) => (
            <SelectItem key={project.id}>{project.name}</SelectItem>
          ))}
        </Select>
        <Flex className='items-center'>
          <TimeInput
            aria-label='Выберете начальное время'
            className='w-fit'
            classNames={{ inputWrapper: '!bg-default' }}
            defaultValue={new Time(getHours(task.startTime), getMins(task.startTime))}
            hourCycle={24}
            labelPlacement='outside'
            onChange={changeStartTime}
          />
          -
          <TimeInput
            aria-label='Выберете конечное время'
            className='w-fit'
            classNames={{ inputWrapper: '!bg-default' }}
            defaultValue={new Time(getHours(task.endTime), getMins(task.endTime))}
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
            className='max-w-[130px]'
            dateInputClassNames={{ inputWrapper: '!bg-default' }}
            granularity='day'
            value={parseAbsoluteToLocal(
              newTask.endTime ? new Date(newTask.endTime).toISOString() : new Date().toISOString(),
            )}
          />
        )}
        {newTask.hasOwnProperty('id') ? (
          <Flex>
            <SaveTaskButton {...(newTask as ITask)} />
            <DeleteTaskButton {...(newTask as ITask)} />
          </Flex>
        ) : (
          <></>
        )}
      </form>
    </ModalWrapper>
  );
};

import { Button } from '@nextui-org/button';
import { PiPlusBold } from 'react-icons/pi';
import { Input } from '@nextui-org/input';
import { FormEventHandler, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Checkbox } from '@nextui-org/checkbox';
import { AnimatePresence, m } from 'framer-motion';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { IEmptyTask } from '@/src/shared/model/task.type';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { formatTaskDate, formatTaskTime } from '@/src/shared/lib/utils/format-tasks-data';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TimeInputField } from '@/src/shared/ui/(inputs)/time-input';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';

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
  const { addNotification } = useNotification();

  useEffect(() => {
    if (id) {
      if (showUsers && !showProjects) {
        setNewTask((prev) => ({ ...prev, projectId: Number(id) }));
      } else {
        setNewTask((prev) => ({ ...prev, userId: Number(id) }));
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

  const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (newTask.body.length < 3) {
    }

    if (newTask.projectId && newTask.userId) {
      handleCreateTask(newTask);
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

  const changeProject = (value: { currentKey: string }) => {
    setNewTask((prev) => ({ ...prev, projectId: Number(value.currentKey) }));
  };
  const changeUser = (value: { currentKey: string }) => {
    setNewTask((prev) => ({ ...prev, userId: Number(value.currentKey) }));
  };

  return (
    <ModalWrapper title='Создать задачу'>
      <form action='submit' className='flex flex-col gap-5' onSubmit={handleCreate}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          size='lg'
          value={newTask?.body}
          onChange={(e) => setNewTask((prev) => ({ ...prev, body: e.target.value }))}
        />
        {showProjects && (
          <SelectInput
            className='max-w-full'
            placeholder='Выберите проект'
            selectedVariants={null}
            variants={TasksProjectsListConst.map((project) => ({
              id: project.id,
              title: project.name,
            }))}
            onSelectionChange={changeProject}
          />
        )}
        {showUsers && (
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
        )}
        {!isFinishedTask && (
          <Checkbox onValueChange={(value) => setIsFinished(value)}>Завершенная задача</Checkbox>
        )}
        <AnimatePresence>
          {isFinished && (
            <m.div
              animate={{ height: 100 }}
              className='w-full flex flex-col gap-3 overflow-hidden'
              exit={{ height: !isFinishedTask ? 0 : 100 }}
              initial={{ height: !isFinishedTask ? 0 : 100 }}
            >
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
              <DatePickerInput isDisabled={isFinishedTask} onChange={changeDate} />
            </m.div>
          )}
        </AnimatePresence>

        <Button className='font-medium' color='primary' type='submit' variant='shadow'>
          <PiPlusBold />
          Создать
        </Button>
      </form>
    </ModalWrapper>
  );
};

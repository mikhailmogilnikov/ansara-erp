import { Input } from '@nextui-org/input';
import { FormEventHandler, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Checkbox } from '@nextui-org/checkbox';
import { AnimatePresence, m } from 'framer-motion';
import { DateValue } from '@internationalized/date';
import { PiPlusBold } from 'react-icons/pi';

import { ModalWrapper, useModal } from '@/src/shared/ui/modal';
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
import { AutocompleteInput } from '@/src/shared/ui/(inputs)/autocomplete';
import { Button } from '@/src/shared/ui/(buttons)/button';

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
  const { setModal } = useModal();

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
      const current = new Date();

      current.setSeconds(0);
      current.setMilliseconds(0);

      setNewTask((prev) => ({
        ...prev,
        startTime: current.getTime(),
        endTime: current.getTime(),
      }));
    }
  }, [isFinished]);

  const formEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleCreate();
  };

  const handleCreate = () => {
    if (newTask.body.length < 3) {
      addNotification({ text: 'Слишком короткая задача', type: 'danger' });
    } else if (newTask.body.length > 100) {
      addNotification({ text: 'Слишком длинная задача', type: 'danger' });
    } else if (!newTask.projectId) {
      addNotification({ text: 'Выберите проект', type: 'danger' });
    } else if (!newTask.userId) {
      addNotification({ text: 'Выберите исполнителя', type: 'danger' });
    } else if (newTask.startTime && newTask.endTime && newTask.startTime >= newTask.endTime) {
      addNotification({ text: 'Некорректное время', type: 'danger' });
    } else {
      setModal(null);
      addNotification({ text: 'Задача создана', type: 'success' });
      handleCreateTask(newTask);
    }
  };

  const changeStartTime = (e: { hour: number; minute: number }) => {
    setNewTask((prev) => ({ ...prev, startTime: formatTaskTime(e, newTask.startTime) }));
  };

  const changeEndTime = (e: { hour: number; minute: number }) => {
    setNewTask((prev) => ({ ...prev, endTime: formatTaskTime(e, newTask.endTime) }));
  };

  const changeDate = (date: Date | DateValue) => {
    if (getDateWithoutTime(date as Date) <= getDateWithoutTime(new Date())) {
      const [newStartTime, newEndTime] = formatTaskDate(
        date as Date,
        newTask.startTime,
        newTask.endTime,
      );

      setNewTask((prev) => ({ ...prev, endTime: newEndTime, startTime: newStartTime }));
    }
  };

  const changeProject = (value: any) => {
    setNewTask((prev) => ({ ...prev, projectId: value }));
  };
  const changeUser = (value: any) => {
    const newValue = [...value][0] ? Number([...value][0]) : null;

    setNewTask((prev) => ({ ...prev, userId: newValue }));
  };

  return (
    <ModalWrapper
      actionButtons={
        <Button fullWidth color='primary' type='submit' variant='shadow' onPress={handleCreate}>
          <PiPlusBold size={18} />
          Создать
        </Button>
      }
      title='Создать задачу'
    >
      <form action='submit' className='flex flex-col gap-5' onSubmit={formEvent}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите задачу'
          size='lg'
          value={newTask?.body}
          onChange={(e) => setNewTask((prev) => ({ ...prev, body: e.target.value }))}
        />
        {showProjects && (
          <AutocompleteInput
            className='max-w-full'
            placeholder='Выберите проект'
            size='lg'
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
          <Checkbox
            classNames={{ wrapper: 'before:border-divider' }}
            onValueChange={(value) => setIsFinished(value)}
          >
            Завершенная задача
          </Checkbox>
        )}
        <AnimatePresence>
          {isFinished && (
            <m.div
              animate={{ maxHeight: '100%' }}
              className='w-full flex gap-5 overflow-hidden'
              exit={{ maxHeight: !isFinishedTask ? 0 : '100%' }}
              initial={{ maxHeight: !isFinishedTask ? 0 : '100%' }}
              transition={{ ease: 'linear' }}
            >
              <DatePickerInput
                date={newTask.endTime ? new Date(newTask.endTime) : new Date()}
                isDisabled={isFinishedTask}
                onChange={changeDate}
              />
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
            </m.div>
          )}
        </AnimatePresence>
      </form>
    </ModalWrapper>
  );
};

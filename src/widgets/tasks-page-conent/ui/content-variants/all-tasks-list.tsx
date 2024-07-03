import { useEffect, useState } from 'react';

import { countSumTime } from '../../lib/utils/count-sum-time';
import { getTasksWithDate } from '../../lib/utils/get-tasks-with-date';
import { ItasksWithDate } from '../../model/tasks-with-date.type';
import { filterTasksByDate } from '../../lib/utils/filter-tasks-by-date';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import {
  AllTasksFiltersI,
  DateDurationI,
  FilterAllTasks,
} from '@/src/features/tasks-filter-all-tasks';
import { EStorageKeys } from '@/src/shared/ui/local-options/model/options.enum';
import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';
import { TasksListConst } from '@/src/shared/config/tasks-list-const';
import { Task } from '@/src/entities/task';
import { Text } from '@/src/shared/ui/(layout)/text';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { formatDate } from '@/src/shared/lib/utils/format-date';
import { EditTask } from '@/src/features/tasks-edit-task';
import { ITask } from '@/src/shared/model/task.type';

export const AllTasksList = () => {
  const [projectFilters, setProjectFilters] = useState<number>();
  const [usersFilters, setUsersFilters] = useState<number[]>();
  const [dateFilters, setDateFilters] = useState<DateDurationI | null>();
  const [sumTime, setSumTime] = useState(0);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(TasksListConst);
  const [tasksWithDate, setTasksWithDate] = useState<ItasksWithDate[]>([]);
  const { filters } = useFilters();

  useEffect(() => {
    if (filters && filters[EStorageKeys.ALL_TASKS_STATE]) {
      const currentFilters = JSON.parse(filters[EStorageKeys.ALL_TASKS_STATE]) as AllTasksFiltersI;

      if (currentFilters) {
        setProjectFilters(Number(currentFilters.projectId));
        setUsersFilters(currentFilters.users.map((userId) => Number(userId)));
        setDateFilters(currentFilters.dateDuration);
      }
    }
  }, [filters]);

  useEffect(() => {
    let filteredTasks: ITask[] = TasksListConst;

    if (projectFilters) {
      filteredTasks = filteredTasks.filter((task) => task.projectId === projectFilters);
    }
    if (usersFilters?.length) {
      filteredTasks = filteredTasks.filter((task) => usersFilters.includes(task.userId));
    }
    if (dateFilters) {
      filteredTasks = filterTasksByDate(filteredTasks, dateFilters);
    }
    setFilteredTasks(filteredTasks);
    setTasksWithDate(getTasksWithDate(filteredTasks));
    setSumTime(countSumTime(filteredTasks));
  }, [projectFilters, usersFilters, dateFilters]);

  return (
    <Flex col className='w-full' gap={2}>
      <Flex className='items-center justify-between'>
        <div className='w-full max-w-[70%]'>
          <FilterAllTasks storageKey={EStorageKeys.ALL_TASKS_STATE} />
        </div>
        {!!sumTime && (
          <div className='text-right h-10'>
            <Text className='text-nowrap' opacity={0.5} size={14}>
              Суммарное время
            </Text>
            <Text className='text-primary'>{formatTime(sumTime)}</Text>
          </div>
        )}
      </Flex>
      {tasksWithDate.map((date) => (
        <div key={date.date}>
          <Flex className='w-full border-b-1 mt-8 pb-4 border-divider'>
            <Text size={20}>{formatDate(new Date(date.date))} -</Text>
            <Text className='text-primary -ml-3' size={20}>
              {formatTime(date.time)}
            </Text>
          </Flex>
          {date.tasks.map((task) => (
            <EditTask key={task.id} task={task}>
              <Task {...task} isLarge />
            </EditTask>
          ))}
        </div>
      ))}
      {!filteredTasks.length && <Text tag='h1'>Нет таких задач</Text>}
    </Flex>
  );
};

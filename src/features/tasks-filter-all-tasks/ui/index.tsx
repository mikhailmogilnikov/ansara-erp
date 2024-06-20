import { Select, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';

import { lastMonthsPairs } from './lib/get-date-filter-data';

import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';

interface allTasksFiltersI {
  projects: string[];
  users: string[];
  dateDuration: string[];
}

const emptyFilters = {
  projects: [],
  users: [],
  dateDuration: [],
};

export const FilterAllTasks = ({ storageKey }: { storageKey: string }) => {
  const { filters, setFilters } = useFilters();
  const [allTasksFilters, setAllTasksFilters] = useState<allTasksFiltersI | null>(null);

  useEffect(() => {
    if (filters) {
      const initial = filters[storageKey] ? JSON.parse(filters[storageKey]) : emptyFilters;

      if (!allTasksFilters) {
        setAllTasksFilters(initial);
      }
    }
  }, [filters]);

  useEffect(() => {
    if (allTasksFilters) {
      setNewFilters();
    }
  }, [allTasksFilters]);

  const setNewFilters = () => {
    if (filters) {
      setFilters({ ...filters, [storageKey]: JSON.stringify(allTasksFilters) });
    }
  };

  const resetFilters = () => {
    setAllTasksFilters(emptyFilters);
  };

  const changeProjects = (value: string[]) => {
    setAllTasksFilters((prev) => prev && { ...prev, projects: value[0] ? value : [] });
  };
  const changeUsers = (value: string[]) => {
    setAllTasksFilters((prev) => prev && { ...prev, users: value[0] ? value : [] });
  };
  const changeDateDuration = (value: string[]) => {
    setAllTasksFilters((prev) => prev && { ...prev, dateDuration: value[0] ? value : [] });
  };

  return (
    <Flex className='w-full'>
      <Select
        multiple
        aria-label='Все проекты'
        className='w-full'
        classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
        placeholder='Все проекты'
        selectedKeys={allTasksFilters?.projects}
        selectionMode='multiple'
        onChange={(e) => changeProjects(e.target.value.split(','))}
      >
        {TasksProjectsListConst.map((project) => (
          <SelectItem key={project.id}>{project.name}</SelectItem>
        ))}
      </Select>
      <Select
        multiple
        aria-label='Все исполнители'
        className='w-full'
        classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
        placeholder='Все исполнители'
        selectedKeys={allTasksFilters?.users}
        selectionMode='multiple'
        onChange={(e) => changeUsers(e.target.value.split(','))}
      >
        {TasksUsersListConst.map((user) => (
          <SelectItem key={user.id}>{user.name}</SelectItem>
        ))}
      </Select>

      <Select
        multiple
        aria-label='Дата'
        className='w-full'
        classNames={{ innerWrapper: 'py-0', trigger: '!bg-default' }}
        placeholder='Дата'
        selectedKeys={allTasksFilters?.dateDuration}
        selectionMode='multiple'
        onChange={(e) => changeDateDuration(e.target.value.split(','))}
      >
        {lastMonthsPairs.map((date) => (
          <SelectItem key={date.date}>{date.date}</SelectItem>
        ))}
      </Select>

      <Button onPress={resetFilters}>Сбросить</Button>
    </Flex>
  );
};

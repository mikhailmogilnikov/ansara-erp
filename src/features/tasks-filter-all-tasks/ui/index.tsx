import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';

import { AllTasksFiltersI } from '../model/all-tasks-filters.type';

import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { AutocompleteInput } from '@/src/shared/ui/(inputs)/autocomplete';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { DateRangePickerInput } from '@/src/shared/ui/(inputs)/date-range-picker';
import { TDateRange } from '@/src/shared/model/date-range.type';

const yesterday = new Date(Date.now() - 86400000);

const emptyFilters = {
  projectId: null,
  users: [],
  dateDuration: {
    start: yesterday.toISOString().slice(0, 10),
    end: new Date().toISOString().slice(0, 10),
  },
};

export const FilterAllTasks = ({ storageKey }: { storageKey: string }) => {
  const { filters, setFilters } = useFilters();
  const [allTasksFilters, setAllTasksFilters] = useState<AllTasksFiltersI | null>(null);

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

  const changeProject = (value: Key | null) => {
    setAllTasksFilters((prev) => prev && { ...prev, projectId: Number(value) });
  };
  const changeUsers = (value: any) => {
    setAllTasksFilters((prev) => prev && { ...prev, users: [...value] });
  };
  const changeDateDuration = (value: TDateRange) => {
    setAllTasksFilters(
      (prev) =>
        prev && {
          ...prev,
          dateDuration: value,
        },
    );
  };

  return (
    <Flex className='w-full'>
      <AutocompleteInput
        placeholder='Все проекты'
        selectedKey={String(allTasksFilters?.projectId)}
        variants={TasksProjectsListConst.map((project) => ({
          id: project.id,
          title: project.name,
        }))}
        onSelectionChange={changeProject}
      />

      <SelectInput
        multiple
        classNames={{ mainWrapper: 'w-72', trigger: '!bg-default' }}
        placeholder='Выберите исполнителей'
        selectedVariants={allTasksFilters?.users}
        size='md'
        variants={TasksUsersListConst.map((user) => ({ id: user.id, title: user.name }))}
        onSelectionChange={changeUsers}
      />

      <DateRangePickerInput
        range={
          allTasksFilters && allTasksFilters.dateDuration
            ? {
                start: allTasksFilters.dateDuration.start,
                end: allTasksFilters.dateDuration.end,
              }
            : null
        }
        onChangeRange={changeDateDuration}
      />

      <Button className='px-4 flex-shrink-0' onPress={resetFilters}>
        Сбросить
      </Button>
    </Flex>
  );
};

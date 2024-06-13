'use client';

import { Button } from '@nextui-org/button';

import { ITasksFiltersVariants } from '../model/tasks-filters.type';

import { Flex } from '@/src/shared/ui/(layout)/flex';

interface TasksLocalFiltersI {
  localKey: string;
  variants: ITasksFiltersVariants[];
}

export const TasksLocalFilters = ({ localKey, variants }: TasksLocalFiltersI) => {
  const handleSwitch = (name: string) => {};

  return (
    <Flex className='!w-fit' gap={2}>
      {variants.map(({ id, name }) => (
        <Button
          key={id}
          className='text-[14px]'
          radius='full'
          size='sm'
          onPress={() => handleSwitch(name)}
        >
          {name}
        </Button>
      ))}
    </Flex>
  );
};

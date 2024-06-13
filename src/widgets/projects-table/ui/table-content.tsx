'use client';

import { Spinner } from '@nextui-org/spinner';

import { TableList } from './table-list';

import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { EStorageKeys } from '@/src/shared/ui/local-options/model/options.enum';

export const TableContent = () => {
  const { filters } = useFilters();

  if (!filters) {
    return (
      <Flex className='mt-20 items-center justify-center'>
        <Spinner />
      </Flex>
    );
  }

  return (
    <Flex col className='overflow-y-scroll overflow-x-visible scrollbar-hide pt-10 pb-72' gap={10}>
      {filters[EStorageKeys.PROJECTS_USER] === 'all' ? (
        <>
          <TableList user='Арина' />
          <TableList user='Алексей' />
        </>
      ) : (
        <TableList />
      )}
    </Flex>
  );
};

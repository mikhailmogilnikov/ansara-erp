'use client';

import { Button } from '@nextui-org/button';
import { useEffect } from 'react';

import { useFilters } from '../model/filters-store';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TFilter } from '@/src/shared/model/default.type';

type Props = {
  variants: TFilter[];
  storageKey: string;
};

export const LocalOptionsComponent = ({ variants, storageKey }: Props) => {
  const { filters, setFilters } = useFilters();

  useEffect(() => {
    if (filters && !filters[storageKey]) {
      setFilters({ [storageKey]: variants[0].id });
    }
  }, []);

  const handleClick = (e: any) => {
    if (filters) {
      setFilters({ ...filters, [storageKey]: e.target.id });
    }
  };

  return (
    <Flex className='!w-fit' gap={2}>
      {variants.map(({ id, name }) => (
        <Button
          key={id}
          className='text-[14px] font-medium'
          color={filters?.[storageKey] === id ? 'primary' : 'default'}
          id={id}
          radius='full'
          size='sm'
          onPress={handleClick}
        >
          {name}
        </Button>
      ))}
    </Flex>
  );
};

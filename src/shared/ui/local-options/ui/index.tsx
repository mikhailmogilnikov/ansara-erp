'use client';

import { Button } from '@nextui-org/button';
import { useLocalStorage } from 'react-use';
import { useEffect } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TFilter, TLocalOptions } from '@/src/shared/model/default.type';

type Props = {
  variants: TFilter[];
  storageKey: string;
};

export const LocalOptionsComponent = ({ variants, storageKey }: Props) => {
  const [filtersParams, setFiltersParams] = useLocalStorage<TLocalOptions>('filters-params', {});

  useEffect(() => {
    if (filtersParams && !filtersParams[storageKey]) {
      setFiltersParams({ [storageKey]: variants[0].id });
    }
  }, []);

  const handleClick = (e: any) => {
    if (filtersParams) {
      setFiltersParams({ ...filtersParams, [storageKey]: e.target.id });
    }
  };

  return (
    <Flex className='!w-fit' gap={2}>
      {variants.map(({ id, name }) => (
        <Button
          key={id}
          className='text-[14px] font-medium'
          color={filtersParams?.[storageKey] === id ? 'primary' : 'default'}
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

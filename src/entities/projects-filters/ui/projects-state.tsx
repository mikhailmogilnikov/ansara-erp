'use client';

import { Button } from '@nextui-org/button';
import { useLocalStorage } from 'react-use';

import { Filter } from '../config/filters';

import { Flex } from '@/src/shared/ui/(layout)/flex';

type Props = {
  variants: Filter[];
  key: string;
};

export const LocalFilter = ({ variants, key }: Props) => {
  const [filtersParams, setFiltersParams] = useLocalStorage<{ [key: string]: string }>(
    'filters-params',
    {},
  );

  const handleClick = (e: any) => {
    if (filtersParams) {
      console.log(filtersParams.variants);
    }
  };

  return (
    <Flex className='!w-fit' gap={2}>
      {variants.map(({ id, name }) => (
        <Button
          key={id}
          className='text-[14px] font-medium'
          // color={query === id ? 'primary' : 'default'}
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

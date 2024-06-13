'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { useFilters } from '../../ui/local-options/model/filters-store';
import { TLocalOptions } from '../../model/default.type';
import { ELocalStorageKeys } from '../../model/public.enum';

type Props = PropsWithChildren;

export const FilterProvider = ({ children }: Props) => {
  const [filtersParams] = useLocalStorage<TLocalOptions>(ELocalStorageKeys.FILTERS_PARAMS, {});
  const { setFilters } = useFilters();

  useEffect(() => {
    if (filtersParams) {
      setFilters(filtersParams);
    }
  }, []);

  return children;
};

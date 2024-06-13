'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { useFilters } from '../../ui/local-options/lib/store/filters-store';

type Props = PropsWithChildren;

export const FilterProvider = ({ children }: Props) => {
  const [filtersParams] = useLocalStorage<{ [key: string]: string }>('filters-params', {});
  const { setFiltersOptions } = useFilters();

  useEffect(() => {
    if (filtersParams) {
      setFiltersOptions(filtersParams);
    }
  }, []);

  return children;
};

'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { useFilters } from '../../ui/local-options/model/filters-store';

type Props = PropsWithChildren;

export const FilterProvider = ({ children }: Props) => {
  const [filtersParams] = useLocalStorage<{ [key: string]: string }>('filters-params', {});
  const { setFilters } = useFilters();

  useEffect(() => {
    if (filtersParams) {
      setFilters(filtersParams);
    }
  }, []);

  return children;
};

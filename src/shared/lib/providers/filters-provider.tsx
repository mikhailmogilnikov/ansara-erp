'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

type Props = PropsWithChildren;

export const FilterProvider = ({ children }: Props) => {
  const [filtersParams] = useLocalStorage<{ [key: string]: string }>('filters-params', {});

  useEffect(() => {
    if (!filtersParams) {
    }
  }, []);

  return children;
};

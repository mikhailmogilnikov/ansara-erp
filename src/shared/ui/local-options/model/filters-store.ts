import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { TLocalOptions } from '@/src/shared/model/default.type';

interface FiltersStateI {
  filters: TLocalOptions | null;
  setFilters: (filters: TLocalOptions) => void;
}

export const useFiltersStore = create<FiltersStateI>()(
  devtools(
    immer((set) => ({
      filters: null,
      setFilters: (value) =>
        set((state) => {
          state.filters = value;
          localStorage.setItem('filters-params', JSON.stringify(value || ''));
        }),
    })),
  ),
);

export const useFilters = () => {
  return useFiltersStore((state) => state);
};

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { TLocalOptions } from '@/src/shared/model/default.type';

interface FiltersStateI {
  filtersOptions: TLocalOptions | null;
  setFiltersOptions: (filters: TLocalOptions) => void;
}

export const useFiltersStore = create<FiltersStateI>()(
  devtools(
    immer((set) => ({
      filtersOptions: null,
      setFiltersOptions: (value) =>
        set((state) => {
          state.filtersOptions = value;
          localStorage.setItem('filters-params', JSON.stringify(value || ''));
        }),
    })),
  ),
);

export const useFilters = () => {
  return useFiltersStore((state) => state);
};

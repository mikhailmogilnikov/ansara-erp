'use client';

import { ContentVariantKeyType, contentVariants } from '../lib/content-variants';

import { EStorageKeys } from '@/src/shared/ui/local-options/model/options.enum';
import { useFilters } from '@/src/shared/ui/local-options/model/filters-store';

export const TasksPageContent = () => {
  const { filters } = useFilters();

  const renderContent = () => {
    const filterKey = filters && (filters[EStorageKeys.TASKS_STATE] as ContentVariantKeyType);

    return filterKey ? contentVariants[filterKey] : null;
  };

  return <div className='w-full px-5 pb-5'>{renderContent()}</div>;
};

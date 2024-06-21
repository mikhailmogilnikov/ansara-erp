import { parseDate } from './parseDate';

import { AllTasksFiltersI } from '@/src/features/tasks-filter-all-tasks';

export const formatDateFilters = (currentFilters: AllTasksFiltersI) => {
  return currentFilters.dateDuration.map((date) => {
    const dutation = date.split(' - ');

    if (dutation.length === 1) {
      return {
        startDate: null,
        endDate: parseDate(dutation[0].slice(3)),
      };
    } else {
      return {
        startDate: parseDate(dutation[0]),
        endDate: parseDate(dutation[1]),
      };
    }
  });
};

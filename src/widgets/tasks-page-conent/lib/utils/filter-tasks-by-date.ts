import { dateFiltersI } from '../../model/date-filters.type';

import { ITask } from '@/src/shared/model/task.type';

export const filterTasksByDate = (filteredTasks: ITask[], dateFilters: dateFiltersI[]) => {
  return filteredTasks.filter((task) => {
    let isIn = false;

    const taskTime = task.endTime || new Date().getTime();

    dateFilters.forEach((duration) => {
      if (!duration.startDate) {
        if (taskTime < duration.endDate) {
          isIn = true;
        }
      } else {
        if (taskTime < duration.endDate && taskTime > duration.startDate) {
          isIn = true;
        }
      }
    });

    return isIn;
  });
};

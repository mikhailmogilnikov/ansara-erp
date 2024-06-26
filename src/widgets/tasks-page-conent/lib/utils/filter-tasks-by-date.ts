import { DateDurationI } from '@/src/features/tasks-filter-all-tasks';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { ITask } from '@/src/shared/model/task.type';

export const filterTasksByDate = (filteredTasks: ITask[], dateFilters: DateDurationI) => {
  return filteredTasks.filter((task) => {
    if (!task.endTime) {
      return (
        getDateWithoutTime(new Date()).getTime() <=
          getDateWithoutTime(new Date(dateFilters.end)).getTime() &&
        getDateWithoutTime(new Date()).getTime() >=
          getDateWithoutTime(new Date(dateFilters.start)).getTime()
      );
    } else {
      return (
        getDateWithoutTime(new Date(task.endTime)).getTime() <=
          getDateWithoutTime(new Date(dateFilters.end)).getTime() &&
        getDateWithoutTime(new Date(task.endTime)).getTime() >=
          getDateWithoutTime(new Date(dateFilters.start)).getTime()
      );
    }
  });
};

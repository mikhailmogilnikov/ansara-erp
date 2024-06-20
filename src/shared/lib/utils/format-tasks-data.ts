import { getHours, getMins } from '@/src/shared/lib/utils/format-time';

export const formatTaskTime = (
  time: { hour: number; minute: number },
  currentTime: number | null,
) => {
  const newTime = currentTime ? new Date(currentTime) : new Date();

  time ? newTime.setHours(time.hour) : newTime.setHours(0);
  time ? newTime.setMinutes(time.minute) : newTime.setMinutes(0);
  newTime.setSeconds(0);
  newTime.setMilliseconds(0);

  return newTime.getTime();
};

export const formatTaskDate = (date: Date, startTime: number | null, endTime: number | null) => {
  const newEndTime = new Date(date);
  const newStartTime = new Date(date);

  newEndTime.setHours(getHours(endTime));
  newEndTime.setMinutes(getMins(endTime));
  newEndTime.setSeconds(0);
  newEndTime.setMilliseconds(0);
  newStartTime.setHours(getHours(startTime));
  newStartTime.setMinutes(getMins(startTime));
  newStartTime.setSeconds(0);
  newStartTime.setMilliseconds(0);

  return [newStartTime.getTime(), newEndTime.getTime()];
};

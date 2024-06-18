export const formatTime = (time: number): string => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  if (hours) {
    return `${hours} ч ${minutes} м`;
  } else return `${minutes} м`;
};

export const getHours = (time: number | null) => {
  if (time) {
    const date = new Date(time);
    const hours = date.getHours();

    return hours;
  } else return 0;
};
export const getMins = (time: number | null) => {
  if (time) {
    const date = new Date(time);
    const minutes = date.getMinutes();

    return minutes;
  } else return 0;
};

export const getTimeStamp = (time: number | null, newTime: { hour: number; minute: number }) => {
  const newTimeStamp = time ? new Date(time) : new Date();

  newTimeStamp.setUTCHours(newTime.hour);
  newTimeStamp.setUTCMinutes(newTime.minute);
  newTimeStamp.setUTCSeconds(0);
  newTimeStamp.setUTCMilliseconds(0);

  return newTimeStamp.getTime();
};

const padZero = (num: number) => (num < 10 ? `0${num}` : num);

export const getDuration = (start: number, end: number) => {
  const startHours = padZero(new Date(start).getUTCHours());
  const startMins = padZero(new Date(start).getUTCMinutes());
  const endHours = padZero(new Date(end).getUTCHours());
  const endMins = padZero(new Date(end).getUTCMinutes());

  return `${startHours}:${startMins} - ${endHours}:${endMins}`;
};

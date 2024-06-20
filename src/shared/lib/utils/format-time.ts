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

const padZero = (num: number) => (num < 10 ? `0${num}` : num);

export const getDuration = (start: number, end: number) => {
  const startHours = padZero(new Date(start).getHours());
  const startMins = padZero(new Date(start).getMinutes());
  const endHours = padZero(new Date(end).getHours());
  const endMins = padZero(new Date(end).getMinutes());

  return `${startHours}:${startMins} - ${endHours}:${endMins}`;
};

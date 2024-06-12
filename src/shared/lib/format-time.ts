export const formatTime = (time: number): string => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  if (hours) {
    return `${hours} ч ${minutes} м`;
  } else return `${minutes} м`;
};

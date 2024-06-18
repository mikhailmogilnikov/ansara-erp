export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  };
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  return formattedDate;
};

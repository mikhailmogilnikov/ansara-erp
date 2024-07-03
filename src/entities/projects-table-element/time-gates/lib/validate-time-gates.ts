export const ValidateTimeGates = (payDate: Date, startDate: Date, endDate: Date) => {
  if (startDate < payDate)
    return 'Дата запуска первой версии не может быть раньше даты первой оплаты';
  if (endDate < startDate)
    return 'Дата завершения окна правок не может быть раньше дата запуска первой версии';

  return null;
};

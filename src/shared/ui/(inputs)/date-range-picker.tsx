import { DateRangePicker, DateRangePickerProps } from '@nextui-org/date-picker';
import { parseDate } from '@internationalized/date';

import { getDateWithoutTime } from '../../lib/utils/get-date-without-time';
import { TDateRange } from '../../model/date-range.type';

type Props = {
  range: TDateRange | null;
  onChangeRange: (value: TDateRange) => void;
} & DateRangePickerProps;

export const DateRangePickerInput = ({ range, onChangeRange }: Props) => {
  return (
    <DateRangePicker
      hideTimeZone
      aria-label='dade-range-picker'
      classNames={{ inputWrapper: '!bg-default' }}
      value={
        range
          ? {
              start: parseDate(range.start),
              end: parseDate(range.end),
            }
          : null
      }
      onChange={(value) => {
        const start = getDateWithoutTime(new Date());

        start.setDate(value.start.day + 1);
        start.setMonth(value.start.month - 1);
        start.setFullYear(value.start.year);

        const end = getDateWithoutTime(new Date());

        end.setDate(value.end.day + 1);
        end.setMonth(value.end.month - 1);
        end.setFullYear(value.end.year);

        onChangeRange({
          start: start.toISOString().slice(0, 10),
          end: end.toISOString().slice(0, 10),
        });
      }}
    />
  );
};

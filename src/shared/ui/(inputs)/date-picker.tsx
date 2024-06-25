import { parseAbsoluteToLocal } from '@internationalized/date';
import { DatePicker, DatePickerProps } from '@nextui-org/date-picker';

type Props = {
  isDisabled?: boolean;
  date?: Date | null;
  onChange: (date: Date) => void;
} & DatePickerProps;

export const DatePickerInput = ({
  isDisabled = false,
  date = new Date(),
  onChange,
  ...rest
}: Props) => {
  return (
    <DatePicker
      aria-label='datepicker'
      dateInputClassNames={{ inputWrapper: '!bg-default' }}
      granularity='day'
      isDisabled={isDisabled}
      value={parseAbsoluteToLocal(date ? date.toISOString() : new Date().toISOString())}
      onChange={(e) => {
        onChange(e.toDate());
      }}
      {...rest}
    />
  );
};

import { parseAbsoluteToLocal } from '@internationalized/date';
import { DatePicker } from '@nextui-org/date-picker';
interface Props {
  isDisabled?: boolean;
  date?: Date | null;
  className?: string;
  onChange: (date: Date) => void;
}
export const DatePickerInput = ({
  isDisabled = false,
  date = new Date(),
  className,
  onChange,
}: Props) => {
  return (
    <DatePicker
      aria-label='datepicker'
      className={`max-w-[165px] ${className}`}
      dateInputClassNames={{ inputWrapper: '!bg-default' }}
      granularity='day'
      isDisabled={isDisabled}
      value={parseAbsoluteToLocal(date ? date.toISOString() : new Date().toISOString())}
      onChange={(e) => {
        onChange(e.toDate());
      }}
    />
  );
};

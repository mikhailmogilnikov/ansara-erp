import { Time } from '@internationalized/date';
import { TimeInput } from '@nextui-org/date-input';

import { getHours, getMins } from '../../lib/utils/format-time';

interface Props {
  time: number | null;
  onChange: (e: { hour: number; minute: number }) => void;
  className?: string;
}

export const TimeInputField = ({ time, onChange, className }: Props) => {
  return (
    <TimeInput
      aria-label={'timeInput'}
      className={`w-fit ${className}`}
      classNames={{ inputWrapper: '!bg-default' }}
      hourCycle={24}
      labelPlacement='outside'
      size='lg'
      value={time ? new Time(getHours(time), getMins(time)) : null}
      onChange={onChange}
    />
  );
};

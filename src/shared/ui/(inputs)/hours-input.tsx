import {
  InputNumberFormat,
  InputNumberFormatProps,
  NumberFormatEventDetail,
  NumberFormatEventHandler,
} from '@react-input/number-format';
import { useState } from 'react';

type Props = InputNumberFormatProps & {
  value: number;
  setValue: (number: number) => void;
  unit: string;
  initialUnit: string;
};

export const UnitInput = ({ value, setValue, unit, initialUnit, ...rest }: Props) => {
  const [hours, setHours] = useState<NumberFormatEventDetail>({
    value: `${value} ${initialUnit}`,
    number: value,
  });

  const handleNeedPayChange: NumberFormatEventHandler = (e) => {
    if (e.detail.number !== 0 && e.detail.value !== '') {
      setHours(e.detail);
      setValue(e.detail.number);
    } else {
      setHours({ value: `0 ${initialUnit}`, number: 0 });
      setValue(0);
    }
  };

  return (
    <InputNumberFormat
      className='w-full bg-default rounded-[14px] h-12 px-3 outline-none shadow-sm'
      format='unit'
      inputMode='numeric'
      locales='ru-RU'
      maximumFractionDigits={0}
      unit={unit}
      value={hours.value}
      onChange={() => {}}
      onNumberFormat={handleNeedPayChange}
      {...rest}
    />
  );
};

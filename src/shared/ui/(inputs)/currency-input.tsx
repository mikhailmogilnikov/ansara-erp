import {
  InputNumberFormat,
  InputNumberFormatProps,
  NumberFormatEventDetail,
  NumberFormatEventHandler,
} from '@react-input/number-format';
import { useState } from 'react';

export const CurrencyInput = ({
  value,
  setValue,
  ...rest
}: InputNumberFormatProps & { value: number; setValue: (number: number) => void }) => {
  const [currency, setCurrency] = useState<NumberFormatEventDetail>({
    value: `${value} ₽`,
    number: value,
  });

  const handleNeedPayChange: NumberFormatEventHandler = (e) => {
    if (e.detail.number !== 0 && e.detail.value !== '') {
      setCurrency(e.detail);
      setValue(e.detail.number);
    } else {
      setCurrency({ value: '0 ₽', number: 0 });
      setValue(0);
    }
  };

  return (
    <InputNumberFormat
      className='w-full bg-default rounded-[14px] h-12 px-3 outline-none shadow-sm'
      currency='RUB'
      format='currency'
      inputMode='numeric'
      locales='ru'
      maximumFractionDigits={0}
      value={currency.value}
      onChange={() => {}}
      onNumberFormat={handleNeedPayChange}
      {...rest}
    />
  );
};

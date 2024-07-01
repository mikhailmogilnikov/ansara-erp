import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { DateValue } from '@internationalized/date';
import { PiPlusCircleBold } from 'react-icons/pi';

import { PhoneInput } from '@/src/shared/ui/(inputs)/phone-input';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { CurrencyInput } from '@/src/shared/ui/(inputs)/currency-input';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { PasswordInput } from '@/src/shared/ui/(inputs)/password-input';
import { DatePickerInput } from '@/src/shared/ui/(inputs)/date-picker';
import { Button } from '@/src/shared/ui/(buttons)/button';

export const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [stages, setStages] = useState(['2']);
  const [accounters, setAccounters] = useState(['1']);
  const [payed, setPayed] = useState(0);
  const [needPay, setNeedPay] = useState(0);
  const [payDate, setPayDate] = useState<Date | DateValue>(new Date());
  const [startDate, setStartDate] = useState<Date | DateValue>(new Date());
  const [endDate, setEndDate] = useState<Date | DateValue>(new Date());

  return (
    <form autoComplete='off' className='grid grid-cols-2 gap-4 gap-y-6 mt-2'>
      <Input
        classNames={{ inputWrapper: '!bg-default' }}
        label='Заказчик'
        labelPlacement='outside'
        placeholder='Имя Ниша'
        size='lg'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputLabel title='Телефон'>
        <PhoneInput
          className='w-full bg-default rounded-[14px] h-12 px-2 outline-none shadow-sm'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputLabel>

      <Input
        autoComplete='new-password'
        classNames={{ inputWrapper: '!bg-default' }}
        label='Логин ЛК'
        labelPlacement='outside'
        placeholder='Введите логин'
        size='lg'
        type='text'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <PasswordInput
        autoComplete='new-password'
        classNames={{ inputWrapper: '!bg-default' }}
        label='Пароль ЛК'
        labelPlacement='outside'
        placeholder='Введите пароль'
        size='lg'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <InputLabel title='Количество этапов'>
        <SelectInput
          selectedVariants={stages}
          size='lg'
          variants={[
            { id: '1', title: '1' },
            { id: '2', title: '2' },
          ]}
          onSelectionChange={(keys) => setStages(keys)}
        />
      </InputLabel>

      <InputLabel title='Аккаунтер'>
        <SelectInput
          isInvalid={accounters.length < 1}
          selectedVariants={accounters}
          size='lg'
          variants={[
            { id: '1', title: 'Арина' },
            { id: '2', title: 'Алексей' },
          ]}
          onSelectionChange={(keys) => setAccounters(keys)}
        />
      </InputLabel>

      <InputLabel title='Оплачено'>
        <CurrencyInput setValue={setPayed} value={payed} />
      </InputLabel>

      <InputLabel title='Осталось'>
        <CurrencyInput setValue={setNeedPay} value={needPay} />
      </InputLabel>

      <InputLabel title='Дата первой оплаты'>
        <DatePickerInput date={payDate as Date} size='lg' onChange={setPayDate} />
      </InputLabel>

      <InputLabel title='Дата запуска первой версии'>
        <DatePickerInput date={startDate as Date} size='lg' onChange={setStartDate} />
      </InputLabel>

      <InputLabel title='Дата завершения окна правок'>
        <DatePickerInput date={endDate as Date} size='lg' onChange={setEndDate} />
      </InputLabel>

    
    </form>
  );
};

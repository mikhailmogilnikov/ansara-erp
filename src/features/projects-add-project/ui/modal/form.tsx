import { Input } from '@nextui-org/input';
import { useState } from 'react';

import { PhoneInput } from '@/src/shared/ui/(inputs)/phone-input';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { CurrencyInput } from '@/src/shared/ui/(inputs)/currency-input';
import { SelectInput } from '@/src/shared/ui/(inputs)/select-input';
import { PasswordInput } from '@/src/shared/ui/(inputs)/password-input';

export const AddProjectForm = () => {
  const [stages, setStages] = useState(['1']);
  const [accounters, setAccounters] = useState(['1']);
  const [payed, setPayed] = useState(0);
  const [needPay, setNeedPay] = useState(0);

  return (
    <form className='grid grid-cols-2 gap-4 gap-y-6 mt-2'>
      <Input
        classNames={{ inputWrapper: '!bg-default' }}
        label='Заказчик'
        labelPlacement='outside'
        placeholder='Имя Ниша'
        size='lg'
      />

      <InputLabel title='Телефон'>
        <PhoneInput className='w-full bg-default rounded-[14px] h-12 px-2 outline-none shadow-sm' />
      </InputLabel>

      <Input
        classNames={{ inputWrapper: '!bg-default' }}
        label='Логин ЛК'
        labelPlacement='outside'
        placeholder='Введите логин'
        size='lg'
      />

      <PasswordInput
        classNames={{ inputWrapper: '!bg-default' }}
        label='Пароль ЛК'
        labelPlacement='outside'
        placeholder='Введите пароль'
        size='lg'
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
    </form>
  );
};

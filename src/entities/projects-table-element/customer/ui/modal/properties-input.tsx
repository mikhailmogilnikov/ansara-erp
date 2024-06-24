import { InfoBadge, InfoBadgeProps } from '../info-badge';

import { PhoneInput } from '@/src/shared/ui/(inputs)/phone-input';
import { SelectInput, TSelectVariant } from '@/src/shared/ui/(inputs)/select-input';

export type TPropertiesInputVariants = 'text' | 'phone' | 'select';

type Props = {
  type: TPropertiesInputVariants;
  variants?: TSelectVariant[];
  value: string;
  onChange: any;
} & Omit<InfoBadgeProps, 'children'>;

export const PropertiesInput = ({ icon, title, type, variants, value, onChange }: Props) => {
  const inputs = {
    text: (
      <input
        className='bg-transparent outline-none'
        placeholder='Введите значение'
        value={value}
        onChange={onChange}
      />
    ),
    phone: <PhoneInput value={value} onChange={onChange} />,
    select: (
      <SelectInput
        classNames={{
          innerWrapper: 'p-0',
          trigger: '!bg-transparent p-0 shadow-none !text-lg min-h-6 h-6',
          value: 'text-medium',
        }}
        selectedVariants={value}
        size='sm'
        variants={variants || []}
        onSelectionChange={onChange}
      />
    ),
  };

  return (
    <InfoBadge icon={icon} title={title}>
      {inputs[type]}
    </InfoBadge>
  );
};

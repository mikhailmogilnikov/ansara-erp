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
    text: <input value={value} onChange={onChange} />,
    phone: <PhoneInput />,
    select: (
      <SelectInput
        selectedVariants={value}
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

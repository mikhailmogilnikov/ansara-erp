import { Select, SelectItem } from '@nextui-org/select';

export type TSelectVariant = {
  id: Key;
  title: string;
};

type Props = {
  multiple?: boolean;
  variants: TSelectVariant[];
  selectedVariants: any;
  onSelectionChange: (keys: any) => void;
  placeholder?: string;
};

export const SelectInput = ({
  variants,
  selectedVariants,
  multiple = false,
  onSelectionChange,
  placeholder,
}: Props) => {
  return (
    <Select
      aria-label='select'
      className='max-w-xs'
      classNames={{ trigger: '!bg-default' }}
      items={variants}
      placeholder={placeholder || 'Выберите из списка'}
      selectedKeys={selectedVariants}
      selectionMode={multiple ? 'multiple' : 'single'}
      onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <SelectItem key={item.id} className='capitalize'>
          {item.title}
        </SelectItem>
      )}
    </Select>
  );
};

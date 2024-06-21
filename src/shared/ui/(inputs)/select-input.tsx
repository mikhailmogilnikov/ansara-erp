import { Select, SelectItem, SelectProps } from '@nextui-org/select';

export type TSelectVariant = {
  id: Key;
  title: string;
};

type Props = Omit<
  {
    multiple?: boolean;
    variants: TSelectVariant[];
    selectedVariants: any;
    onSelectionChange: (keys: any) => void;
    placeholder?: string;
  } & SelectProps,
  'children'
>;

export const SelectInput = ({
  variants,
  selectedVariants,
  multiple = false,
  onSelectionChange,
  placeholder,
  ...restProps
}: Props) => {
  return (
    <Select
      classNames={{ trigger: '!bg-default' }}
      {...restProps}
      aria-label='select'
      className='max-w-xs'
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

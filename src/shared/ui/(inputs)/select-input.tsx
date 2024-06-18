import { Select, SelectItem } from '@nextui-org/select';

type TVariant = {
  id: Key;
  title: string;
};

type Props = {
  multiple?: boolean;
  variants: TVariant[];
  selectedVariants: any;
  onSelectionChange: (keys: any) => void;
};

export const SelectInput = ({
  variants,
  selectedVariants,
  multiple = false,
  onSelectionChange,
}: Props) => {
  return (
    <Select
      aria-label='select'
      className='max-w-xs'
      classNames={{ trigger: '!bg-default' }}
      items={variants}
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

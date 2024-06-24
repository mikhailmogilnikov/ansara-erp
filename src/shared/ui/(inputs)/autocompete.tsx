import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';

export interface Props {
  className?: string;
  value: string | number | null;
  onChange: (key: Key | null) => void;
  variants: {
    id: number;
    title: string;
  }[];
  placeholder?: string;
}

export const AutocompleteInput = ({ className, value, variants, onChange, placeholder }: Props) => {
  return (
    <Autocomplete
      aria-label='autocomplete'
      className={`w-full ${className}`}
      inputProps={{
        classNames: {
          inputWrapper: '!bg-default',
        },
      }}
      placeholder={placeholder}
      selectedKey={value ? String(value) : ''}
      onSelectionChange={onChange}
    >
      {variants.map((variant) => (
        <AutocompleteItem key={variant.id}>{variant.title}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

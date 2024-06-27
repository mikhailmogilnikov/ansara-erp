import { Autocomplete, AutocompleteItem, AutocompleteProps } from '@nextui-org/autocomplete';

type Props = Omit<
  {
    variants: {
      id: number;
      title: string;
    }[];
  } & AutocompleteProps,
  'children'
>;

export const AutocompleteInput = ({ className, variants, placeholder, ...restProps }: Props) => {
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
      {...restProps}
    >
      {variants.map((variant) => (
        <AutocompleteItem key={variant.id}>{variant.title}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

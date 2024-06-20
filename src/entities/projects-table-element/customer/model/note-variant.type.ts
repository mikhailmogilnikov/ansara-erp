import { ElementType } from 'react';

import { TPropertiesInputVariants } from '../ui/modal/properties-input';

import { TSelectVariant } from '@/src/shared/ui/(inputs)/select-input';

export type NoteVariant = Readonly<{
  id: string;
  icon: ElementType;
  title: string;
  type: TPropertiesInputVariants;
  variants?: TSelectVariant[];
}>;

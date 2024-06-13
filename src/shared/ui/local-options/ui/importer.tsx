import dynamic from 'next/dynamic';

import { LocalOptionsSkeleton } from './skeleton';

import { TFilter } from '@/src/shared/model/default.type';

const DynamicLocalOptions = dynamic(() => import('.').then((mod) => mod.LocalOptionsComponent), {
  loading: () => <LocalOptionsSkeleton />,
  ssr: false,
});

type Props = {
  variants: TFilter[];
  storageKey: string;
};

export const LocalOptions = ({ variants, storageKey }: Props) => (
  <DynamicLocalOptions storageKey={storageKey} variants={variants} />
);

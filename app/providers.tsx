'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { LazyMotion } from 'framer-motion';

import { FiltersProvider } from '@/src/shared/lib/providers/filters-provider';

type Props = React.PropsWithChildren<{ themeProps?: ThemeProviderProps }>;

const loadFeatures = () => import('@/src/shared/model/dom-max').then((res) => res.domMax);

export function Providers({ children, themeProps }: Props) {
  const router = useRouter();

  return (
    <LazyMotion features={loadFeatures}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>
          <FiltersProvider>{children}</FiltersProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </LazyMotion>
  );
}

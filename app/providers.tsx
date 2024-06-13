'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { LazyMotion } from 'framer-motion';

import { FilterProvider } from '@/src/shared/lib/providers/filters-provider';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const loadFeatures = () => import('@/src/shared/model/dom-max').then((res) => res.domMax);

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <LazyMotion features={loadFeatures}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>
          <FilterProvider> {children}</FilterProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </LazyMotion>
  );
}

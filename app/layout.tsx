import './globals.css';

import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/src/shared/config/site';
import { fontSans } from '@/src/shared/config/fonts';
import { Navigation } from '@/src/widgets/navigation';
import { Modal } from '@/src/shared/ui/modal';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='ru'>
      <head>
        <meta content='#000000' name='theme-color' />
        <meta content='telephone=no' name='format-detection' />
      </head>
      <body className={clsx('min-h-screen bg-black font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-dvh'>
            <Navigation />
            <main className='w-full h-full bg-background dark:bg-default-50 overflow-y-scroll'>
              {children}
            </main>
            <Modal />
          </div>
        </Providers>
      </body>
    </html>
  );
}

'use client';

import { usePathname } from 'next/navigation';

import { NavPoints } from '../config/nav-points';

import { ProfileFeatures } from '@/src/features/profile-features';
import { Profile } from '@/src/entities/profile';
import { AnsaraLogo } from '@/src/shared/assets/ansara-logo';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { NavigationTabs } from '@/src/shared/ui/route-tabs';

export const Navigation = () => {
  const pathname = usePathname();

  if (pathname === '/login') {
    return null;
  }

  return (
    <nav className='w-full h-16 flex-shrink-0 flex justify-between items-center gap-4 relative px-6 bg-black'>
      <Flex col className='!w-min'>
        <div aria-label='Ansara' className='w-48'>
          <AnsaraLogo />
        </div>
      </Flex>
      <NavigationTabs items={NavPoints} />
      <Profile profileFeatures={ProfileFeatures} />
    </nav>
  );
};

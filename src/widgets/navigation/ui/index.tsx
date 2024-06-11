import { NavPoints } from '../config/nav-points';

import { Profile } from '@/src/entities/profile';
import { AnsaraLogo } from '@/src/shared/assets/ansara-logo';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { RouteTabs } from '@/src/shared/ui/route-tabs';

export const Navigation = () => {
  return (
    <nav className='w-full h-16 flex-shrink-0 flex justify-between items-center gap-4 relative px-6 bg-black'>
      <Flex col className='!w-min'>
        <div aria-label='Ansara' className='w-48'>
          <AnsaraLogo />
        </div>
      </Flex>
      <RouteTabs items={NavPoints} />
      <Profile />
    </nav>
  );
};

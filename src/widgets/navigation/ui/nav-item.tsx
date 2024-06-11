import Link from 'next/link';
import { PiProjectorScreenBold } from 'react-icons/pi';

import { Text } from '@/src/shared/ui/(layout)/text';

export const NavItem = () => {
  return (
    <Link
      className='items-center hover:bg-default hover:shadow-base px-4 py-3 rounded-2xl transition-all'
      href='/'
    >
      <PiProjectorScreenBold size={28} />
      <Text className='text-lg font-semibold' tag='h2'>
        Проекты
      </Text>
    </Link>
  );
};

'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { PiCaretLeftBold } from 'react-icons/pi';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button isIconOnly radius='full' onPress={() => router.back()}>
      <PiCaretLeftBold size={22} />
    </Button>
  );
};

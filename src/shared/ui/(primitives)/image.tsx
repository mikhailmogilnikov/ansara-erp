'use client';

import { Skeleton } from '@nextui-org/skeleton';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  url: string;
  sizes?: string;
  alt?: string;
  primary?: boolean;
};

export const GalleryImage = ({ url, alt, sizes, primary }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Skeleton className='w-full h-full' />}
      <Image
        fill
        alt={alt || 'gallery image'}
        className='absolute snap-start flex-shrink-0 object-cover z-10'
        draggable={false}
        loading={!primary ? 'lazy' : 'eager'}
        priority={primary}
        sizes={sizes}
        src={url}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

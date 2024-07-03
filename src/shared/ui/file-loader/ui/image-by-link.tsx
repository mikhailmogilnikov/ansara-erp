import Image from 'next/image';
import { useRef } from 'react';

import { Flex } from '../../(layout)/flex';
import { useLightbox } from '../../lightbox/model/lightbox-store';

import { DeleteButton } from './delete-button';

type Props = {
  link: string;
  index: number;
  setImageLinks: (links: string[]) => void;
  imageLinks: string[];
};

export const ImageByLink = ({ link, index, setImageLinks, imageLinks }: Props) => {
  const imgSize = useRef<{ width: number; height: number } | null>(null);
  const { setGallery } = useLightbox();
  const handleOpen = () => {
    if (imgSize.current) {
      setGallery(link, imgSize.current);
    }
  };

  const handleDeleteImage = () => {
    const newImageLinks = [...imageLinks];

    newImageLinks.splice(index, 1);
    setImageLinks(newImageLinks);
  };

  return (
    <div className='relative gap-4 flex items-center flex-col'>
      <Flex center col className='justify-start text-start flex-shrink ' gap={6}>
        <div className='flex items-center w-full aspect-square rounded-xl bg-default overflow-clip relative justify-center flex-shrink-0 shadow-base'>
          <Image
            fill
            unoptimized
            alt={link}
            className='snap-start flex-shrink-0 object-cover h-full z-10 cursor-pointer'
            src={link}
            onClick={handleOpen}
            onLoad={(e: any) =>
              (imgSize.current = { width: e.target.naturalWidth, height: e.target.naturalHeight })
            }
          />
          <DeleteButton handleDeleteFile={handleDeleteImage} />
        </div>
      </Flex>
    </div>
  );
};

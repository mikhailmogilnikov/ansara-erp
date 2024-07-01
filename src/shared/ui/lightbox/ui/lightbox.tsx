import { RemoveScroll } from 'react-remove-scroll';

import { GalleryImage } from '../../(primitives)/image';

import { LightboxWrapper } from './wrapper';

export const LightboxContent = ({ image }: { image: string }) => {
  return (
    <RemoveScroll className='fixed inset-0 z-[100] flex justify-center items-center'>
      <LightboxWrapper image={image}>
        <GalleryImage primary sizes='94vw' url={image} />
      </LightboxWrapper>
    </RemoveScroll>
  );
};

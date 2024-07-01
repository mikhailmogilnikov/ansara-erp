import { AnimatePresence, PanInfo, m, useMotionValue, useTransform } from 'framer-motion';
import { PropsWithChildren, useEffect, useState } from 'react';
import { PiArrowCircleDownBold, PiHandTap } from 'react-icons/pi';
import { useLocalStorage, useWindowSize } from 'react-use';

import { useLightbox } from '../model/lightbox-store';
import { calculateFullscreenByAspect } from '../lib/calculate-fullscreen-by-aspect';
import { Text } from '../../(layout)/text';

type Props = {
  image: string;
} & PropsWithChildren;

export const LightboxWrapper = ({ children }: Props) => {
  const { gallery, setGallery, size } = useLightbox();
  const [dragCount, setDragCount] = useLocalStorage('drag-count', 1);
  const { width, height } = useWindowSize();
  const y = useMotionValue(0);

  const [imageWidth, setImageWidth] = useState(size.width);
  const [imageHeight, setImageHeight] = useState(size.height);
  const [isDragging, setIsDragging] = useState(false);

  const imageAspectStr = `${imageWidth}/${imageHeight}`;

  useEffect(() => {
    if (gallery) {
      const { width: imgWidth, height: imgHeight } = calculateFullscreenByAspect(
        imageAspectStr,
        width,
        height,
      );

      setImageWidth(imgWidth);
      setImageHeight(imgHeight);
    }
  }, [width, height]);

  const scale = useTransform(y, [-300, 0, 300], [0.75, 1, 0.75]);

  const closeGallery = () => {
    setGallery(null, { width: 0, height: 0 });
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.y) >= 40) {
      if (dragCount) {
        setDragCount(dragCount + 1);
      }

      closeGallery();
    }
  };

  return (
    <>
      <m.button
        animate={{ opacity: 1 }}
        aria-label='Close lightbox'
        className='absolute inset-0 backdrop-blur-2xl bg-background/50 z-10'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        type='button'
        onClick={closeGallery}
      />
      <m.div
        drag
        dragSnapToOrigin
        animate={{ scale: 1, opacity: 1 }}
        className='max-w-[92vw] max-h-[92vh] rounded-2xl bg-default z-20 cursor-grab shadow-base relative  overflow-clip border-1 border-divider'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        exit={{ scale: 0.3, opacity: 0, transition: { type: 'spring', damping: 24, stiffness: 300 } }}
        initial={{ scale: 0.3, opacity: 0 }}
        style={{
          aspectRatio: imageAspectStr,
          width: imageWidth,
          height: imageHeight,
          y,
          scale,
        }}
        onDragEnd={handleDragEnd}
        onDragStart={() => setIsDragging(false)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
      >
        {children}
        {!!dragCount && dragCount < 2 && (
          <PiHandTap className='opacity-30 absolute top-4 right-4 animate-pulse z-30' size={36} />
        )}
      </m.div>
      <AnimatePresence>
        {isDragging && dragCount && dragCount < 20 && (
          <m.div
            animate={{
              scale: 1,
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
            }}
            className='w-72 max-w-[98vw] h-20 bg-black border-1 border-divider rounded-full absolute bottom-4 z-30 origin-bottom flex items-center justify-center px-6 gap-4'
            exit={{ scale: 0, filter: 'blur(24px)', opacity: 0, y: 16 }}
            initial={{ scale: 0, filter: 'blur(24px)', opacity: 0, y: 16 }}
          >
            <PiArrowCircleDownBold className='text-white flex-shrink-0' size={36} />
            <Text className='font-semibold text-white'>Потяните вниз, чтобы закрыть</Text>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

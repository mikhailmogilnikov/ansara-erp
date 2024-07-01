'use client';

import { AnimatePresence } from 'framer-motion';

import { useLightbox } from '../model/lightbox-store';

import { LightboxContent } from './lightbox';

export const Lightbox = () => {
  const { gallery } = useLightbox();

  return <AnimatePresence>{gallery && <LightboxContent image={gallery} />}</AnimatePresence>;
};

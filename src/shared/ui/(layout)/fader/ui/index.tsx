import { m } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const Fader = ({ children }: PropsWithChildren) => {
  return (
    <m.div
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(24px)' }}
      initial={{ opacity: 0, filter: 'blur(24px)' }}
    >
      {children}
    </m.div>
  );
};

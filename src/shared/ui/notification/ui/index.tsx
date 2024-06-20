'use client';

import { AnimatePresence, LayoutGroup } from 'framer-motion';

import { useNotification } from '../model/notification-store';

import { NotificationMassage } from './notification-message';

export const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <div className='absolute z-30 bottom-2 left-[50%] -translate-x-1/2 flex flex-col'>
      <LayoutGroup>
        <AnimatePresence>
          {notifications.map((note) => (
            <NotificationMassage key={note.id} {...note} />
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

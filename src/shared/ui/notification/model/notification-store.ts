import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { INotification } from './notification.type';

interface NotificationStateI {
  notifications: INotification[];
  addNotification: (notification: Omit<INotification, 'id'>) => void;
  closeNotificationById: (id: number) => void;
}

export const useNotificationStore = create<NotificationStateI>()(
  devtools(
    immer((set) => ({
      notifications: [] as INotification[],
      addNotification: (notification) =>
        set((state) => {
          state.notifications.push({ ...notification, id: new Date().getTime() });
        }),
      closeNotificationById: (id) =>
        set((state) => {
          state.notifications = state.notifications.filter((note) => note.id !== id);
        }),
    })),
  ),
);

export const useNotification = () => useNotificationStore((state) => state);

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ModalStateI {
  modal: boolean;
  setModal: (value: boolean) => void;
}

export const useModalStore = create<ModalStateI>()(
  devtools(
    immer((set) => ({
      modal: false,
      setModal: (value: boolean) =>
        set((state) => {
          state.modal = value;
        }),
    })),
  ),
);

export const useModal = () => {
  const modal = useModalStore((state) => state.modal);
  const setModal = useModalStore((state) => state.setModal);

  return { modal, setModal };
};

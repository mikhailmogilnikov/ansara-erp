import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ModalStateI {
  modal: React.ReactNode | null;
  modalProps: any;
  setModalProps: (value: any) => void;
  setModal: (value: React.ReactNode | null) => void;
}

export const useModalStore = create<ModalStateI>()(
  devtools(
    immer((set) => ({
      modal: false,
      modalProps: [],
      setModalProps: (value) =>
        set((state) => {
          state.modalProps = value;
        }),
      setModal: (value) =>
        set((state) => {
          state.modal = value;
        }),
    })),
  ),
);

export const useModal = () => {
  const state = useModalStore((state) => state);

  return state;
};

export const useModalField = <K extends keyof ModalStateI>(field: K): ModalStateI[K] => {
  const state = useModalStore((state) => state[field]);

  return state;
};

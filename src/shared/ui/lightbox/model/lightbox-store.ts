import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TImgSize = { width: number; height: number };

interface ILightboxStore {
  gallery: string | null;
  size: TImgSize;
  setGallery: (value: string | null, size: TImgSize) => void;
}

export const useLightboxStore = create<ILightboxStore>()(
  devtools(
    immer((set) => ({
      gallery: null,
      size: { width: 0, height: 0 },
      setGallery: (value, size) =>
        set((state) => {
          state.size = size;
          state.gallery = value;
        }),
    })),
  ),
);

export const useLightbox = () => useLightboxStore((state) => state);

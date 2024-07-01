import { AnimatePresence, m } from 'framer-motion';
import { PiTrashBold } from 'react-icons/pi';

interface Props {
  isHover: boolean;
  handleDeleteFile: () => void;
}

export const DeleteButton = ({ isHover, handleDeleteFile }: Props) => {
  return (
    <AnimatePresence>
      {isHover && (
        <m.button
          animate={{ opacity: 1 }}
          className='flex-shrink-0 absolute inset-0 top-0 z-50 bg-black bg-opacity-70 flex items-center rounded-xl overflow-clip  justify-center shadow-base'
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={handleDeleteFile}
        >
          <PiTrashBold className='text-danger w-1/4 h-1/4' />
        </m.button>
      )}
    </AnimatePresence>
  );
};

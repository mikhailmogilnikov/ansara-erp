import { AnimatePresence, m } from 'framer-motion';
import { memo } from 'react';
import { PiTrashSimpleBold } from 'react-icons/pi';

interface Props {
  isHover: boolean;
  handleDeleteFile: () => void;
}

const DeleteButton = ({ isHover, handleDeleteFile }: Props) => {
  return (
    <AnimatePresence>
      {isHover && (
        <m.button
          animate={{ opacity: 1 }}
          className='flex-shrink-0 absolute top-0 z-50 bg-black bg-opacity-70 flex items-center w-16 h-16 rounded-xl overflow-clip  justify-center shadow-base'
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={handleDeleteFile}
        >
          <PiTrashSimpleBold className='text-danger' size={24} />
        </m.button>
      )}
    </AnimatePresence>
  );
};

export const DeleteButtonMemo = memo(DeleteButton);

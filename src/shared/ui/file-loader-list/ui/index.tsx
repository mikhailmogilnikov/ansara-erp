import { IFileLoader } from '../model/file-loader-type';

import { FileCard } from './file';
import { FileLoader } from './file-loader';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const FileLoaderList = (props: IFileLoader) => {
  return (
    <Flex col gap={8}>
      <FileLoader {...props} />
      <div className='grid grid-cols-4 gap-2'>
        {props.fileList.map((file, index) => (
          <FileCard key={`${file.name}_${Math.random()}`} file={file} index={index} {...props} />
        ))}
      </div>
    </Flex>
  );
};

/* eslint-disable react/display-name */

import { memo } from 'react';

import { IFileLoader } from '../model/file-loader-type';

import { FileCard } from './file';
import { FileLoader } from './file-loader';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const FileLoaderList = memo((props: IFileLoader) => {
  return (
    <Flex col gap={8}>
      <FileLoader {...props} />
      {props.fileList.length > 0 && (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
          {props.fileList.map((file, index) => (
            <FileCard key={`${file.name}_${Math.random()}`} file={file} index={index} {...props} />
          ))}
        </div>
      )}
    </Flex>
  );
});

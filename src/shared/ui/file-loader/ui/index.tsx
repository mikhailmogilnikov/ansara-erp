/* eslint-disable react/display-name */

import { memo } from 'react';

import { IFileLoader } from '../model/file-loader-type';

import { FileCard } from './file';
import { FileLoader } from './file-loader';
import { ImageByLink } from './image-by-link';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const FileLoaderList = memo((props: IFileLoader) => {
  return (
    <Flex col gap={8}>
      <FileLoader {...props} />
      {props.fileList.length > 0 || (props.imageLinks && props.imageLinks.length) ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
          {props.imageLinks &&
            props.setImageLinks &&
            props.imageLinks.map((link, index) => (
              <ImageByLink
                key={link}
                imageLinks={props.imageLinks!}
                index={index}
                link={link}
                setImageLinks={props.setImageLinks!}
              />
            ))}
          {props.fileList.map((file, index) => (
            <FileCard key={`${file.name}_${Math.random()}`} file={file} index={index} {...props} />
          ))}
        </div>
      ) : null}
    </Flex>
  );
});

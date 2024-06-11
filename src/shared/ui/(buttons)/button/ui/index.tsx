/* eslint-disable react/jsx-props-no-spreading */

import { Button as NativeButton, ButtonProps } from '@nextui-org/button';
import { ReactNode } from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';

type Props = {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  streched?: boolean;
  shadow?: boolean;
  external?: boolean;
} & ButtonProps;

export const Button = ({
  icon,
  children,
  size = 'lg',
  streched,
  className,
  shadow,
  external,
  ...restProps
}: Props) => {
  return (
    <NativeButton
      className={`${shadow && 'shadow-base'} font-medium relative ${className}`}
      fullWidth={streched}
      size={size}
      {...restProps}
    >
      {icon}
      {children}
      {external && (
        <PiArrowUpRightBold className='absolute top-2 right-2' size={16} />
      )}
    </NativeButton>
  );
};

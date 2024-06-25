import { Input, InputProps } from '@nextui-org/input';
import { useState } from 'react';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

export const PasswordInput = ({ ...rest }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const ShowPasswordButton = isVisible ? (
    <button type='button' onClick={() => setIsVisible(false)}>
      <PiEyeClosedBold className='w-6 h-6' opacity={0.5} />
    </button>
  ) : (
    <button type='button' onClick={() => setIsVisible(true)}>
      <PiEyeBold className='w-6 h-6' opacity={0.5} />
    </button>
  );

  return <Input endContent={ShowPasswordButton} type={isVisible ? 'text' : 'password'} {...rest} />;
};

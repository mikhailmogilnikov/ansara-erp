import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  opacity?: number;
  size?: number;
};

export const Text = ({
  children,
  tag = 'p',
  className = 'md:text-lg font-medium',
  opacity = 1,
  size,
}: Props) => {
  const Tag = tag;

  return (
    <Tag className={className} style={{ opacity, fontSize: size }}>
      {children}
    </Tag>
  );
};

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag?: 'div' | 'section' | 'menu' | 'aside' | 'header' | 'footer' | 'span' | 'article' | 'main';
  className?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: number;
  width?: number | string;
  editable?: boolean;
  wrap?: boolean;
  col?: boolean;
  center?: boolean;
};

export const Flex = ({
  children,
  className,
  tag = 'div',
  direction = 'row',
  gap = 4,
  width = '100%',
  editable = false,
  wrap = false,
  col = false,
  center = false,
}: Props) => {
  const Tag = tag;

  return (
    <Tag
      className={`flex text-foreground ${className} ${wrap && 'flex-wrap'} ${center && 'items-center'}`}
      style={
        !editable ? { flexDirection: col ? 'column' : direction, gap: gap * 4, width } : undefined
      }
    >
      {children}
    </Tag>
  );
};

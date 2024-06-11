import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag?:
    | 'div'
    | 'section'
    | 'menu'
    | 'aside'
    | 'header'
    | 'footer'
    | 'span'
    | 'article'
    | 'main';
  className?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: number;
  width?: number | string;
  editable?: boolean;
  wrap?: boolean;
  col?: boolean;
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
}: Props) => {
  const Tag = tag;

  return (
    <Tag
      className={`flex text-foreground ${className} ${wrap && 'flex-wrap'}`}
      style={
        !editable
          ? { flexDirection: col ? 'column' : direction, gap: gap * 4, width }
          : undefined
      }
    >
      {children}
    </Tag>
  );
};

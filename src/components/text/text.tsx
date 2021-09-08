import classnames from 'classnames';
import React from 'react';

import { Size, Color } from '../../types';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size: Size;
  color: Color.BLACK | Color.GRAY | Color.WHITE;
}

export function Text({
  children,
  size = Size.MEDIUM,
  color = Color.BLACK,
  className,
  ...props
}: TextProps) {
  const classNames = classnames(
    {
      'text-xs': size === Size.SMALL,
      'text-base': size === Size.MEDIUM,
      'text-2xl': size === Size.LARGE,
      'text-black-200': color === Color.BLACK,
      'text-gray-200': color === Color.GRAY,
      'text-white': color === Color.WHITE,
    },
    className
  );

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}

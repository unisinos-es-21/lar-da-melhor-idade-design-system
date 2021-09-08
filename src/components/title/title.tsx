import classnames from 'classnames';
import React from 'react';

import { Size, Color } from '../../types';

export type TitleProps = {
  children: React.ReactNode;
  size: Size;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  color: Color.BLACK | Color.GRAY | Color.WHITE;
  className: string;
};

export function Title({
  children = null,
  size = Size.MEDIUM,
  type = 'h2',
  color = Color.BLACK,
  className,
}: TitleProps) {
  const classNames = classnames(
    {
      'text-sm': size === Size.SMALL,
      'text-base': size === Size.MEDIUM,
      'text-lg': size === Size.LARGE,
      'text-black-200': color === Color.BLACK,
      'text-gray-200': color === Color.GRAY,
      'text-white': color === Color.WHITE,
    },
    className
  );

  return React.createElement(type, { children, className: classNames });
}

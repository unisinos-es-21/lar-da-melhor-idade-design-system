import classnames from 'classnames';
import React from 'react';

import { Size } from '../../types';

import '../../tailwind.css';

export type TitleProps = {
  children: React.ReactNode;
  size: Size;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

export function Title({
  children = null,
  size = Size.MEDIUM,
  type = 'h2'
}: TitleProps) {
  const classNames = classnames({
    'text-sm': size === Size.SMALL,
    'text-base': size === Size.MEDIUM,
    'text-lg': size === Size.LARGE
  });

  return React.createElement(type, { children, className: classNames });
}

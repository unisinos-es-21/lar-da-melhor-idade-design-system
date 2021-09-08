import classnames from 'classnames';
import React from 'react';

import { Size, Color } from '../../types';

import './title.css';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size: Size;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  color: Color.BLACK | Color.GRAY | Color.WHITE;
}

export function Title({
  children = null,
  size = Size.MEDIUM,
  type = 'h2',
  color = Color.BLACK,
  className,
  ...props
}: TitleProps) {
  const classNames = classnames('text', size, color, className);

  return React.createElement(type, {
    children,
    className: classNames,
    ...props,
  });
}

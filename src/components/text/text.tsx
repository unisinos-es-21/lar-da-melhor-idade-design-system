import classnames from 'classnames';
import React from 'react';

import { Size, Color } from '../../types';

import './text.css';

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
  const classNames = classnames('text', size, color, className);

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}

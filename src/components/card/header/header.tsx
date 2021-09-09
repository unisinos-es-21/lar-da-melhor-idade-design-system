import classnames from 'classnames';
import React from 'react';

import { Color } from '../../../types';

import './header.css';

export interface CardHeaderProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  color?: Color.PURPLE | Color.GREEN;
}

export function CardHeader({
  className,
  color = Color.PURPLE,
  children,
  ...props
}: CardHeaderProps) {
  const classNames = classnames('card-header', color, className);

  return (
    <header className={classNames} {...props}>
      {children}
    </header>
  );
}

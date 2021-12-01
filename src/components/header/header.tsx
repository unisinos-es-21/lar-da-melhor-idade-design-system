import classnames from 'classnames';
import React from 'react';

import { Color } from '../../types';

import './header.css';

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  color?: Color;
}

export function Header({
  color = Color.BLUE,
  children,
  className,
  ...props
}: HeaderProps) {
  const classNames = classnames('container', color, className);

  return (
    <header className="header" {...props}>
      <div className={classNames}>{children}</div>
    </header>
  );
}

import classnames from 'classnames';
import React from 'react';

import './header.css';

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function Header({ children, className, ...props }: HeaderProps) {
  const classNames = classnames('container', className);

  return (
    <header className="header" {...props}>
      <div className={classNames}>{children}</div>
    </header>
  );
}

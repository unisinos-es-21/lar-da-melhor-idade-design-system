import classnames from 'classnames';
import React from 'react';

import './content.css';

export interface CardContentProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function CardContent({
  className,
  children,
  ...props
}: CardContentProps) {
  const classNames = classnames('card-content', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

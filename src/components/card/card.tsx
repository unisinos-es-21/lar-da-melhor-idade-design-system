import classnames from 'classnames';
import React from 'react';

import { CardContent, CardContentProps } from './content';
import { CardHeader, CardHeaderProps } from './header';

import './card.css';

export interface CardComposition {
  Content: React.FC<CardContentProps>;
  CardHeader: React.FC<CardHeaderProps>;
}

export interface CardProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Card({
  className,
  children,
  ...props
}: CardProps & CardComposition) {
  const classNames = classnames('card', className);

  return (
    <section className={classNames} {...props}>
      {children}
    </section>
  );
}

Card.Content = CardContent;
Card.Header = CardHeader;

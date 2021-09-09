import classnames from 'classnames';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Icon } from '../icon';
import { Color } from '../../types';

import './button.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: Color.BLACK | Color.GREEN | Color.YELLOW | Color.RED;
  icon?: IconProp;
}

export function Button({
  className,
  children,
  color,
  icon,
  ...props
}: ButtonProps) {
  const classNames = classnames('button', color, className);

  return (
    <button className={classNames} {...props}>
      {children}
      {icon ? <Icon icon={icon} /> : null}
    </button>
  );
}

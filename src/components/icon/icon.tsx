import classnames from 'classnames';
import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export interface IconProps extends FontAwesomeIconProps {}

export function Icon({ className, color, ...props }: IconProps) {
  return (
    <FontAwesomeIcon
      className={classnames('icon', className)}
      color={color}
      {...props}
    />
  );
}

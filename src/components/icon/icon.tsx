import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export interface IconProps extends FontAwesomeIconProps {}

export function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} />;
}

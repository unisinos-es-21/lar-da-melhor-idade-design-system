import classnames from 'classnames';
import React from 'react';

import './input.css';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return <input className={classnames('input', className)} {...props} />;
}

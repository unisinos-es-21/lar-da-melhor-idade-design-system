import classnames from 'classnames';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Icon } from '../icon';

import './input.css';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  iconLabel?: IconProp;
  iconInternal?: IconProp;
  onClickInternalButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Input({
  className,
  label,
  iconLabel,
  iconInternal,
  onClickInternalButton,
  id,
  type = 'text',
  ...props
}: InputProps) {
  return (
    <div className="flex justify-between items-center">
      {iconLabel ? <Icon icon={iconLabel} className="mr-4 text-2xl" /> : null}
      <div className="flex items-center w-full relative">
        <input
          className={classnames('input', className)}
          id={id}
          type={type}
          {...props}
        />
        {label && !['text', 'password'].includes(type) ? (
          <label htmlFor={`#${id}`}>{label}</label>
        ) : null}
        {iconInternal && !['radio', 'checkbox'].includes(type) ? (
          <button
            type="button"
            className="absolute right-4"
            onClick={onClickInternalButton}
          >
            <Icon icon={iconInternal} className="text-base" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

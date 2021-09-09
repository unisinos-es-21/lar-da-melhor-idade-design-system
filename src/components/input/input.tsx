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
  iconLabel?: IconProp;
  iconInternal?: IconProp;
  onClickInternalButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Input({
  className,
  iconLabel,
  iconInternal,
  onClickInternalButton,
  ...props
}: InputProps) {
  return (
    <div className="flex justify-between items-center">
      {iconLabel ? <Icon icon={iconLabel} className="mr-4 text-2xl" /> : null}
      <div className="flex items-center w-full relative">
        <input className={classnames('input', className)} {...props} />
        {iconInternal ? (
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

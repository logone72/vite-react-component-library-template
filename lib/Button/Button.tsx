import clsx from 'clsx';
import React from 'react';

import st from './style.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'medium', ...rest }, ref) => (
    <button
      ref={ref}
      className={clsx(className, st.button, st[size])}
      {...rest}
    />
  ),
);

Button.displayName = 'Button';

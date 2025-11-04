import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...rest }, ref) => (
    <button
      ref={ref}
      className={className}
      {...rest}
    />
  ),
);

Button.displayName = 'Button';

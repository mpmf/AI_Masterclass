import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', style, ...props }: ButtonProps) {
  const palette =
    variant === 'primary'
      ? { background: '#0f766e', color: '#ffffff', border: '1px solid #0f766e' }
      : { background: '#ffffff', color: '#0f766e', border: '1px solid #0f766e' };

  return (
    <button
      {...props}
      style={{
        borderRadius: 8,
        padding: '0.6rem 1rem',
        fontWeight: 600,
        cursor: 'pointer',
        ...palette,
        ...style,
      }}
    />
  );
}

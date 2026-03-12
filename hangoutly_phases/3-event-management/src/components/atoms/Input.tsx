import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, ...props }: InputProps) {
  return (
    <label className="stack" htmlFor={id}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
      <input
        id={id}
        {...props}
        style={{
          border: '1px solid #cbd5e1',
          borderRadius: 8,
          padding: '0.65rem 0.75rem',
          fontSize: 14,
        }}
      />
    </label>
  );
}

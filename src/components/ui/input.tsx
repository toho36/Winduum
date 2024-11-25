import * as React from 'react';
import { cn } from '@/lib/utils';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, type = 'text', required = false, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isValidTelefon, setIsValidTelefon] = React.useState(true);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
    };

    const getPlaceholder = (type: string) => {
      switch (type) {
        case 'telefon':
          return '+420';
        // Add more cases if needed
        default:
          return undefined;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setHasValue(!!value);

      if (type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(value));
      } else if (type === 'telefon') {
        const telefonPattern = /^\d{9}$/;
        setIsValidTelefon(telefonPattern.test(value));
      }

      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        <input
          type={type}
          placeholder={getPlaceholder(type)}
          className={cn(
            'bg-white min-h-[56px] pb-2.5 pt-4 px-lg w-full rounded-lg border',
            isFocused || hasValue
              ? (type === 'email' && !isValidEmail) || (type === 'telefon' && !isValidTelefon)
                ? 'border-red-500 focus:ring-red-500 focus:outline-none'
                : 'border-blue-500 focus:ring-blue-500 focus:outline-none'
              : 'border-gray-200',
            'transition-colors duration-200',
            className,
          )}
          ref={ref}
          aria-label={label}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label
          className={cn(
            'absolute left-4 top-4 transition-all duration-200',
            'font-inter font-medium text-left underline-position-from-font decoration-skip-ink-none',
            isFocused || hasValue || type === 'telefon'
              ? 'top-1 left-4 text-[10px]'
              : 'top-4 text-base leading-6 text-muted-foreground',
          )}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    );
  },
);

FloatingLabelInput.displayName = 'FloatingLabelInput';

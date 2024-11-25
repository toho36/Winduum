import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define the button variants using CVA
const buttonVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      primary:
        'bg-primary hover:bg-primary-hover  rounded-lg  py-md px-2xl gap-x-sm  text-body-primary',
      primaryLong:
        'bg-primary hover:bg-primary-hover  rounded-lg  py-md px-6xl gap-x-sm  text-body-primary',
      primaryIcon:
        'bg-primary hover:bg-primary-hover rounded-lg p-md gap-0 min-w-[256px] w-[232px]   text-body-primary justify-between',
      primaryIconOutline:
        'bg-body hover:bg-primary-hover rounded-lg p-md gap-0 min-w-[256px] w-[232px] hover:text-body-primary text-black justify-between',

      default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outlineDropDown:
        'text-md font-semibold leading-6 border border-primary text bg-white rounded-lg  py-md px-2xl gap-x-sm min-w-[166px] ',

      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      disabled: 'bg-gray-200  text-gray-400 rounded-lg  py-md px-2xl',
      warning:
        'bg-[#fceaea] text-red-500 hover:bg-[#E3D3D3] rounded-lg p-md gap-0 min-w-[256px] w-[232px] ',
      warningOutline:
        'text-md font-semibold leading-6 bg-white border border-input text-error hover:bg-error hover:text-body-primary rounded-lg p-md gap-0 min-w-[166px] ',
    },
    fontSize: {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    rounded: {
      none: 'rounded-none',
      base: 'rounded-base',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
      custom: 'rounded-[var(--rounded-lg)]',
    },
    padding: {
      default: 'p-[var(--spacing-md)]',
      sm: 'p-[var(--spacing-sm)]',
      lg: 'p-[var(--spacing-2xl)]',
      custom: 'p-[var(--spacing-3xl)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, fontSize, rounded, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            fontSize,
            rounded,
            padding,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };

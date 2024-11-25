import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import MicroCheckIcon from '@/assets/icons/micro-check';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'label'> & { label?: string }
>(({ className, label, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'peer w-[20px] h-[20px] top-[20px] left-[20px] p-spacing-0.5 gap-[0px] rounded-[4px] border-[1.5px] border-gray-100',
          'hover:bg-[#2f68c5] hover:border-[#2f68c5]',
          isChecked ? 'bg-primary border-primary' : '',
          'flex items-center justify-center',
          className,
        )}
        onClick={handleToggle}
        {...props}
      >
        <MicroCheckIcon />
      </CheckboxPrimitive.Root>
      {label && <span className="ml-2 text-sm font-normal leading-[22px] text-black">{label}</span>}
    </div>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };

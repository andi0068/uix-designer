import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export interface BadgeOptions {
  /**
   * @default 'default'
   */
  size?: 'default' | '2xl';
}
export interface BadgeProps extends BadgeOptions, React.ComponentPropsWithRef<'span'> {
  asChild?: boolean;
}

const variants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium border border-separator rounded-full',
  {
    variants: {
      size: {
        default: 'px-4 h-9 text-sm',
        '2xl': 'px-6 h-[3.75rem] text-2xl',
      },
    },
  },
);

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, asChild, size = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp ref={ref} className={cn(variants({ size, className }))} {...props}>
        {children}
      </Comp>
    );
  },
);

export default Badge;

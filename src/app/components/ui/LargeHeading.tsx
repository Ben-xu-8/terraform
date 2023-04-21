import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/app/lib/util';

export const headingVariant = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tigher',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariant> {}

// eslint-disable-next-line
const LargeHeading = React.forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariant({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = 'LargeHeading';

export default Paragraph;

'use client';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

type WithAsProp<T extends object> = T & { asChild?: boolean };

interface BaseProps {
  children?: React.ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};
const viewport = { once: true };

export function Root({ children }: BaseProps) {
  return (
    <motion.section
      className="flex flex-col gap-y-6 lg:col-span-6"
      initial="hidden"
      whileInView="show"
      variants={variants}
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
}
export function Image({ children, asChild }: WithAsProp<BaseProps>) {
  const Comp = asChild ? Slot : 'div';
  return <Comp className="rounded-2xl bg-background-secondary">{children}</Comp>;
}

export function Content({ children }: BaseProps) {
  return <div className="flex flex-col gap-y-3 lg:gap-y-4">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h3 className="text-2xl leading-snug font-semibold lg:text-[2rem]">{children}</h3>;
}

'use client';
import { motion } from 'framer-motion';

interface BaseProps {
  children?: React.ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

export function Root({ children }: BaseProps) {
  return (
    <motion.section
      className="flex flex-col gap-y-4 p-6 border border-separator rounded-3xl transition-colors hover:border-current lg:col-span-4 lg:gap-y-6 lg:p-8"
      initial="hidden"
      whileInView="show"
      variants={variants}
    >
      {children}
    </motion.section>
  );
}

export function Number({ children }: BaseProps) {
  return (
    <p className="text-lg leading-5 font-medium text-foreground-tertiary lg:text-2xl lg:leading-7">
      {children}
    </p>
  );
}

export function Title({ children }: BaseProps) {
  return <h3 className="text-lg leading-6 font-semibold lg:text-2xl">{children}</h3>;
}

export function Description({ children }: BaseProps) {
  return (
    <p className="grow text-xs leading-5 text-foreground-secondary lg:text-sm lg:leading-7">
      {children}
    </p>
  );
}

'use client';
import { motion } from 'framer-motion';

interface BaseProps {
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function Root({ children }: BaseProps) {
  return <section className="sticky top-0 text-inherit bg-inherit">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return (
    <motion.div
      className="desktop-grid grid grid-rows-[auto_1fr_auto] gap-y-14 pt-[9.75rem] pb-14 min-h-screen text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function Title({ children }: BaseProps) {
  return (
    <motion.h2
      className="uppercase text-[3.375rem] leading-none font-semibold lg:col-start-3 lg:col-end-11 lg:text-[9rem]"
      variants={itemVariants}
    >
      {children}
    </motion.h2>
  );
}

export function Description({ children }: BaseProps) {
  return (
    <motion.p
      className="text-xs leading-5 text-dark-foreground-tertiary lg:col-start-4 lg:col-end-10 lg:text-base lg:leading-7"
      variants={itemVariants}
    >
      {children}
    </motion.p>
  );
}

export function Footer({ children }: BaseProps) {
  return (
    <footer className="flex flex-col items-center gap-y-8 lg:col-span-full lg:flex-row lg:justify-between">
      {children}
    </footer>
  );
}

export function Location({ children }: BaseProps) {
  return <p className="text-sm leading-4 font-medium">{children}</p>;
}

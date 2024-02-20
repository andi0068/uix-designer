'use client';
import { motion } from 'framer-motion';

interface BaseProps {
  children?: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export function Root({ children }: BaseProps) {
  return <section className="text-inherit bg-inherit">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid">{children}</div>;
}

export function Blockquote({ children }: BaseProps) {
  return (
    <motion.blockquote
      className="my-auto text-2xl leading-snug font-medium lg:col-start-1 lg:col-end-11 lg:text-[2.75rem]"
      initial="hidden"
      whileInView="show"
      variants={variants}
    >
      {children}
    </motion.blockquote>
  );
}

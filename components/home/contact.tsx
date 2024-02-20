'use client';
import { motion } from 'framer-motion';

interface BaseProps {
  children?: React.ReactNode;
}
interface ContactProps extends BaseProps {
  id?: string;
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
const viewport = { once: true };

export function Root({ children, id }: ContactProps) {
  return (
    <section id={id} className="scroll-target relative text-inherit bg-inherit">
      {children}
    </section>
  );
}

export function Content({ children }: BaseProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-y-8 pt-36 pb-14 text-center lg:items-start lg:text-left"
      initial="hidden"
      whileInView="show"
      variants={variants}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function Title({ children }: BaseProps) {
  return (
    <div className="desktop-grid">
      <h2 className="text-[2rem] leading-[2.75rem] font-medium lg:col-start-1 lg:col-end-8 lg:mr-5 lg:text-6xl lg:leading-[5.25rem]">
        {children}
      </h2>
    </div>
  );
}

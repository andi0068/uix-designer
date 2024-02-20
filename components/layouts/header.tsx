'use client';
import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import { cn } from '@/lib/utils';
import { useContext } from '@/context/header';

interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  const { mode, shouldHide } = useHeader();

  const classMap = {
    light: 'text-foreground bg-background/20',
    dark: 'text-dark-foreground bg-dark-background/20',
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-[color,background-color,transform]',
        classMap[mode],
        shouldHide && '-translate-y-full',
      )}
    >
      {children}
    </header>
  );
}

export function Content({ children }: BaseProps) {
  return <div className="flex items-center justify-between h-14 lg:h-20">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h1 className="uppercase font-bold">{children}</h1>;
}

function useHeader() {
  const [shouldHide, setShouldHide] = useState(false);

  const { mode } = useContext();
  const { scrollY } = useScroll({
    axis: 'y',
    layoutEffect: true,
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShouldHide((scrollY.getPrevious() || 0) < latest);
  });

  return {
    mode,
    shouldHide,
  } as const;
}

export { Provider } from '@/context/header';

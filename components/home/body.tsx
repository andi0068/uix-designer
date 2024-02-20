'use client';
import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { useHeaderContext } from '@/context/header';

interface BodyProps {
  children?: React.ReactNode;
}

export function Body({ children }: BodyProps) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const header = useHeaderContext();

  useLayoutEffect(() => {
    header.setMode(inView ? 'light' : 'dark');
  }, [inView]);

  return (
    <div className="relative flex flex-col gap-y-[9.75rem] py-[9.75rem] text-foreground bg-background lg:gap-y-64 lg:py-64 xl:gap-y-[34.75rem] xl:py-[34.75rem]">
      <span
        ref={ref}
        className="absolute top-[calc(100vh-3.5rem)] bottom-0 lg:top-[calc(100vh-5rem)]"
      />
      {children}
    </div>
  );
}

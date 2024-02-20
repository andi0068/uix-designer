import Marquee from 'react-fast-marquee';

interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <section>{children}</section>;
}

export function Content({ children }: BaseProps) {
  return (
    <Marquee
      autoFill
      speed={80}
      className="flex items-center h-[3.75rem] text-white bg-accent lg:h-[7.5rem]"
    >
      {children}
    </Marquee>
  );
}

export function Item({ children, ...props }: React.AriaAttributes & BaseProps) {
  return (
    <p
      className="px-7 whitespace-nowrap uppercase text-[2rem] leading-none font-medium lg:px-5 lg:text-[3.5rem]"
      {...props}
    >
      {children}
    </p>
  );
}

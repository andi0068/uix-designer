interface BaseProps extends React.AriaAttributes {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function Badges({ children, as: Comp = 'div', ...props }: BaseProps) {
  return (
    <Comp className="flex flex-wrap gap-y-3 gap-x-4" {...props}>
      {children}
    </Comp>
  );
}

export function Projects({ children, as: Comp = 'div', ...props }: BaseProps) {
  return (
    <Comp
      className="desktop-grid flex flex-col gap-y-14 lg:grid-rows-[masonry] lg:gap-y-32 lg:gap-x-14"
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Steps({ children, as: Comp = 'div', ...props }: BaseProps) {
  return (
    <Comp className="desktop-grid flex flex-col gap-y-4 lg:gap-x-4" {...props}>
      {children}
    </Comp>
  );
}

interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <footer className="relative pt-14 pb-36">{children}</footer>;
}

export function Content({ children }: BaseProps) {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      {children}
    </div>
  );
}

export function Copyright({ children }: BaseProps) {
  return <p className="leading-[1.125rem] font-medium">{children}</p>;
}

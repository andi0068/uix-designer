interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <nav>{children}</nav>;
}

export function Content({ children }: BaseProps) {
  return <ul className="inline-flex gap-x-6 lg:gap-x-14">{children}</ul>;
}

export function Item({ children }: BaseProps) {
  return <li className="text-sm font-medium">{children}</li>;
}

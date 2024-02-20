interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="grow text-dark-foreground bg-dark-background">{children}</main>;
}

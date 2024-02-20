interface BaseProps {
  children?: React.ReactNode;
}
interface ProjectsProps extends BaseProps {
  id?: string;
}

export function Root({ children, id }: ProjectsProps) {
  return (
    <section id={id} className="scroll-target text-inherit bg-inherit">
      {children}
    </section>
  );
}

export function Content({ children }: BaseProps) {
  return <div className="flex flex-col gap-y-8 lg:gap-y-20">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return (
    <div className="desktop-grid">
      <h2 className="text-2xl leading-snug font-semibold lg:col-start-1 lg:col-end-7 lg:text-[2.75rem]">
        {children}
      </h2>
    </div>
  );
}

interface ContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Container({ id, children, className }: ContainerProps) {
  return (
    <section
      id={id}
      className={`max-w-full overflow-hidden sm:p-6 md:p-16 relative ${className}`}
    >
      {children}
    </section>
  );
}

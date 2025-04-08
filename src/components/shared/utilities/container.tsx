import Title from "./title";

interface ContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Container({ id, children, className }: ContainerProps) {
  return (
    <section
      id={id.toLocaleLowerCase()}
      className={`max-w-full overflow-hidden p-6 md:p-12
         lg:p-24 relative ${className}`}
    >
      <Title>{id}</Title>
      {children}
    </section>
  );
}

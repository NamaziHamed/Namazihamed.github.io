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
      className={`overflow-hidden p-4 md:p-8
         lg:p-12 relative ${className}`}
    >
      <Title>{id}</Title>
      {children}
    </section>
  );
}

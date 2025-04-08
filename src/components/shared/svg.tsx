interface SVGProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}
export default function SVG({ href, children, className }: SVGProps) {
  return (
    <a
      href={href}
      className={`inline hover:-trnslate-1 dark:text-white hover:text-blue-500
        hover:scale-105 hover:-translate-y-0.5 transition-all duration-300
        ${className}`}
    >
      {children}
    </a>
  );
}

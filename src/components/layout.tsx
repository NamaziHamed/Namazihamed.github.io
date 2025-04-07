import Footer from "./Sections/footer";
import { useEffect } from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <main className="flex flex-col gap-20 md:gap-32 overflow-hidden
      bg-body px-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

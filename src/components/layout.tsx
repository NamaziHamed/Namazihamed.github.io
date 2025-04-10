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
      <main
        className="flex flex-col overflow-hidden
      bg-body"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";

interface SiteLayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

export function SiteLayout({ children, activePath }: SiteLayoutProps) {
  return (
    <>
      <Header activePath={activePath} />
      <main>{children}</main>
      <Footer />
      <MobileNav activePath={activePath} />
    </>
  );
}

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--brand-black)] text-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
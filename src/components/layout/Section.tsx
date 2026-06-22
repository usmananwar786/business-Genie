import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/20 blur-[100px] animate-blob" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--brand-teal)]/25 blur-[120px] animate-blob" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="relative container-x py-24 md:py-32 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs uppercase tracking-[0.2em] text-[var(--brand-teal)] mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] animate-pulse" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, subtitle, center = true }: {
  eyebrow?: string; title: ReactNode; subtitle?: string; center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-white/65 text-lg">{subtitle}</p>}
    </motion.div>
  );
}

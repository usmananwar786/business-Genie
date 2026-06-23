import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Database,
  Megaphone,
  Search,
  Code2,
  Palette,
  Workflow,
  Facebook,
  Instagram,
  Linkedin,
  // Youtube,
} from "lucide-react";
import { SITE } from "@/lib/site";

const MAIN_NAV = [
  { label: "Home", to: "/" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

const SERVICES = [
  {
    icon: Database,
    title: "ERP Implementation",
    desc: "Accounts, inventory, HR, sales & production.",
    to: "/erp-solutions",
  },
  {
    icon: Workflow,
    title: "HRMS",
    desc: "Employee onboarding, billing and operations.",
    to: "/HRMS",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Performance campaigns & lead generation.",
    to: "/digital-marketing",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern websites, platforms & CMS.",
    to: "/web-development",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Technical, on-page & local SEO growth.",
    to: "/seo",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Conversion-focused, premium interfaces.",
    to: "/ui-ux",
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/businessgenieconsulting/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/businessgenieconsulting/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/104830846/",
    icon: Linkedin,
  },
  // {
  //   label: "YouTube",
  //   href: "#",
  //   icon: Youtube,
  // },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mSvcOpen, setMSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,5,5,0.88)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-[rgba(5,5,5,0.20)] backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-[74px] items-center justify-between py-2">
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <div className="relative grid h-[54px] w-[150px] sm:w-[165px] place-items-center rounded-none bg-transparent p-0 ring-0 shadow-none transition-all duration-300 group-hover:ring-0 group-hover:shadow-none">
            <div className="absolute inset-0 rounded-none bg-transparent opacity-0 blur-none transition-opacity duration-300 group-hover:opacity-0" />

            <img
              src={SITE.logo2}
              alt={SITE.name}
              className="relative h-full w-full rounded-none object-contain brightness-110 contrast-110 saturate-125 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {MAIN_NAV.slice(0, 2).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-white/85 hover:text-[var(--brand-orange)] transition-colors"
              onClick={() => setSvcOpen((open) => !open)}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  svcOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {svcOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]"
                >
                  <div className="rounded-2xl bg-[rgba(10,10,10,0.96)] border border-white/10 shadow-2xl backdrop-blur-xl p-3 grid grid-cols-2 gap-1">
                    {SERVICES.map((service, index) => (
                      <motion.div
                        key={service.to}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          to={service.to}
                          onClick={() => setSvcOpen(false)}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-orange text-black shrink-0 group-hover:scale-110 transition-transform">
                            <service.icon className="h-[18px] w-[18px]" />
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-white group-hover:text-[var(--brand-orange)] transition-colors">
                              {service.title}
                            </div>

                            <div className="text-xs text-white/55 mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {MAIN_NAV.slice(2).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            {SOCIALS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.05,
                  duration: 0.35,
                }}
                whileHover={{ y: -3, scale: 1.08 }}
                className="group grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--brand-orange)]/10"
              >
                <social.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((open) => !open)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-md bg-white/5 border border-white/10 text-white"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[rgba(5,5,5,0.97)] backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-x py-3 flex flex-col gap-0.5">
              {MAIN_NAV.slice(0, 2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMSvcOpen((open) => !open)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm text-white/85 hover:bg-white/5"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mSvcOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mSvcOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-3"
                  >
                    {SERVICES.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        onClick={() => {
                          setOpen(false);
                          setMSvcOpen(false);
                        }}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-white/75 hover:text-[var(--brand-orange)]"
                      >
                        <service.icon className="h-4 w-4 text-[var(--brand-orange)]" />
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {MAIN_NAV.slice(2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/10 pt-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--brand-orange)]/10"
                  >
                    <social.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-[13px] font-medium text-white/85 hover:text-[var(--brand-orange)] transition-colors relative group"
      activeProps={{ className: "text-[var(--brand-orange)]" }}
    >
      {label}

      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}
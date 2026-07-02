import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";
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
  Sun,
  Moon,
  // Youtube,
} from "lucide-react";
import { SITE } from "@/lib/site";

const THEME_STORAGE_KEY = "business-genie-theme-v2";

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

  // Default website open par cream/off-white theme hogi
  const [creamTheme, setCreamTheme] = useState(true);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    // Agar user ne pehle dark select kiya hai to dark rahega,
    // warna by default cream/off-white theme open hogi.
    const shouldUseCreamTheme = savedTheme !== "dark";

    setCreamTheme(shouldUseCreamTheme);
    document.body.classList.toggle("cream-theme", shouldUseCreamTheme);
    document.documentElement.classList.toggle("cream-theme", shouldUseCreamTheme);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleThemeToggle = () => {
    setCreamTheme((current) => {
      const nextTheme = !current;

      document.body.classList.toggle("cream-theme", nextTheme);
      document.documentElement.classList.toggle("cream-theme", nextTheme);

      localStorage.setItem(THEME_STORAGE_KEY, nextTheme ? "cream" : "dark");

      return nextTheme;
    });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--header-bg-scrolled)] backdrop-blur-xl border-b border-[var(--header-border)] shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
          : "bg-[var(--header-bg)] backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-[74px] items-center justify-between py-2">
   <Link to="/" className="flex items-center gap-2 shrink-0">
  <div className="header-logo-wrap relative grid place-items-center overflow-hidden bg-transparent">
    {/* Logo 2: Dark / black theme */}
    <img
      src={SITE.logo2}
      alt={SITE.name}
      className={`header-logo-img header-logo-dark absolute inset-0 transition-opacity duration-300 ${
        creamTheme ? "opacity-0" : "opacity-100"
      }`}
    />

    {/* Logo 3: Cream / off-white theme */}
    <img
      src="/logo3.png"
      alt={SITE.name}
      className={`header-logo-img header-logo-cream absolute inset-0 transition-opacity duration-300 ${
        creamTheme ? "opacity-100" : "opacity-0"
      }`}
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
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[var(--nav-text)] hover:text-[var(--brand-orange)] transition-colors"
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
                  <div className="rounded-2xl bg-[var(--dropdown-bg)] border border-[var(--header-border)] shadow-2xl backdrop-blur-xl p-3 grid grid-cols-2 gap-1">
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
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--nav-hover-bg)] transition-colors"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-orange text-black shrink-0 group-hover:scale-110 transition-transform">
                            <service.icon className="h-[18px] w-[18px]" />
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[var(--dropdown-text)] group-hover:text-[var(--brand-orange)] transition-colors">
                              {service.title}
                            </div>

                            <div className="text-xs text-[var(--dropdown-muted)] mt-0.5">
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
          {/* Icon right = cream, icon left = dark */}
          <ThemeToggle creamTheme={creamTheme} onToggle={handleThemeToggle} />

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
                className="group grid h-9 w-9 place-items-center rounded-full border border-[var(--header-border)] bg-[var(--social-bg)] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--social-hover-bg)]"
              >
                <social.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((open) => !open)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-md bg-[var(--social-bg)] border border-[var(--header-border)] text-[var(--nav-text)]"
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
            className="lg:hidden overflow-hidden bg-[var(--mobile-menu-bg)] backdrop-blur-xl border-t border-[var(--header-border)]"
          >
            <div className="container-x py-3 flex flex-col gap-0.5">
              {MAIN_NAV.slice(0, 2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMSvcOpen((open) => !open)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]"
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
                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--nav-muted)] hover:text-[var(--brand-orange)]"
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
                  className="px-3 py-2.5 rounded-md text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 flex items-center justify-center gap-3 border-t border-[var(--header-border)] pt-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--header-border)] bg-[var(--social-bg)] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--social-hover-bg)]"
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

function ThemeToggle({
  creamTheme,
  onToggle,
}: {
  creamTheme: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle website color theme"
      aria-pressed={creamTheme}
      className={`relative h-9 w-[68px] shrink-0 rounded-full border transition-all duration-300 ${
        creamTheme
          ? "border-[var(--brand-orange)] bg-[#ffffff]"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <span
        className={`absolute left-1 top-1 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-orange)] text-black shadow-lg transition-transform duration-300 ${
          creamTheme ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {creamTheme ? (
          <Sun className="h-3.5 w-3.5" />
        ) : (
          <Moon className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}

function NavLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-[13px] font-medium text-[var(--nav-text)] hover:text-[var(--brand-orange)] transition-colors relative group"
      activeProps={{ className: "text-[var(--brand-orange)]" }}
    >
      {label}

      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}
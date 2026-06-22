import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { LOCATIONS } from "@/lib/site";

const sections = [
  {
    title: "Quick Links",
    items: [
      { l: "Home", to: "/" },
      { l: "ERP Solutions", to: "/erp-solutions" },
      { l: "Portfolio", to: "/portfolio" },
      { l: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { l: "ERP Implementation", to: "/erp-solutions" },
      { l: "HR Solutions", to: "/hr" },
      { l: "Digital Marketing", to: "/digital-marketing" },
      { l: "SEO Services", to: "/seo" },
      { l: "Web Development", to: "/web-development" },
      { l: "UI/UX Design", to: "/ui-ux" },
      { l: "Business Automation", to: "/portfolio" },
    ],
  },
];

export function Footer() {
  const footerEmail = "info@businessgenie.net";
  const footerNumbers = ["04238977959", "+923394050121"];

  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-split" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--brand-teal)]/30 blur-[120px]" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[var(--brand-orange)]/15 blur-[120px]" />

      <div className="relative container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="-ml-2 md:-ml-4">
              <img
                src="/logo2.png"
                alt="Business Genie Consulting"
                className="h-14 w-auto max-w-[220px] object-contain block"
              />
            </div>

            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Business Genie Consulting helps businesses automate operations,
              build digital systems, and grow through ERP, HR, marketing, SEO,
              web development, and UI/UX solutions.
            </p>

            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Instagram, Twitter, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-orange hover:text-black hover:border-transparent transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-white font-semibold mb-5">{s.title}</h4>

              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it.l}>
                    <Link
                      to={it.to}
                      className="text-sm text-white/65 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      {it.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-5">Global Presence</h4>

            <ul className="space-y-3 mb-6">
              {LOCATIONS.map((loc) => (
                <li
                  key={loc.country}
                  className="flex items-start gap-2 text-sm text-white/65"
                >
                  <MapPin className="h-4 w-4 mt-0.5 text-[var(--brand-teal)] shrink-0" />
                  <span>
                    <span className="text-white">{loc.country}</span> —{" "}
                    {loc.city}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              {footerNumbers.map((number) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--brand-orange)]"
                >
                  <Phone className="h-4 w-4" />
                  {number}
                </a>
              ))}

              <a
                href={`mailto:${footerEmail}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--brand-orange)]"
              >
                <Mail className="h-4 w-4" />
                {footerEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} Business Genie Consulting. All Rights
            Reserved. Designed & Developed by Usman.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
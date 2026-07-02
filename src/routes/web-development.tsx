import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Monitor,
  CheckCircle2,
  Database,
  Server,
  Layers3,
  Rocket,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Advanced MERN stack web development, business websites, custom platforms, dashboards, e-commerce websites and full-stack web applications.",
      },
    ],
  }),
  component: Web,
});

const services = [
  "Business websites",
  "Custom websites",
  "Landing pages",
  "E-commerce websites",
  "MERN stack apps",
  "Admin dashboards",
  "CRM portals",
  "API integrations",
  "Payment gateways",
  "Booking systems",
  "Speed optimization",
  "Website maintenance",
];

const flipCards = [
  {
    img: "/web-app-development.jpg",
    icon: Monitor,
    title: "Web Application Development",
    short: "Custom business websites and web apps",
    desc: "We build professional business websites, dashboards, portals and custom web applications.",
    points: [
      "Business websites and landing pages",
      "Admin dashboards and custom portals",
      "Responsive layout and SEO-ready structure",
    ],
    stack: ["React", "TypeScript", "Tailwind", "MERN"],
  },
  {
    img: "/ui-ux-development.jpg",
    icon: Smartphone,
    title: "UI / UX & Frontend Development",
    short: "Premium interface with smooth experience",
    desc: "We create modern frontend interfaces with animations, mobile responsiveness, reusable components and conversion-focused user journeys.",
    points: [
      "Premium UI sections and layouts",
      "Framer Motion micro-interactions",
      "Mobile-first responsive experience",
    ],
    stack: ["React", "UI/UX", "Framer Motion", "Responsive"],
  },
  {
    img: "/api-development.jpg",
    icon: Server,
    title: "Backend & API Development",
    short: "Secure backend, APIs and integrations",
    desc: "We develop backend systems with secure APIs, authentication, databases, payment gateways, CRM integrations and scalable server-side logic.",
    points: [
      "Node.js and Express REST APIs",
      "MongoDB database architecture",
      "Auth, payment and CRM integrations",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];

const advancedFeatures = [
  "MERN stack architecture",
  "React + TypeScript frontend",
  "Node.js and Express backend",
  "MongoDB database modeling",
  "Authentication and user roles",
  "Payment gateway integration",
  "CRM and booking system integration",
  "Admin dashboard development",
];

function Web() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Web Development"
        title={
          <>
            Advanced MERN stack and{" "}
            <span className="text-gradient-orange">conversion-focused</span>{" "}
            websites
          </>
        }
        subtitle="We build premium business websites, full-stack web apps, dashboards, e-commerce stores and custom platforms with modern UI, clean code and scalable backend systems."
      >
        <Link
          to="/contact"
          className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange"
        >
          Start Your Project <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="Development Capabilities"
            title="Web solutions built for real business requirements"
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.015 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/45 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/16" />

                <div className="relative">
                  <Code2 className="h-5 w-5 text-[var(--brand-teal)] mb-3 transition-colors duration-300 group-hover:text-[var(--brand-orange)]" />

                  <div className="text-sm font-medium text-white/85">
                    {s}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="web-flip-section !pt-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--brand-teal)]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[var(--brand-orange)]/10 blur-[120px]" />

        <div className="relative container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Developer Services
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Hover on image to view{" "}
              <span className="text-gradient-orange">service details</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65">
              Card par mouse le jao to image flip hogi aur details show hongi.
              Mouse door karte hi card wapas image par aa jaye ga.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {flipCards.map((card, i) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.65,
                    ease: "easeOut",
                  }}
                  className="group h-[540px] [perspective:1400px]"
                >
                  <div
                    className="relative h-full w-full rounded-3xl transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Image Side */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-black/40"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={card.img}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                      <motion.div
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--brand-orange)]/0 blur-[100px] transition-colors duration-500 group-hover:bg-[var(--brand-orange)]/25"
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.35, 0.75, 0.35],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="absolute left-5 right-5 bottom-5">
                        <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-orange text-black shadow-lg shadow-[var(--brand-orange)]/20">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                          {card.short}
                        </p>
                      </div>
                    </div>

                    {/* Back Text Side */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-3xl border border-[var(--brand-orange)]/40 bg-[#101010] p-6 backdrop-blur-xl [transform:rotateY(180deg)]"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--brand-orange)]/18 blur-[90px]" />
                      <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-[var(--brand-teal)]/12 blur-[90px]" />

                      <div className="relative flex h-full flex-col justify-between">
                        <div>
                          <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-orange text-black">
                            <Icon className="h-6 w-6" />
                          </div>

                          <h3 className="mt-5 text-2xl sm:text-3xl font-bold leading-tight text-white">
                            {card.title}
                          </h3>

                          <p className="mt-4 text-sm leading-relaxed text-white/65">
                            {card.desc}
                          </p>

                          <div className="mt-6 space-y-3">
                            {card.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-orange)]" />

                                <span className="text-sm text-white/75">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-2">
                            {card.stack.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/65"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to="/contact"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-orange px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                          >
                            Get in Touch <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/12 blur-[110px]" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[var(--brand-teal)]/10 blur-[110px]" />

            <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  Advanced Features
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Full-stack features built with clean code and scalable logic
                </h2>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/65">
                  A complete MERN stack development service covering frontend,
                  backend, database, integrations, dashboards and business-ready
                  automation.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {advancedFeatures.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.04,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition-all duration-300 hover:border-[var(--brand-orange)]/40 hover:bg-white/[0.05]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-orange)]" />

                      <span className="text-sm text-white/75">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="rounded-3xl border border-white/10 bg-black/25 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                    <Rocket className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      Development Process
                    </div>

                    <div className="text-xs text-white/45">
                      From idea to launch
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Requirement analysis",
                    "UI/UX planning",
                    "Frontend development",
                    "Backend and API setup",
                    "Database integration",
                    "Testing and launch",
                  ].map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.06,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 transition-all duration-300 hover:border-[var(--brand-orange)]/40"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--brand-orange)]/15 text-sm font-semibold text-[var(--brand-orange)]">
                        {idx + 1}
                      </div>

                      <div className="text-sm text-white/75">{step}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { icon: Layers3, label: "MERN" },
                    { icon: Server, label: "Backend" },
                    { icon: Database, label: "Database" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        whileHover={{ y: -5 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center transition-all duration-300 hover:border-[var(--brand-orange)]/40"
                      >
                        <Icon className="mx-auto h-5 w-5 text-[var(--brand-orange)]" />

                        <div className="mt-2 text-xs text-white/60">
                          {item.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
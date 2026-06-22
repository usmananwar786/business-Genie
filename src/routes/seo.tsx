import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Gauge,
  FileSearch,
  MapPin,
  PenTool,
  BarChart3,
  Link2,
  Settings,
  CheckCircle2,
  Target,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Professional SEO services including technical SEO, on-page SEO, local SEO, keyword research, content strategy, competitor analysis and monthly SEO reporting.",
      },
    ],
  }),
  component: SEO,
});

const heroPoints = ["Technical SEO", "Local SEO", "Content Strategy"];

const seoCards: {
  icon: LucideIcon;
  img: string;
  title: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: Gauge,
    img: "/public/optimization.jpg",
    title: "Technical SEO",
    desc: "We improve your website foundation so Google can crawl, index and understand your pages properly.",
    points: ["Speed optimization", "Indexing fixes", "Core site health"],
  },
  {
    icon: MapPin,
    img: "/public/local-seo.jpg",
    title: "Local SEO",
    desc: "We optimize your local visibility so nearby customers can find your business on Google Search and Maps.",
    points: ["Google Business Profile", "Local keywords", "Location pages"],
  },
  {
    icon: PenTool,
    img: "/public/content-seo.jpg",
    title: "Content SEO",
    desc: "We create keyword-focused content plans that target search intent and support long-term organic growth.",
    points: ["Service pages", "Blog strategy", "Content clusters"],
  },
];

const seoServices = [
  {
    icon: FileSearch,
    title: "SEO Audit",
    desc: "Complete review of website structure, indexing, speed, errors and ranking issues.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    desc: "Keyword mapping based on search intent, competition and business value.",
  },
  {
    icon: Settings,
    title: "On-Page SEO",
    desc: "Meta titles, descriptions, headings, internal links and page structure optimization.",
  },
  {
    icon: BarChart3,
    title: "SEO Reporting",
    desc: "Monthly ranking, traffic, clicks, impressions and SEO progress reporting.",
  },
];

const process = [
  {
    step: "",
    title: "Audit",
    desc: "We review website health, technical issues, content quality and current search visibility.",
  },
  {
    step: "",
    title: "Research",
    desc: "We analyze keywords, competitors, customer intent and ranking opportunities.",
  },
  {
    step: "",
    title: "Optimize",
    desc: "We improve pages, content, metadata, internal links, speed and local SEO structure.",
  },
  {
    step: "",
    title: "Grow",
    desc: "We monitor rankings, update content and improve SEO performance month by month.",
  },
];

const auditPoints = [
  "Website crawlability and indexing review",
  "Technical SEO and page speed improvement",
  "Keyword mapping for service and location pages",
  "On-page SEO and internal linking structure",
  "Google Search Console and analytics review",
];

function SEO() {
  return (
    <SiteLayout>
      {/* Video Header */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-35 scale-105"
          >
            <source src="/seo-hero.mp4" type="video/mp4" />
          </video>

          {/* SEO Banner Background */}
          <img
            src="/public/seo-banner.jpg"
            alt="SEO banner background"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-[#050505]/62" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/35 via-[#050505]/48 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-[#050505]/15 to-[#050505]/75" />
        </div>

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--brand-orange)]/20 blur-[145px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[var(--brand-teal)]/10 blur-[160px]"
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "82px 82px",
          }}
        />

        <div className="relative container-x">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md"
            >
              <Search className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
              Professional SEO Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.75 }}
              className="mx-auto max-w-5xl text-[36px] sm:text-[46px] md:text-[58px] lg:text-[70px] font-semibold leading-[1.08] tracking-[-0.035em] text-white"
            >
              Build long-term growth with{" "}
              <span className="text-gradient-orange">
                professional SEO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70"
            >
              We improve your website visibility with technical SEO, keyword
              research, on-page optimization, local SEO, content strategy and
              clear monthly reporting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.65 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-orange px-6 py-3.5 font-semibold text-black glow-orange transition-transform hover:scale-[1.03]"
              >
                Free SEO Audit
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-white transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-white/5 hover:text-[var(--brand-orange)]"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.65 }}
              className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {heroPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                    {item}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 SEO Graphic Cards */}
      <Section>
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="SEO Growth Areas"
              title={
                <>
                  SEO built around{" "}
                  <span className="text-gradient-orange">
                    ranking, traffic and visibility
                  </span>
                </>
              }
              subtitle="We focus on the core SEO areas that directly improve your website foundation, local presence and content performance."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {seoCards.map((card, i) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 34, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/20" />
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-[245px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
                      <div className="inline-flex rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                        SEO
                      </div>

                      <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[var(--brand-orange)] backdrop-blur-md">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="relative p-2 pt-5">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {card.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-white/75"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* SEO Audit / Growth Section */}
      <Section className="relative overflow-hidden !pt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />

        <div className="relative container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              SEO Growth System
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              We fix the foundation first, then build{" "}
              <span className="text-gradient-orange">
                sustainable organic growth
              </span>
              .
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/65">
              SEO is not only about adding keywords. A strong SEO strategy needs
              clean technical setup, proper page structure, search intent,
              quality content and consistent improvement.
            </p>

            <div className="mt-7 space-y-3">
              {auditPoints.map((point) => (
                <motion.div
                  key={point}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[var(--brand-orange)]/40 hover:text-white"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SEO Graph Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 backdrop-blur-xl"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/18 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                    SEO Performance View
                  </div>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                    Organic growth workflow
                  </h3>
                </div>

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-orange text-black">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  ["Technical", "Improved", "82%"],
                  ["Content", "Optimized", "90%"],
                  ["Local SEO", "Strengthened", "76%"],
                ].map(([label, value, width]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="text-xs text-white/45">{label}</div>

                    <div className="mt-2 text-lg font-semibold text-white">
                      {value}
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.25,
                          duration: 0.75,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-orange"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex h-36 items-end gap-2 rounded-2xl border border-white/10 bg-[#070707] p-4">
                {[24, 32, 42, 50, 58, 68, 74, 82, 90, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.65,
                      ease: "easeOut",
                    }}
                    className="flex-1 rounded-t-lg bg-gradient-orange"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SEO Services Mini Cards */}
      <Section className="!pt-0">
        <div className="container-x">
          <SectionTitle
            eyebrow="SEO Services"
            title={
              <>
                Complete SEO support for{" "}
                <span className="text-gradient-orange">
                  better Google visibility
                </span>
              </>
            }
            subtitle="A professional SEO plan covers technical issues, keywords, content, local visibility and reporting."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seoServices.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                  <div className="relative">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* SEO Process */}
      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our SEO Process"
            title={
              <>
                A clear SEO roadmap from audit to{" "}
                <span className="text-gradient-orange">ranking growth</span>
              </>
            }
            subtitle="We follow a structured SEO process so every action has a clear purpose and measurable impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                <div className="relative">
                  <div className="mb-5 text-4xl font-bold text-gradient-orange">
                    {p.step}
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
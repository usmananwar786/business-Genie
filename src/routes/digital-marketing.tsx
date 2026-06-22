import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  TrendingUp,
  BarChart3,
  Search,
  Megaphone,
  MousePointerClick,
  LineChart,
  Settings,
  CheckCircle2,
  Rocket,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Professional digital marketing services including Google Ads, Meta Ads, LinkedIn Ads, SEO, lead generation, conversion tracking, social media marketing and campaign optimization.",
      },
    ],
  }),
  component: DM,
});

const services: {
  icon: LucideIcon;
  img: string;
  title: string;
  desc: string;
  features: string[];
}[] = [
  {
    icon: Search,
    img: "/google-ads.jpg",
    title: "Google Ads",
    desc: "High-intent search campaigns designed to reach people actively looking for your services.",
    features: ["Search Ads", "Call Ads", "Lead Forms"],
  },
  {
    icon: Megaphone,
    img: "/meta-ads.jpg",
    title: "Meta Ads",
    desc: "Facebook and Instagram campaigns for awareness, leads, retargeting, sales and brand growth.",
    features: ["Facebook Ads", "Instagram Ads", "Retargeting"],
  },
  {
    icon: Globe2,
    img: "/linkedin-ads.jpg",
    title: "LinkedIn Ads",
    desc: "B2B campaigns built to reach founders, business owners, professionals and decision makers.",
    features: ["B2B Leads", "Company Targeting", "Professional Audience"],
  },
];

const process = [
  {
    step: "",
    title: "Business Analysis",
    desc: "We understand your services, audience, competitors, target locations and current marketing setup.",
  },
  {
    step: "",
    title: "Campaign Planning",
    desc: "We choose the right channels, campaign structure, keywords, audiences, creatives and funnel strategy.",
  },
  {
    step: "",
    title: "Tracking & Launch",
    desc: "We set up GA4, GTM, pixels, events, conversion actions and launch campaigns with clean tracking.",
  },
  {
    step: "",
    title: "Optimize & Scale",
    desc: "We monitor performance, improve ads, test creatives, reduce wasted spend and scale winning campaigns.",
  },
];

const metrics = [
  {
    icon: Target,
    t: "Lead Quality",
    v: "Focused",
    d: "Campaigns designed to attract relevant prospects, not random clicks.",
  },
  {
    icon: TrendingUp,
    t: "Growth Strategy",
    v: "Scalable",
    d: "A marketing system built to improve over time with testing and optimization.",
  },
  {
    icon: BarChart3,
    t: "Reporting",
    v: "Clear",
    d: "Transparent reporting for spend, leads, conversions, CPL and campaign performance.",
  },
];

function DM() {
  return (
    <SiteLayout>
      {/* Video Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
        {/* Yahan iframe background me set kiya hai */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=djry1d68x&public_id=digital-marketing-hero_d82hhc&autoplay=true&loop=true&muted=true&controls=false"
            className="h-full w-full object-cover opacity-55 scale-105 border-0"
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 bg-[#050505]/62" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/45 via-[#050505]/45 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />
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
          className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[var(--brand-orange)]/12 blur-[160px]"
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
              <Megaphone className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
              Digital Marketing Growth Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.75 }}
              className="mx-auto max-w-5xl text-[36px] sm:text-[46px] md:text-[58px] lg:text-[70px] font-semibold leading-[1.08] tracking-[-0.035em] text-white"
            >
              Grow your business with{" "}
              <span className="text-gradient-orange">
                performance marketing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70"
            >
              We help businesses generate quality leads, improve online
              visibility, track every conversion and scale campaigns across
              Google, Meta, LinkedIn and digital platforms.
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
                Get Free Marketing Audit
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
              {["Google Ads", "Meta Ads", "Lead Generation"].map((item) => (
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

      {/* Marketing Services Cards */}
      <Section>
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="Digital Marketing Services"
              title={
                <>
                  Everything you need to build a{" "}
                  <span className="text-gradient-orange">
                    stronger online presence
                  </span>
                </>
              }
              subtitle="From paid ads to tracking and reporting, we create a complete marketing system that supports real business growth."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 34, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.07,
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
                      src={s.img}
                      alt={s.title}
                      className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
                      <div className="inline-flex rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                        Marketing
                      </div>

                      <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[var(--brand-orange)] backdrop-blur-md">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="relative p-2 pt-5">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {s.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-white/75"
                        >
                          {feature}
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

      {/* Strategy Section */}
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
              Performance Strategy
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              We connect ads, landing pages and tracking into{" "}
              <span className="text-gradient-orange">one growth system</span>.
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/65">
              Many businesses run ads without proper tracking, landing page
              structure or conversion strategy. We help you build a complete
              marketing flow so every campaign has a clear purpose and every
              lead can be measured.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Campaign structure based on business goals",
                "Audience, keyword and creative strategy",
                "Conversion tracking for calls, forms and WhatsApp",
                "Ongoing optimization to reduce wasted spend",
              ].map((point) => (
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

          {/* Graph Card */}
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
                    Marketing System
                  </div>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                    Campaign performance workflow
                  </h3>
                </div>

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-orange text-black">
                  <BarChart3 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  ["Traffic", "Qualified", "w-[82%]"],
                  ["Leads", "Measured", "w-[90%]"],
                  ["Reports", "Clear", "w-[76%]"],
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
                        whileInView={{ width: width.replace("w-[", "").replace("]", "") }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-orange"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex h-36 items-end gap-2 rounded-2xl border border-white/10 bg-[#070707] p-4">
                {[42, 64, 52, 76, 68, 88, 74, 94, 82, 98].map((h, i) => (
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

      {/* Process Cards */}
      <Section className="!pt-0">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our Process"
            title={
              <>
                A simple process from strategy to{" "}
                <span className="text-gradient-orange">campaign growth</span>
              </>
            }
            subtitle="We follow a clear process to understand your business, launch the right campaigns and optimize based on performance data."
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

      {/* Performance Focus Cards */}
      <Section className="relative overflow-hidden !pt-0 !pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-orange)]/10 via-transparent to-transparent" />

        <div className="relative container-x grid gap-6 md:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = m.icon;

            return (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mb-2 text-4xl font-bold text-gradient-orange">
                    {m.v}
                  </div>

                  <div className="mb-3 text-lg font-semibold text-white">
                    {m.t}
                  </div>

                  <p className="text-sm leading-relaxed text-white/60">
                    {m.d}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
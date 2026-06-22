import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Database, Megaphone, Search, Code2, Palette, Workflow,
  Cloud, ShieldCheck, BarChart3, Smartphone, Globe2, Bot, Zap, Layers,
  CheckCircle2, Sparkles, Rocket, TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Business Genie Consulting" },
      { name: "description", content: "ERP, digital marketing, SEO, web development, UI/UX design and business automation — one growth partner for your entire stack." },
    ],
  }),
  component: Services,
});

const items = [
  { icon: Database,   title: "ERP Implementation",  desc: "Accounts, inventory, HR, sales, purchase, production, reporting & business automation.", to: "/erp-solutions",     tags: ["Odoo", "SAP", "Custom"] },
  { icon: Megaphone,  title: "Digital Marketing",   desc: "Performance campaigns to generate leads, grow brand visibility and boost online sales.",  to: "/digital-marketing", tags: ["Meta Ads", "Google Ads", "Funnels"] },
  { icon: Search,     title: "SEO Services",        desc: "Technical SEO, on-page, local SEO, content strategy & organic growth planning.",          to: "/seo",               tags: ["Technical", "Local", "Content"] },
  { icon: Code2,      title: "Web Development",     desc: "Modern websites, business platforms, landing pages, CMS & custom web solutions.",          to: "/web-development",   tags: ["React", "Next.js", "CMS"] },
  { icon: Palette,    title: "UI / UX Design",      desc: "User interfaces, mobile app design, dashboards & conversion-focused layouts.",             to: "/ui-ux",             tags: ["Figma", "Design System", "Apps"] },
  { icon: Workflow,   title: "Business Automation", desc: "Workflow automation, CRM integration, sales process automation & operational control.",   to: "/contact",           tags: ["CRM", "Zapier", "RPA"] },
  { icon: Cloud,      title: "Cloud & DevOps",      desc: "Cloud migration, deployments, CI/CD pipelines, monitoring & infrastructure scaling.",      to: "/contact",           tags: ["AWS", "Azure", "Docker"] },
  { icon: ShieldCheck,title: "Cybersecurity",       desc: "Security audits, vulnerability assessments, hardening & compliance for your business.",   to: "/contact",           tags: ["Audit", "ISO", "Pentest"] },
  { icon: BarChart3,  title: "Data & Analytics",    desc: "BI dashboards, data warehousing, KPIs & decision intelligence for executives.",            to: "/contact",           tags: ["Power BI", "Tableau", "ETL"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS, Android & cross-platform apps engineered for scale, speed & retention.",          to: "/contact",           tags: ["iOS", "Android", "Flutter"] },
  { icon: Bot,        title: "AI & Chatbots",       desc: "AI assistants, GPT integrations, smart automation & intelligent customer support bots.",  to: "/contact",           tags: ["GPT", "RAG", "Agents"] },
  { icon: Globe2,     title: "E-Commerce Solutions",desc: "Shopify, WooCommerce & custom stores engineered to convert and scale globally.",         to: "/contact",           tags: ["Shopify", "Woo", "Custom"] },
];

const process = [
  { n: "01", t: "Discover",  d: "Deep audit of your business, goals & gaps." , icon: Search },
  { n: "02", t: "Strategy",  d: "Roadmap, KPIs and tech stack designed for ROI.", icon: Layers },
  { n: "03", t: "Build",     d: "Sprint-based execution by senior specialists.",  icon: Zap },
  { n: "04", t: "Scale",     d: "Optimize, automate & compound the results.",     icon: TrendingUp },
];

const whyUs = [
  "Senior-only delivery teams",
  "Fixed timelines & transparent pricing",
  "End-to-end ownership — strategy to launch",
  "Premium design & engineering quality",
  "24/7 post-launch support",
  "Proven across 12+ industries",
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services & Solutions"
        title={<>One partner for your <span className="text-gradient-orange">entire growth stack</span></>}
        subtitle="ERP, marketing, web, design, AI & automation — engineered to work together, not in silos."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-orange text-black font-semibold glow-orange hover:scale-[1.04] transition-transform">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition">
            See Our Work
          </Link>
        </div>
      </PageHero>

      {/* Service Cards Grid */}
      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="What we do"
            title={<>12 specialized services. <span className="text-gradient-orange">One outcome — growth.</span></>}
            subtitle="Hover any card to explore. Click to dive into the full capability."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[var(--brand-orange)]/50 transition-all duration-500 overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(255,138,0,0.15), transparent 40%)" }} />
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--brand-orange)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-orange text-black shadow-[0_10px_30px_-10px_rgba(255,138,0,0.6)]"
                    >
                      <s.icon className="h-7 w-7" />
                    </motion.div>
                    <span className="text-5xl font-bold text-white/5 group-hover:text-[var(--brand-orange)]/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--brand-orange)] transition-colors">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">{s.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link to={s.to} className="inline-flex items-center gap-1.5 text-sm text-[var(--brand-orange)] font-semibold group-hover:gap-3 transition-all">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gradient-to-b from-transparent via-[var(--brand-orange)]/[0.03] to-transparent">
        <div className="container-x">
          <SectionTitle
            eyebrow="How we deliver"
            title={<>A proven <span className="text-gradient-orange">4-step process</span></>}
            subtitle="From first conversation to measurable scale — built for senior teams who hate guesswork."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[var(--brand-orange)]/50 transition-all group"
              >
                <div className="text-5xl font-bold text-gradient-orange mb-3">{p.n}</div>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 mb-3 group-hover:bg-gradient-orange group-hover:text-black transition-all">
                  <p.icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold mb-1">{p.t}</h4>
                <p className="text-white/60 text-sm">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">Why Business Genie</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Premium delivery. <span className="text-gradient-orange">Zero excuses.</span>
            </h2>
            <p className="text-white/65 text-lg mb-8">
              We work with founders, CXOs and growth teams who refuse mediocrity. Every engagement is led by senior specialists with skin in the game.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whyUs.map((w, i) => (
                <motion.li
                  key={w}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 text-white/85"
                >
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0 mt-0.5" />
                  <span className="text-sm">{w}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-orange opacity-20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Rocket,    v: "180+", l: "Projects Delivered" },
                { icon: Sparkles,  v: "98%",  l: "Client Retention" },
                { icon: TrendingUp,v: "12+",  l: "Industries Served" },
                { icon: Globe2,    v: "5",    l: "Global Offices" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
                  className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--brand-orange)]/50 transition-all"
                >
                  <s.icon className="h-7 w-7 text-[var(--brand-orange)] mb-3" />
                  <div className="text-3xl font-bold text-white">{s.v}</div>
                  <div className="text-xs text-white/60 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-[var(--brand-orange)]/20 via-black to-black border border-[var(--brand-orange)]/30"
          >
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/30 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-blob" />
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">Talk to our senior consultants. No sales pitch — just a clear roadmap built for your goals.</p>
              <Link to="/contact" className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-orange text-black font-semibold glow-orange hover:scale-[1.04] transition-transform">
                Start your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </SiteLayout>
  );
}

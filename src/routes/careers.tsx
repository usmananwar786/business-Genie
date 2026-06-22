import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Upload } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Business Genie Consulting" },
      { name: "description", content: "Build your career with Business Genie Consulting. Open roles in marketing, SEO, dev, design, ERP and BD." },
    ],
  }),
  component: Careers,
});

const jobs = [
  { t: "Digital Marketing Specialist", type: "Full-time", loc: "Remote / Lahore", d: "Plan and execute paid campaigns across Google, Meta and LinkedIn." },
  { t: "SEO Executive", type: "Full-time", loc: "Hybrid / Lahore", d: "On-page, technical and local SEO across multiple client accounts." },
  { t: "Web Developer", type: "Full-time", loc: "Remote", d: "React, Next.js and modern web stacks for premium business websites." },
  { t: "UI/UX Designer", type: "Full-time", loc: "Hybrid", d: "Design dashboards, SaaS products and conversion-focused landing pages." },
  { t: "ERP Implementation Specialist", type: "Full-time", loc: "On-site / Lahore", d: "Setup, migration, training and support across accounts, inventory and HR." },
  { t: "Business Development Executive", type: "Full-time", loc: "Lahore / Dubai", d: "Pipeline, qualification and consultative sales to mid-market businesses." },
  { t: "Content Writer", type: "Contract", loc: "Remote", d: "SEO content, case studies and thought-leadership across the website and blog." },
  { t: "Graphic Designer", type: "Full-time", loc: "Hybrid", d: "Ads, social creatives, decks and brand assets for clients and in-house." },
];

const why = [
  "Growth-focused environment",
  "Real business projects",
  "Learning and training",
  "Remote and hybrid opportunities",
  "Creative freedom",
  "Supportive team culture",
];

function Careers() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title={<>Build your career with <span className="text-gradient-orange">Business Genie</span></>}
        subtitle="We're looking for creative, technical and growth-focused people who want to work on real business transformation projects."
      />

      <Section>
        <div className="container-x">
          <SectionTitle eyebrow="Why Work With Us" title="A workplace built for builders" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {why.map((w, i) => (
              <motion.div key={w} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="glass-card p-5 text-center text-sm">{w}</motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="container-x">
          <SectionTitle eyebrow="Open Positions" title="Find your next role" />
          <div className="grid md:grid-cols-2 gap-5">
            {jobs.map((j, i) => (
              <motion.div key={j.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="group glass-card p-6 hover:border-[var(--brand-orange)]/40 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[var(--brand-teal)] mb-2">
                      <Briefcase className="h-3.5 w-3.5" /> {j.type}
                      <span className="text-white/30">·</span>
                      <MapPin className="h-3.5 w-3.5" /> {j.loc}
                    </div>
                    <h3 className="text-lg font-bold mb-1.5">{j.t}</h3>
                    <p className="text-sm text-white/65">{j.d}</p>
                  </div>
                  <a href="#apply" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-orange text-black shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0"><span id="apply" />
        <div className="container-x max-w-3xl">
          <div className="glass-card p-8 md:p-10">
            <SectionTitle eyebrow="Application" title="Apply now" center={false} />
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-2xl font-bold mb-2 text-gradient-orange">Application received 🎉</div>
                <p className="text-white/65">Our team will get back to you within 5 business days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Position Applied For" name="position" required />
                <div className="sm:col-span-2">
                  <label className="block text-xs text-white/65 mb-1.5">Upload CV</label>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-dashed border-white/15">
                    <Upload className="h-4 w-4 text-[var(--brand-teal)]" />
                    <input type="file" className="text-sm text-white/80 file:hidden" />
                  </div>
                </div>
                <Field label="Portfolio Link" name="portfolio" />
                <Field label="LinkedIn (optional)" name="linkedin" />
                <div className="sm:col-span-2">
                  <label className="block text-xs text-white/65 mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[var(--brand-orange)] outline-none text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <button className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange">
                    Submit Application <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs text-white/65 mb-1.5">{label}{required && <span className="text-[var(--brand-orange)]"> *</span>}</label>
      <input type={type} name={name} required={required} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[var(--brand-orange)] outline-none text-sm transition-colors" />
    </div>
  );
}

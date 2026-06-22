import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Heart, Users, Zap, Globe, Award } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Business Genie Consulting" },
      { name: "description", content: "Business technology and growth consulting helping companies move from manual processes to structured, automated, scalable systems." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, t: "Practical business understanding", d: "We've sat in the operator's seat — we know what actually works on the ground." },
  { icon: Zap, t: "Real implementation experience", d: "Hands-on ERP, marketing and product execution, not theoretical advice." },
  { icon: Award, t: "Result-focused strategy", d: "Every deliverable maps to a measurable business outcome you can defend in a boardroom." },
  { icon: Users, t: "Long-term support", d: "Training, optimization and partnership long after go-live." },
  { icon: Heart, t: "Transparent communication", d: "Clear timelines, honest tradeoffs, no jargon walls." },
  { icon: Globe, t: "Scalable solutions", d: "Systems that grow with you from 10 users to 10,000." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Business Genie"
        title={<>We build systems that help businesses <span className="text-gradient-orange">grow smarter</span></>}
        subtitle="A business technology and growth consulting company focused on ERP, digital marketing, SEO, web, UI/UX and business automation."
      />

      <Section>
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-teal)] mb-3">Our Mission</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">Help companies move from scattered to structured.</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Most businesses don't fail because of bad ideas — they fail because of broken systems.
              Stock that doesn't match reality. Accounts that take weeks to close. Marketing that can't
              prove its ROI. Teams that work harder than they should because the systems work against them.
            </p>
            <p className="text-white/70 leading-relaxed">
              Business Genie exists to fix that. We bring together ERP, marketing, technology and design
              under one roof so your business runs as one system, not five disconnected ones.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[["180+", "Projects"], ["12+", "Industries"], ["5", "Countries"], ["98%", "Retention"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-4xl font-bold text-gradient-orange">{v}</div>
                    <div className="text-sm text-white/60 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative">
        <div className="container-x">
          <SectionTitle eyebrow="Our Values" title="What we stand for" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-7 hover:border-[var(--brand-teal)]/40 transition-colors">
                <v.icon className="h-8 w-8 text-[var(--brand-orange)] mb-4" />
                <h3 className="font-semibold mb-2">{v.t}</h3>
                <p className="text-sm text-white/60">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  Receipt,
  ArrowRight,
  Database,
  FileSpreadsheet,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/erp-solutions")({
  head: () => ({
    meta: [
      { title: "ERP Solutions — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Complete ERP implementation for accounts, inventory, HR, sales and reporting. Transform manual operations into fully automated systems.",
      },
    ],
  }),
  component: ERP,
});

const modules = [
  {
    icon: FileSpreadsheet,
    t: "Accounts & Financials",
    d: "Chart of accounts, GL, AP/AR, taxation, reconciliations.",
  },
 {
  icon: Briefcase,
  t: "Project Management",
  d: "Timeline tracking, team collaboration, task assignment, and progress monitoring.",
},
{
  icon: Receipt, // ya Calculator / Wallet
  t: "Bookkeeping",
  d: "Ledger management, expense tracking, invoicing, and financial record-keeping.",
},
  {
    icon: Package,
    t: "Inventory & Stock",
    d: "Warehouses, batches, audit alignment, reorder levels.",
  },
  {
    icon: ShoppingCart,
    t: "Sales & Purchase",
    d: "Quotations, orders, invoices, vendor management.",
  },
  {
    icon: Users,
    t: "HR & Payroll",
    d: "Employees, attendance, payroll cycles, leave management.",
  },
  {
    icon: Database,
    t: "Production & MRP",
    d: "BOMs, work orders, production tracking, costing.",
  },
  {
    icon: BarChart3,
    t: "Reporting Dashboards",
    d: "Real-time KPIs, financial reports, custom analytics.",
  },
];

const includes = [
  "Complete ERP setup and configuration",
  "BOMs, work orders, production tracking, costing",

  "Accounts and financial structuring",
  "Inventory and stock audit alignment",
 "Ledger management,  tracking, record-keeping",
  "Sales and purchase module setup",
  "HR and payroll setup",
  "Opening balances and data migration",
  "Stock audit and reconciliation",
  "ERP error fixing",
  "System optimization",
  "Client training and ongoing support",
  "Reporting dashboards",
  "Workflow automation",
];

function ERP() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ERP Solutions"
        title={
          <>
            Complete ERP for accounts, inventory, HR, sales &{" "}
            <span className="text-gradient-orange">reporting</span>
          </>
        }
        subtitle="We help businesses transform manual operations into fully automated ERP systems that improve efficiency, control, accuracy and profitability."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange"
          >
            Book ERP Consultation <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/10"
          >
            Discuss on WhatsApp
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="ERP Modules"
            title="Every part of your business on one system"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{
                  opacity: 0,
                  y: 34,
                  scale: 0.94,
                  rotateX: -8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                }}
                className="group relative overflow-hidden glass-card p-7 hover:border-[var(--brand-orange)]/55 transition-all duration-500"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative">
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.12,
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black mb-4 shadow-[0_0_22px_rgba(255,132,0,0.22)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(255,132,0,0.42)]"
                  >
                    <m.icon className="h-6 w-6" />
                  </motion.div>

                  <h3 className="font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {m.t}
                  </h3>

                  <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white/75">
                    {m.d}
                  </p>

                  <div className="mt-5 h-px w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-teal)]/5 via-transparent to-[var(--brand-orange)]/5" />

        <div className="relative container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">
                Transformation
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                From messy records to a fully controlled ERP
              </h2>

              <p className="text-white/70">
                We don't just implement software. We optimize your workflow,
                fix stock issues, resolve accounting errors, train your team,
                and build a system that gives you full control.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <div className="text-xs uppercase tracking-wider text-white/50 mb-4">
                  Before ERP
                </div>

                <ul className="space-y-2.5 text-sm text-white/70">
                  {[
                    "Manual records",
                    "Stock mismatch",
                    "Accounting errors",
                    "Delayed reports",
                    "No business visibility",
                    "Team confusion",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/5">
                <div className="text-xs uppercase tracking-wider text-[var(--brand-teal)] mb-4">
                  After ERP
                </div>

                <ul className="space-y-2.5 text-sm text-white">
                  {[
                    "Automated workflow",
                    "Accurate inventory",
                    "Clean accounts",
                    "Real-time reports",
                    "Better control",
                    "Scalable system",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-teal)] shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="What's Included"
            title="Turnkey ERP Deployment Not Just a Software License"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 glass-card px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0" />

                <span className="text-sm text-white/85">{i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Database,
  DollarSign,
  FileText,
  GraduationCap,
  LogOut,
  MessageSquare,
  Settings,
  ShieldCheck,
  UserCheck,
  UserPlus,
  Users,
  Workflow,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section, SectionTitle } from "@/components/layout/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/HR")({
  head: () => ({
    meta: [
      { title: "HR Automation — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Professional HR automation solutions for recruitment, onboarding, employee records, attendance, payroll, leave management, performance tracking, approvals, reporting and employee lifecycle management.",
      },
    ],
  }),
  component: HRAutomation,
});

const hrResponsibilities = [
  {
    icon: UserPlus,
    title: "Recruitment & Hiring",
    desc: "Manage job requisitions, candidate shortlisting, interview scheduling, hiring approvals and offer letter workflows through a structured HR process.",
  },
  {
    icon: UserCheck,
    title: "Employee Onboarding",
    desc: "Create a smooth onboarding journey with document collection, joining checklists, department assignment, access setup and orientation workflows.",
  },
  {
    icon: Users,
    title: "Employee Records",
    desc: "Maintain a centralized employee database with personal details, contracts, salary records, documents, departments, designations and employment history.",
  },
  {
    icon: Clock,
    title: "Attendance Management",
    desc: "Track daily attendance, late arrivals, absences, overtime, shifts, working hours and monthly attendance summaries with better accuracy.",
  },
  {
    icon: CalendarCheck,
    title: "Leave Management",
    desc: "Automate leave requests, approvals, rejections, leave balances, annual leave, sick leave, unpaid leave and policy-based tracking.",
  },
  {
    icon: DollarSign,
    title: "Payroll Processing",
    desc: "Automate monthly payroll, salary structures, allowances, deductions, overtime, bonuses, advances, tax rules and payslip generation.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    desc: "Plan employee training, skill development, internal sessions, learning records and capability improvement programs.",
  },
  {
    icon: BarChart3,
    title: "Performance Management",
    desc: "Track employee goals, KPIs, reviews, feedback, appraisals and performance reports to support better workforce decisions.",
  },
  {
    icon: FileText,
    title: "Policies & Documents",
    desc: "Digitally manage HR policies, employment contracts, offer letters, warning letters, experience letters and important employee documents.",
  },
  {
    icon: MessageSquare,
    title: "Employee Requests",
    desc: "Allow employees to submit leave requests, salary advance requests, document requests, complaints and internal approvals through one system.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Control",
    desc: "Improve control with approval flows, secure user access, role-based permissions, audit history and policy compliance tracking.",
  },
  {
    icon: LogOut,
    title: "Exit & Final Settlement",
    desc: "Manage resignations, clearance, asset returns, final salary settlement, exit interviews and experience letter workflows professionally.",
  },
];

const processSteps = [
  {
    icon: Database,
    title: "HR Data Structuring",
    desc: "We organize employee records, departments, designations, salary structures, shifts, policies and reporting requirements into a clean HR framework.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "We automate leave approvals, attendance rules, onboarding tasks, payroll processes, employee requests and management approvals.",
  },
  {
    icon: Settings,
    title: "System Configuration",
    desc: "We configure user roles, permissions, salary rules, attendance settings, payroll cycles, documents and reporting dashboards.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Optimization",
    desc: "We build HR dashboards, monitor system performance, reduce manual errors and continuously improve workflows based on business needs.",
  },
];

const automationPossibilities = [
  "Complete employee database with profile history",
  "Attendance machine or manual attendance integration",
  "Late arrival, absence and overtime rule configuration",
  "Digital leave requests with approval workflows",
  "Payroll calculation with allowances and deductions",
  "Automated payslip generation and salary reports",
  "New employee onboarding checklists",
  "Employee document expiry reminders",
  "Role-based access for HR, managers and employees",
  "Performance reviews and KPI tracking",
  "HR analytics and management dashboards",
  "Employee self-service portal",
  "HR letters, warnings and document templates",
  "Company asset assignment and return tracking",
  "Exit clearance and final settlement workflow",
];

const includedServices = [
  "HR system planning and workflow mapping",
  "Employee database setup",
  "Department and designation structure",
  "Attendance and shift management setup",
  "Leave policy and approval setup",
  "Payroll and salary structure setup",
  "Allowances, deductions and overtime setup",
  "Employee document management",
  "Employee onboarding workflow",
  "Performance tracking setup",
  "HR reports and dashboards",
  "User roles and access control",
  "Training for HR team",
  "Ongoing support and optimization",
];

const businessOutcomes = [
  {
    value: "Less",
    label: "Manual HR Work",
    desc: "Reduce repetitive HR tasks and move daily operations into structured workflows.",
  },
  {
    value: "Better",
    label: "Payroll Accuracy",
    desc: "Improve salary calculation, deductions, overtime and monthly payroll control.",
  },
  {
    value: "Faster",
    label: "Approvals",
    desc: "Speed up leave requests, employee requests, onboarding and management approvals.",
  },
  {
    value: "Live",
    label: "HR Visibility",
    desc: "Give management real-time visibility into attendance, payroll, employees and performance.",
  },
];

function HRAutomation() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="HR Automation"
        title={
          <>
            Automate HR, payroll, attendance &{" "}
            <span className="text-gradient-orange">employee workflows</span>
          </>
        }
        subtitle="We help businesses digitize HR operations, centralize employee data, automate payroll, streamline approvals and build real-time HR reporting systems."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange"
          >
            Get HR Automation Plan
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white hover:text-[var(--brand-orange)] hover:border-[var(--brand-orange)]/60 hover:bg-white/10 transition-all"
          >
            Discuss on WhatsApp
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="What HR Does"
            title={
              <>
                HR manages people, processes and{" "}
                <span className="text-gradient-orange">company control</span>
              </>
            }
            subtitle="Human Resources is responsible for the complete employee lifecycle — from hiring and onboarding to payroll, performance, compliance and exit management."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrResponsibilities.map((item, i) => (
              <motion.div
                key={item.title}
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
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.6,
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
                    <item.icon className="h-6 w-6" />
                  </motion.div>

                  <h3 className="font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/75">
                    {item.desc}
                  </p>

                  <div className="mt-5 h-px w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/15 blur-[130px]" />

        <div className="relative container-x">
          <SectionTitle
            eyebrow="How HR Automation Works"
            title={
              <>
                From manual HR operations to{" "}
                <span className="text-gradient-orange">
                  automated workflows
                </span>
              </>
            }
            subtitle="We re-engineer manual HR activities into structured digital workflows that are easier to manage, track and scale."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[70px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                      <step.icon className="h-6 w-6" />
                    </div>

                    <div className="text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[var(--brand-orange)]/30">
                      
                    </div>
                  </div>

                  <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">
                HR Transformation
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                Replace scattered HR records with a controlled HR system
              </h2>

              <p className="text-white/70 leading-relaxed">
                Manual HR processes often create attendance mismatches, payroll
                errors, missing documents, delayed approvals and limited
                visibility. HR automation brings employee data, approvals,
                payroll and reporting into one structured system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="glass-card p-6"
              >
                <div className="text-xs uppercase tracking-wider text-white/50 mb-4">
                  Before HR Automation
                </div>

                <ul className="space-y-2.5 text-sm text-white/70">
                  {[
                    "Manual attendance sheets",
                    "Payroll calculation errors",
                    "Scattered employee documents",
                    "Slow leave approvals",
                    "No clear HR reports",
                    "Final settlement delays",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="glass-card p-6 border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/5"
              >
                <div className="text-xs uppercase tracking-wider text-[var(--brand-orange)] mb-4">
                  After HR Automation
                </div>

                <ul className="space-y-2.5 text-sm text-white">
                  {[
                    "Automated attendance",
                    "Accurate payroll",
                    "Central employee database",
                    "Fast approval workflows",
                    "Live HR dashboards",
                    "Controlled exit process",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />

        <div className="relative container-x">
          <SectionTitle
            eyebrow="What Becomes Possible"
            title={
              <>
                Build a scalable{" "}
                <span className="text-gradient-orange">HR operating system</span>
              </>
            }
            subtitle="These are the practical HR automation capabilities that can be implemented based on your business structure and internal approval process."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationPossibilities.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.025 }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-3 glass-card px-5 py-4 hover:border-[var(--brand-orange)]/45 transition-all duration-300"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0" />

                <span className="text-sm text-white/85 group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="Business Outcomes"
            title={
              <>
                Better control over people, payroll and{" "}
                <span className="text-gradient-orange">performance</span>
              </>
            }
            subtitle="A professional HR automation setup improves accuracy, accountability, speed and visibility across the employee lifecycle."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessOutcomes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/18 blur-[70px]" />
                </div>

                <div className="relative">
                  <div className="text-4xl font-bold text-gradient-orange">
                    {item.value}
                  </div>

                  <div className="mt-2 font-semibold text-white">
                    {item.label}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="What's Included"
            title={
              <>
                Complete HR automation{" "}
                <span className="text-gradient-orange">implementation</span>
              </>
            }
            subtitle="We plan, structure, configure and optimize the HR automation system according to your company size, team structure and operational process."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedServices.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.025 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/45 hover:bg-white/[0.055]"
              >
                <div className="relative flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0" />

                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/20 blur-[110px]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/65">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
                HR Automation
              </div>

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to automate your{" "}
                <span className="text-gradient-orange">
                  HR and payroll process?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Share your current HR process and we will guide you with the
                right automation structure for employees, attendance, payroll,
                leave approvals, performance tracking and reporting.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start HR Automation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-white/80 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </SiteLayout>
  );
}
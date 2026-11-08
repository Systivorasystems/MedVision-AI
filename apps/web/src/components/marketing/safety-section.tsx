import {
  Eye,
  History,
  Lock,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const PRINCIPLES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Research use only",
    description:
      "MedVision AI is not an autonomous diagnostic system and must not be used as one.",
  },
  {
    icon: Users,
    title: "Clinician in the loop",
    description: "AI-assisted output always requires review by a qualified clinician.",
  },
  {
    icon: Eye,
    title: "Explainable by design",
    description: "Results come with heatmaps so reviewers can question the model.",
  },
  {
    icon: Lock,
    title: "Secure access",
    description:
      "Role-based authorization and validated inputs. Only authorized, de-identified research data is used.",
  },
  {
    icon: History,
    title: "Traceable models",
    description:
      "Model versions and evaluation metrics are tracked, so every result can be traced back.",
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="scroll-mt-24 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="Safety & limitations"
          title="Principles we build around."
          description="Medical imaging AI is still research. These rules shape every part of the platform."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

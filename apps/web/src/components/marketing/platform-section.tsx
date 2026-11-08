import {
  ClipboardCheck,
  FileText,
  FolderKanban,
  ImageUp,
  Layers,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  wide?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: FolderKanban,
    title: "Case management",
    description:
      "Organise research cases with clear status indicators, from intake to clinician sign-off.",
    wide: true,
  },
  {
    icon: ImageUp,
    title: "Validated uploads",
    description:
      "Medical image uploads are validated before processing. De-identified research data only.",
  },
  {
    icon: ScanSearch,
    title: "AI-assisted analysis",
    description:
      "Every model result is stored with its model version and evaluation metrics.",
  },
  {
    icon: Layers,
    title: "Explainability viewer",
    description:
      "Compare the original image with the AI heatmap side by side, so reviewers can see what the model focused on.",
    wide: true,
  },
  {
    icon: ClipboardCheck,
    title: "Clinician review",
    description:
      "Accept, amend or reject each AI-assisted finding before it moves forward.",
  },
  {
    icon: FileText,
    title: "Report preparation",
    description:
      "Prepare structured reports from reviewed findings, with an audit trail of who changed what.",
    wide: true,
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Platform · in development"
          title={
            <>
              Built for <span className="text-primary">review</span>, not
              replacement.
            </>
          }
          description="The tools a clinical research team needs to manage cases, inspect AI output and keep a human in the loop."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description, wide }) => (
            <article
              key={title}
              className={`rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 ${
                wide ? "md:col-span-2" : ""
              }`}
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium">{title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

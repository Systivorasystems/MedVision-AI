import { SectionHeading } from "@/components/marketing/section-heading";

const STEPS = [
  {
    title: "Create a case",
    description: "Open a research case and assign it to a reviewing clinician.",
  },
  {
    title: "Upload images",
    description: "Add de-identified images. Files are validated on upload.",
  },
  {
    title: "AI-assisted analysis",
    description: "The model produces output with a heatmap and a version tag.",
  },
  {
    title: "Clinician review",
    description: "The clinician inspects, amends and signs off every finding.",
  },
  {
    title: "Report",
    description: "A report is prepared from the reviewed findings only.",
  },
] as const;

export function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-24 border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Workflow · planned"
          title="From case to report, with a clinician at every decision."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

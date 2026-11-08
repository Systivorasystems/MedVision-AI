import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/marketing/hero-video";

const PRINCIPLES = [
  "Clinician review",
  "Explainable output",
  "Model version tracking",
] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-2.1rem)] flex-col overflow-hidden">
      {/* Layer 1: fallback glow + grid (always present, shows if no video) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(60%_50%_at_70%_25%,rgba(20,184,166,0.20),transparent_70%),radial-gradient(50%_40%_at_15%_75%,rgba(56,189,248,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      {/* Layer 2: optional video */}
      <HeroVideo />

      {/* Layer 3: overlay so text stays readable on any video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/45 to-background"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-10 pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          MedVision AI · Research build v0.1
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          AI-assisted medical imaging,{" "}
          <span className="text-primary">reviewed by clinicians.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          A research and decision-support platform for authorized clinical
          teams. Every AI-assisted result requires clinician review.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button size="lg">Request Access</Button>
          <Button size="lg" variant="outline">
            View Research Overview
          </Button>
        </div>
      </div>

      <div className="border-t border-border/60 bg-background/40 backdrop-blur-sm">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <li className="text-foreground">Research use only</li>
          {PRINCIPLES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

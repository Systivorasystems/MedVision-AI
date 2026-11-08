import { ResearchDisclaimer } from "@/components/layout/research-disclaimer";

export default function HomePage() {
  return (
    <>
      <ResearchDisclaimer />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          MedVision AI · Research build v0.1
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          AI-assisted medical imaging,{" "}
          <span className="text-primary">reviewed by clinicians.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">
          A research and decision-support platform for authorized clinical
          teams. Every AI-assisted result requires clinician review.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Request Access
          </button>
          <button
            type="button"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View Research Overview
          </button>
        </div>
      </main>
    </>
  );
}

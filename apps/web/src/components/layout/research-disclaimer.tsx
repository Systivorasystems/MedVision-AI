/**
 * Persistent reminder that MedVision AI is a research platform.
 * Shown on every public and authenticated page.
 */
export function ResearchDisclaimer() {
  return (
    <div
      role="note"
      className="border-b border-border bg-card px-4 py-2 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
    >
      Research use only
      <span aria-hidden="true"> · </span>
      Clinician review required
      <span aria-hidden="true"> · </span>
      Not a diagnostic system
    </div>
  );
}

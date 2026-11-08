import Link from "next/link";
import { ScanLine } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ScanLine className="size-4" aria-hidden="true" />
            </span>
            MedVision AI
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            MedVision AI is a research and development platform. It is not an
            autonomous diagnostic system, and all AI-assisted output must be
            reviewed by a qualified clinician.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-12 text-sm">
          <ul className="space-y-3">
            <li className="font-mono text-xs uppercase tracking-widest text-foreground">
              Platform
            </li>
            <li><a href="#platform" className="text-muted-foreground hover:text-foreground">Features</a></li>
            <li><a href="#workflow" className="text-muted-foreground hover:text-foreground">Workflow</a></li>
            <li><a href="#safety" className="text-muted-foreground hover:text-foreground">Safety</a></li>
          </ul>
          <ul className="space-y-3">
            <li className="font-mono text-xs uppercase tracking-widest text-foreground">
              Access
            </li>
            <li><Link href="/login" className="text-muted-foreground hover:text-foreground">Sign in</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border px-6 py-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        © MedVision AI · Research use only
      </div>
    </footer>
  );
}

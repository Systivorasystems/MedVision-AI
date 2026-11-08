"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ScanLine, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#workflow", label: "Workflow" },
  { href: "#safety", label: "Safety" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    // h-0 + sticky: the bar floats over the hero instead of pushing it down.
    <header className="sticky top-0 z-50 h-0">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav
          aria-label="Main"
          className="relative flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl"
        >
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ScanLine className="size-4" aria-hidden="true" />
            </span>
            <span className="tracking-tight">MedVision AI</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>Sign in</Link>
            <Button size="sm">Request Access</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>

          {open && (
            <div
              id="mobile-menu"
              className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-border/60 bg-background/90 p-3 shadow-lg backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
              <Button className="mt-2 w-full">Request Access</Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

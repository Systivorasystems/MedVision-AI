import { ResearchDisclaimer } from "@/components/layout/research-disclaimer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResearchDisclaimer />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </>
  );
}

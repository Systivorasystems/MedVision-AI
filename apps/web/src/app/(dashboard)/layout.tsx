import { ResearchDisclaimer } from "@/components/layout/research-disclaimer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResearchDisclaimer />
      {/* Sidebar and top bar are added in the dashboard shell phase. */}
      <div className="flex-1 px-6 py-8">{children}</div>
    </>
  );
}

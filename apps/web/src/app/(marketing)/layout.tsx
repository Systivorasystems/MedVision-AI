import { ResearchDisclaimer } from "@/components/layout/research-disclaimer";
import { SiteNavbar } from "@/components/marketing/site-navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResearchDisclaimer />
      <SiteNavbar />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}

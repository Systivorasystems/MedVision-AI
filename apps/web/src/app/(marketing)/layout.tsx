import { ResearchDisclaimer } from "@/components/layout/research-disclaimer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResearchDisclaimer />
      {children}
    </>
  );
}

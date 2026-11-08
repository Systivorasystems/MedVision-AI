import { Hero } from "@/components/marketing/hero";
import { PlatformSection } from "@/components/marketing/platform-section";
import { SafetySection } from "@/components/marketing/safety-section";
import { WorkflowSection } from "@/components/marketing/workflow-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformSection />
      <WorkflowSection />
      <SafetySection />
    </>
  );
}

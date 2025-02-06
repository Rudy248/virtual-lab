import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function TargetAudiencePage() {
  return (
    <ExperimentPageLayout unit="unit-2" experiment="t1" title="Target Audience">
      <div className="prose max-w-none">
        <p>This experiment is designed for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Computer Science and Software Engineering students</li>
          <li>Students with basic knowledge of operating systems</li>
          <li>Developers interested in system-level programming</li>
          <li>
            Anyone looking to understand process management in modern operating
            systems
          </li>
        </ul>
      </div>
    </ExperimentPageLayout>
  );
}

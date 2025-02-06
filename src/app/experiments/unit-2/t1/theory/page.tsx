import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function TargetAudiencePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Target Audience">
      <div className="prose max-w-none">
        <p>This experiment is designed for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Computer Science and AI Engineering students</li>
          <li>Students with basic knowledge of Linux systems</li>
          <li>Researchers and practitioners in AI and machine learning</li>
          <li>Anyone interested in high-performance computing systems</li>
        </ul>
      </div>
    </ExperimentPageLayout>
  );
}

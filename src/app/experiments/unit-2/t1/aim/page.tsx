import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function AimPage() {
  return (
    <ExperimentPageLayout unit="unit-2" experiment="t1" title="Aim">
      <div className="prose max-w-none">
        <p>Working with Docker Images and NGC Containers.</p>
      </div>
    </ExperimentPageLayout>
  );
}

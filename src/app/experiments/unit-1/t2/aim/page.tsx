import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function AimPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Aim">
      <div className="prose max-w-none text-center">
        <p>Working with Docker Images and NGC Containers.</p>
      </div>
    </ExperimentPageLayout>
  );
}

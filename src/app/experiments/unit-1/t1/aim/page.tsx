import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function AimPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Aim">
      <div className="prose max-w-none text-center">
        <p>Accessing DGX A100</p>
      </div>
    </ExperimentPageLayout>
  );
}

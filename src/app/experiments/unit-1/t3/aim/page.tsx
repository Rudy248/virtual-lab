import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function AimPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t3" title="Aim">
      <div className="prose max-w-none text-center">
        <p>Installation and Pulling Specific NGC Packages</p>
      </div>
    </ExperimentPageLayout>
  );
}

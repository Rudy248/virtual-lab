import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ObjectivePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t3" title="Objective">
      <div className="prose max-w-none text-center">
        To enable students to install, configure, and pull NGC packages,
        ensuring they can effectively set up environments for AI model training
        and deployment.
      </div>
    </ExperimentPageLayout>
  );
}

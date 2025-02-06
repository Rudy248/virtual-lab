import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ObjectivePage() {
  return (
    <ExperimentPageLayout unit="unit-2" experiment="t1" title="Objective">
      <div className="prose max-w-none">
        This is to build skills in working with Docker images and deploying NGC
        containers. This shall provide a starting point for containerized AI
        development environments.
      </div>
    </ExperimentPageLayout>
  );
}

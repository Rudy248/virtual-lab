import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ObjectivePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Objective">
      <div className="prose max-w-none text-center">
        This is to build skills in working with Docker images and deploying NGC
        containers. This shall provide a starting point for containerized AI
        development environments.
      </div>
    </ExperimentPageLayout>
  );
}

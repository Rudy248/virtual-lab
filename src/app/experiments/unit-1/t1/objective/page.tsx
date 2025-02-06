import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ObjectivePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Objective">
      <div className="prose max-w-none text-center">
        The objective of this experiment is to learn how to enable and utilize
        different GPUs for different applications like model training,fine
        tuning and handling GPU based computations in python.
      </div>
    </ExperimentPageLayout>
  );
}

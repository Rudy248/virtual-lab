import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function TheoryPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Theory">
      <div className="prose max-w-none">
        <b>NGC (NVIDIA GPU Cloud) Containers:</b>
        NGC is a repository provided by NVIDIA of pre-configured, optimized
        Docker containers specific to AI, machine learning, deep learning, and
        high-performance computing applications. Containers are developed to run
        on systems with NVIDIA GPUs, and these greatly improve high-performance
        workloads and faster computations. Thus, the NGC containers can be
        optimized for deep learning frameworks like TensorFlow and PyTorch and
        others. No need to set up frameworks as NGC containers got them ready to
        use.
      </div>
    </ExperimentPageLayout>
  );
}

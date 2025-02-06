import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function TheoryPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Theory">
      <div className="prose max-w-none">
        <p className="mb-4">
          <b>NVIDIA A100 GPU</b> is a powerful GPU designed for AI, data
          analytics, and high-performance computing. Built on the advanced
          Ampere architecture, it features 6912 CUDA cores and 432 Tensor Cores,
          enabling exceptional parallel processing for faster and more efficient
          computation. The A100 comes with up to 80GB of High Bandwidth Memory
          (HBM2e), allowing it to handle massive datasets effortlessly.
        </p>

        <p className="mb-4">
          It accelerates model training and inference, making it 20x faster than
          previous generation GPUs. The A100 also supports multi-instance GPU
          (MIG) technology, allowing a single GPU to be partitioned into
          multiple instances for optimal resource utilization.
        </p>
        <p className="mb-4">
          Unlike a CPU that processes tasks one after another, the A100 GPU
          performs many tasks simultaneously, significantly boosting speed and
          efficiency in AI workloads.
        </p>
        <p className="mb-4">
          <u>
            <i>
              <b>NOTE-</b> Due to the high cost of A100 GPU instances and
              limited access to DGX A100, demos will be conducted on alternative
              GPUs. This ensures effective learning while maintaining practical
              feasibility.
            </i>
          </u>
        </p>
      </div>
    </ExperimentPageLayout>
  );
}

import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ExperimentPage() {
  return (
    <ExperimentPageLayout
      unit="unit-1"
      experiment="t1"
      title="T1: Accessing DGX A100"
    >
      <div className="prose max-w-none">
        <p>
          Welcome to the experiment on accessing the NVIDIA DGX A100 system.
          This experiment will guide you through the process of understanding
          and gaining hands-on experience with this powerful AI system.
        </p>
        <p>
          Please use the navigation menu to explore the different sections of
          this experiment:
        </p>
        <ul>
          <li>Aim: Understand the purpose of this experiment</li>
          <li>Objective: Learn about the specific goals we'll achieve</li>
          <li>Target Audience: Find out who this experiment is designed for</li>
        </ul>
        <p>
          Each section will provide you with valuable information to help you
          get the most out of this learning experience. Let's begin our journey
          into high-performance computing for AI!
        </p>
      </div>
    </ExperimentPageLayout>
  );
}

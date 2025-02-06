import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ExperimentPage() {
  return (
    <ExperimentPageLayout
      unit="unit-1"
      experiment="t2"
      title="T2: Working with Docker Images and NGC Containers."
    >
      <div className="prose max-w-none">
        <p>
          Welcome to the experiment on working with Docker images and NVIDIA NGC
          containers. This experiment will guide you through the process of
          creating, managing, and deploying Docker images while integrating NGC
          containers for efficient AI and scientific computing workflows.
        </p>
        <p>
          Please use the navigation menu to explore the different sections of
          this experiment:
        </p>
        <ul>
          <li>
            Aim: Understand the purpose of using Docker images with NGC
            containers
          </li>
          <li>
            Objective: Learn how to manage, and deploy Docker images integrated
            with NGC containers
          </li>
          <li>
            Target Audience: Individuals looking to optimize containerized
            environments for AI and data science applications
          </li>
        </ul>
        <p>
          This experiment will help you develop a strong foundation in container
          technology, enabling smooth AI deployment. Let’s get started with
          Docker and NGC!
        </p>
      </div>
    </ExperimentPageLayout>
  );
}

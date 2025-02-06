import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function ExperimentPage() {
  return (
    <ExperimentPageLayout
      unit="unit-1"
      experiment="t3"
      title="T3: Installation and Pulling Specific NGC Packages "
    >
      <div className="prose max-w-none">
        <p>
          Welcome to the experiment on installing and pulling specific NGC
          packages. This experiment will guide you through the steps required to
          efficiently install and retrieve specialized NGC packages, enabling
          high-performance AI development.
        </p>
        <p>
          Please use the navigation menu to explore the different sections of
          this experiment:
        </p>
        <ul>
          <li>
            Aim: Understand the process of installing and pulling specific NGC
            packages
          </li>
          <li>
            Objective: Learn how to manage and deploy NGC packages for optimized
            AI workflows
          </li>
          <li>
            Target Audience: Learners and developers seeking hands-on experience
            with NGC package management
          </li>
        </ul>
        <p>
          This experiment will enhance your skills in handling NGC resources,
          ensuring streamlined AI development. Let’s begin our journey into
          efficient package management with NGC!
        </p>
      </div>
    </ExperimentPageLayout>
  );
}

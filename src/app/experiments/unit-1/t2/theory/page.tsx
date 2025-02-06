import { ExperimentPageLayout } from "@/components/experiment-page-layout";

export default function TheoryPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Theory">
      <div className="prose max-w-none">
        <b>Docker Images and Containers:</b> Docker is a platform to develop,
        ship, and run applications. Containerization technology used by Docker
        wraps up the application and its dependencies into an isolated
        environment known as a container. A Docker image is a light, independent
        executable package containing all that is necessary to run any piece of
        software. Containers are instances of a Docker image. Docker solves the
        age old problem of “it works on my machine bro”. As the same environment
        can now be replicated and shipped to any machine in the world.
      </div>
    </ExperimentPageLayout>
  );
}

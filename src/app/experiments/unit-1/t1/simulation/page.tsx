import { ExperimentPageLayout } from "@/components/experiment-page-layout";
import { Button } from "@/components/ui/button";

export default function SimulationPage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="">
      <div className="prose max-w-none ">
        <a
          href="/simulation-u1-t1.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Click to open simulation
        </a>
      </div>
    </ExperimentPageLayout>
  );
}

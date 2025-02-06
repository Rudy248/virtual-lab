import { ExperimentPageLayout } from "@/components/experiment-page-layout";
import Link from "next/link";

export default function ProcedurePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t3" title="Procedure">
      <div className="prose max-w-none">
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <b>Set Up NGC Account</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              1.1 Go to the{" "}
              <Link
                href="https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize="
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                NGC Catalog
              </Link>{" "}
              and create an account if you do not already have one.
            </li>
            <li>
              1.2 Generate an API Key:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Log in to your NGC account</li>
                <li>Go to Setup → API Key → Generate Key.</li>
              </ul>
            </li>
            <li>
              1.3 Authenticate Docker with NGC:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Open a terminal (Command Prompt, PowerShell, or WSL) and run:
                  docker login nvcr.io
                </li>
                <li>
                  Use the following credentials:{" "}
                  <ul>
                    <li>Username: $oauthtoken</li>
                    <li>Password: (your-api-key-that-you-just-generated)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b>Browse NGC Catalog for Specific Packages</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              2.1 Visit the{" "}
              <Link
                href="https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize= "
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                NGC Catalog
              </Link>{" "}
            </li>
            <li>
              2.2 Search for the specific package as per your need (e.g.,
              PyTorch, TensorFlow, CUDA, etc.).
            </li>
            <li>
              2.3 Click on the container to view details, including the pull
              command and tags.
            </li>
          </ul>
          <li>
            <b>Pull Specific NGC Packages</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              3.1 Pull a Container:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Use the docker pull command with the container’s path and tag.
                </li>
                <li>
                  Example (PyTorch container, can also specify version): docker
                  pull nvcr.io/nvidia/pytorch:23.05-py3
                </li>
                <li>
                  Example (TensorFlow container, can also specify version):
                  docker pull nvcr.io/nvidia/tensorflow:23.05-tf2-py3
                </li>
                <li>
                  Example (CUDA container): docker pull
                  nvcr.io/nvidia/cuda:12.1.0-base
                </li>
              </ul>
            </li>
            <li>
              3.2 Verify the Pull:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  After pulling, verify the image is available locally: docker
                  images
                </li>
                <li>
                  You should see the pulled image listed. Try using “docker
                  image ls” in command prompt (make sure that docker desktop is
                  running)
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b>Run the Pulled Container</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              4.1 Run with GPU Support:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Use the docker run command to start the container with GPU
                  access:
                  <ul>
                    <li>docker run --gpus all -it --rm \</li>
                    <li>-v /path/to/local/data:/data \ # Mount local data</li>
                    <li>-p 8888:8888 \ # Expose ports (e.g., Jupyter)</li>
                    <li>nvcr.io/nvidia/pytorch:23.05-py3</li>
                  </ul>
                </li>
                <li>
                  Flags:
                  <ul>
                    <li>--gpus all: Enable GPU access.</li>
                    <li>-it: Interactive terminal.</li>
                    <li>--rm: Remove container after exit.</li>
                    <li>-v: Mount host directories into the container.</li>
                    <li>
                      -p: Expose ports for services like Jupyter Notebook.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              4.2 Access the Container:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Open a shell inside the container: docker exec -it
                  (container-id0) /bin/bash
                </li>
                <li>
                  Run scripts or commands directly: docker run --gpus all
                  nvcr.io/nvidia/pytorch:23.05-py3 python train.py
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b>Pulling Specific Versions</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              NGC containers often have multiple tags for different versions.
              <ul>
                <li>For example:</li>
                <li>nvcr.io/nvidia/pytorch:23.05-py3 (specific version)</li>
                <li>nvcr.io/nvidia/pytorch:latest (latest stable version)</li>
              </ul>
              Always check the NGC Catalog for the correct tag.
            </li>
          </ul>
        </ol>
      </div>
    </ExperimentPageLayout>
  );
}

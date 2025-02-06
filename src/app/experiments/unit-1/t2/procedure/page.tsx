import { ExperimentPageLayout } from "@/components/experiment-page-layout";
import Link from "next/link";

export default function ProcedurePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Procedure">
      <div className="prose max-w-none">
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <b>Install Docker Desktop on Windows</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              1.1 Go to{" "}
              <Link
                href="https://www.docker.com/products/docker-desktop/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Docker Desktop
              </Link>{" "}
              web page and download the installer.
            </li>
            <li>
              1.2 Run the Installer:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Double-click the installer and follow the prompts.</li>
                <li>
                  Enable the option to use Windows containers if prompted (not
                  required for NGC containers).
                </li>
              </ul>
            </li>
            <li>
              1.3 Enable WSL 2 (Windows Subsystem for Linux):
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Docker Desktop uses WSL 2 for better performance. Ensure WSL 2
                  is enabled.
                </li>
                <li>Go to Powershell and type the command: wsl --install</li>
                <li>Restart the computer.</li>
              </ul>
            </li>
            <li>1.4 Launch Docker Desktop.</li>
          </ul>
          <li>
            <b>Install NVIDIA GPU Drivers</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              2.1 Download and install the{" "}
              <Link
                href="https://www.nvidia.com/en-in/software/nvidia-app/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Nvidia App
              </Link>{" "}
            </li>
            <li>
              2.2 Make sure you have your gpu enabled before launching the app.
            </li>
            <li>
              2.3 Once the Nvidia App is launched go to the drivers section on
              the left.
            </li>
            <li>
              2.4 Select graphic driver preference to Game Ready Driver → Check
              for update → Click on download driver → Once downloaded Click on
              Install → Select Install preference to Express Install.
            </li>
            <li>
              2.5 Verify GPU Installation (optional as successfully installed
              message will be displayed in nvidia app if all instructions
              followed correctly):
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Open a Command Prompt and run: nvidia-smi</li>
                <li>
                  Ensure the GPU is detected and the driver version is
                  displayed.
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b>Install NVIDIA Container Toolkit</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              3.1 Download the{" "}
              <Link
                href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                NVIDIA Container Toolkit
              </Link>{" "}
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Go to the NVIDIA Container Toolkit Installation Guide</li>
                <li>Download the installer</li>
              </ul>
            </li>
            <li>
              3.2 Run the Installer:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Follow the prompts to install the toolkit.</li>
              </ul>
            </li>
            <li>
              3.3 Verify Installation:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Open a Terminal and run: docker run --rm --gpus all
                  nvidia/cuda:11.8.0-base nvidia-smi
                </li>
                <li>
                  This should display the GPU information, confirming that
                  Docker can access the GPU.
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b>Set Up Nvidia NGC Account</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              4.1 Go to{" "}
              <Link
                href="https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize="
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Nvidia NGC Catalog
              </Link>{" "}
              and create an account.
            </li>
            <li>
              4.2 Generate an API Key:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Log in to your NGC account.</li>
                <li>Go to Setup → API Key → Generate Key.</li>
              </ul>
            </li>
            <li>
              4.3 Authenticate Docker with NGC:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Open a Command Prompt and run: docker login nvcr.io</li>
                <li>
                  Use the following credentials: Username: $oauthtoken Password:
                  (your-api-key)
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b> Pull NGC Containers</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              5.1 Browse Nvidia NGC Catalog:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Visit the Nvidia NGC Catalog to find pre-built containers
                  (e.g., PyTorch, TensorFlow).
                </li>
              </ul>
            </li>
            <li>
              5.2 Pull a Container:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Open a Command Prompt and run: docker pull
                  nvcr.io/namespace/repo:tag
                </li>
                <li>
                  Example (PyTorch container): docker pull
                  nvcr.io/nvidia/pytorch:23.05-py3
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <b> Run the Container</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              6.1 Run with GPU Support:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Use the following command in command prompt to start the
                  container with GPU access:
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>docker run --gpus all -it --rm ^</li>
                    <li>-v C:\path\to\local\data:/data ^ # Mount local data</li>
                    <li>-p 8888:8888 ^ # Expose ports (e.g., Jupyter)</li>
                    <li>nvcr.io/nvidia/pytorch:23.05-py3</li>
                  </ul>
                </li>
                <li>
                  Flags:
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>--gpus all: Enable GPU access.</li>
                    <li>-it: Interactive terminal.</li>
                    <li>--rm: Remove container after exit.</li>
                    <li>v: Mount host directories into the container.</li>
                    <li>
                      -p: Expose ports for services like Jupyter Notebook.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              6.2 Access the Container:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  Open a shell inside the container: docker exec -it
                  (container-id) /bin/bash
                </li>
                <li>
                  Run scripts or commands directly: docker run --gpus all
                  nvcr.io/nvidia/pytorch:23.05-py3 python train.py
                </li>
              </ul>
            </li>
          </ul>
        </ol>
      </div>
    </ExperimentPageLayout>
  );
}

import { ExperimentPageLayout } from "@/components/experiment-page-layout";
import Link from "next/link";

export default function ProcedurePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Procedure">
      <div className="prose max-w-none">
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <b>Sign in to your KAGGLE Account</b>
          </li>
          Go to{" "}
          <Link
            href="https://www.kaggle.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Kaggle
          </Link>{" "}
          → Sign in or Create your Kaggle account.
          <li>
            <b>Create a new notebook</b>
          </li>
          Click on the create (+) icon on the top-left corner of the page →
          Select “New Notebook” to open a new Kaggle Notebook Editor.
          <li>
            <b>Enable Internet and GPU Access</b>
          </li>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            Since by default, the GPU is disabled. To enable it follow the given
            steps: Click on the sessions option on the bottom-right corner
            <li>→Verify your phone number (if already not verified). </li>
            <li>→Enter the verification code sent to your phone number.</li>
            <li>
              {" "}
              →Once verified, turn on the internet tab and enable GPU access.
            </li>
          </ul>
          <li>
            <b>Select GPU Accelerator </b>
          </li>
          Click on the settings tab at the top of the notebook → Click on the
          Accelerator Option → Choose GPU-P100 from the given options.
        </ol>
        <br />
        <p className=" text-2xl font-bold mb-6 text-center">
          Alternative Procedure
        </p>
        <p className=" text-xl font-bold mb-6 ">
          <b>Accessing T4 GPU using Google colab.</b>
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <b>Open Google Colab</b>
          </li>
          Go to{" "}
          <Link
            href="https://colab.google/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Google Colab
          </Link>{" "}
          → Sign in with your Google account → Create a new notebook or open an
          existing one.
          <li>
            <b>Enable GPU Acceleration</b>
          </li>
          In your Colab notebook, click on Runtime in the top menu → Select
          Change runtime type from the dropdown menu → A pop-up window will
          appear → Under Hardware accelerator → select GPU from the dropdown
          menu → Click Save.
          <li>
            <b>Verify GPU Availability</b>
          </li>
          <pre>
            <code>
              {`import tensorflow as tf
# Check if GPU is available
if tf.test.gpu_device_name():
    print('GPU found:')
    !nvidia-smi
else:
    print('No GPU found. Check your settings.')`}
            </code>
          </pre>
          <p>
            This will display information about the GPU (e.g., Tesla T4, K80,
            etc.) if it is available.
          </p>
        </ol>
      </div>
    </ExperimentPageLayout>
  );
}

import { ExperimentPageLayout } from "@/components/experiment-page-layout";

const resources = [
  {
    title: "Kaggle",
    links: [
      { text: "Kaggle Sign-Up", url: "https://www.kaggle.com/" },
      {
        text: "Kaggle Notebook Documentation",
        url: "https://www.kaggle.com/docs/notebooks?ref=machinelearningnuggets.com",
      },
      {
        text: "Kaggle Tutorial",
        url: "https://youtu.be/4E7A1ExEgIY?si=vX-gvLhx9rF6IGtr",
        thumbnail: "https://img.youtube.com/vi/4E7A1ExEgIY/0.jpg",
      },
      {
        text: "Enabling GPU on Kaggle",
        url: "https://youtu.be/fNi9S5F-GAk?si=YhgF8HGY_j9hKRsp",
        thumbnail: "https://img.youtube.com/vi/fNi9S5F-GAk/0.jpg",
      },
      {
        text: "Documentation - Running Kaggle Kernels with GPU",
        url: "https://www.kaggle.com/code/dansbecker/running-kaggle-kernels-with-a-gpu",
      },
    ],
  },
  {
    title: "Google Colab",
    links: [
      { text: "Beginner Documentation", url: "https://colab.google/" },
      {
        text: "Colab Python Data Science Handbook",
        url: "https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/01.01-Help-And-Documentation.ipynb",
      },
      {
        text: "How to set up GPU on Google Colab? (Video 1)",
        url: "https://youtu.be/TI9mTiTKoUc?si=xq_A63MTgP-Hto8o",
        thumbnail: "https://img.youtube.com/vi/TI9mTiTKoUc/0.jpg",
      },
      {
        text: "How to set up GPU on Google Colab? (Video 2)",
        url: "https://youtu.be/jUqRBzvBJZs?si=zuS-L6GsYhScPkLz",
        thumbnail: "https://img.youtube.com/vi/jUqRBzvBJZs/0.jpg",
      },
    ],
  },
];

export default function ResourcePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t1" title="Resources">
      {resources.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
          <ul className="list-disc pl-5">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-2">
                {link.thumbnail ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <img
                      src={link.thumbnail}
                      alt={link.text}
                      className="w-24 h-16 rounded-md shadow-md"
                    />
                    <span className="text-blue-600 hover:underline">
                      {link.text}
                    </span>
                  </a>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ExperimentPageLayout>
  );
}

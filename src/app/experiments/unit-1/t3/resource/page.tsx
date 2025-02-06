import { ExperimentPageLayout } from "@/components/experiment-page-layout";

const resources = [
  {
    title: "NVIDIA NGC Account Setup",
    links: [
      {
        text: "Set up NVIDIA NGC account (Video)",
        url: "https://youtu.be/nATRPPZ5dGE?si=M8HyPslUikBL3CEq",
        thumbnail: "https://img.youtube.com/vi/nATRPPZ5dGE/0.jpg",
      },
      { text: "NGC Setup", url: "https://org.ngc.nvidia.com/setup" },
      {
        text: "NGC Catalog",
        url: "https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=",
      },
    ],
  },
  {
    title: "Generate API Key",
    links: [
      {
        text: "Generate API key (Video)",
        url: "https://youtu.be/yBNt4qSnn0k?si=QUuS7KKsixDsP9AS",
        thumbnail: "https://img.youtube.com/vi/yBNt4qSnn0k/0.jpg",
      },
    ],
  },
  {
    title: "Pulling Specific NGC Packages",
    links: [
      {
        text: "Pulling NGC Packages (Video 1)",
        url: "https://youtu.be/LN5NzKx3qf0?si=sNc0i15WZrtCvQ4-",
        thumbnail: "https://img.youtube.com/vi/LN5NzKx3qf0/0.jpg",
      },
      {
        text: "Pulling NGC Packages (Video 2)",
        url: "https://youtu.be/ggtbROPqvkc?si=T6wMDc9w_w8ttuUg",
        thumbnail: "https://img.youtube.com/vi/ggtbROPqvkc/0.jpg",
      },
      {
        text: "TensorFlow Docker Hub",
        url: "https://hub.docker.com/r/tensorflow/tensorflow",
      },
      {
        text: "NVIDIA Docker GitHub",
        url: "https://github.com/NVIDIA/nvidia-docker",
      },
      {
        text: "NGC Package Pulling (Video 3)",
        url: "https://youtu.be/mePrYPtWY6I?si=_iJ6Vw3jjsvQOpNI",
        thumbnail: "https://img.youtube.com/vi/mePrYPtWY6I/0.jpg",
      },
    ],
  },
  {
    title: "Run the Container",
    links: [
      {
        text: "Run the Container (Video)",
        url: "https://youtu.be/hJLNs5zEasw?si=cxZZ-rgYS9-c4dYf",
        thumbnail: "https://img.youtube.com/vi/hJLNs5zEasw/0.jpg",
      },
    ],
  },
  {
    title: "Pulling Specific Versions",
    links: [
      {
        text: "NGC Catalog",
        url: "https://catalog.ngc.nvidia.com/?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=",
      },
    ],
  },
];

export default function ResourcePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t3" title="Resources">
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

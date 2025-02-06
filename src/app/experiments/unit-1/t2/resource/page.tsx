import { ExperimentPageLayout } from "@/components/experiment-page-layout";

const resources = [
  {
    title: "Docker",
    links: [
      {
        text: "Docker Desktop Installation Guide",
        url: "https://hub.docker.com/",
      },
      {
        text: "Docker for Mac",
        url: "https://docs.docker.com/desktop/setup/install/mac-install/",
      },
      {
        text: "Docker for Windows",
        url: "https://docs.docker.com/desktop/setup/install/windows-install/",
      },
      {
        text: "How To Install Docker on Windows? A Step-by-Step Guide",
        url: "https://youtu.be/XgRGI0Pw2mM?si=S9GkDNh7hHxTCTrB",
        thumbnail: "https://img.youtube.com/vi/XgRGI0Pw2mM/0.jpg",
      },
      {
        text: "How to Install Docker on Windows - 2025",
        url: "https://youtu.be/ZyBBv1JmnWQ?si=HzY4wMr7n1aIVQET",
        thumbnail: "https://img.youtube.com/vi/ZyBBv1JmnWQ/0.jpg",
      },
      {
        text: "How to Install Docker on Mac/Mac OS",
        url: "https://youtu.be/-EXlfSsP49A?si=NcB45mGcZuMaVCrF",
        thumbnail: "https://img.youtube.com/vi/-EXlfSsP49A/0.jpg",
      },
      {
        text: "Docker Images and Containers Introduction Guide",
        url: "https://docs.docker.com/get-started/introduction/",
      },
    ],
  },
  {
    title: "NVIDIA & NGC Containers",
    links: [
      {
        text: "Install NVIDIA APP",
        url: "https://www.nvidia.com/en-in/software/nvidia-app/",
      },
      {
        text: "Windows 10/11 - NVIDIA App Guide",
        url: "https://youtu.be/7RDnXxkxIhg?si=m1FBAbxFhn6KyL3X",
      },
      {
        text: "Mac - NVIDIA Update",
        url: "https://github.com/Benjamin-Dobell/nvidia-update",
      },
      {
        text: "Nvidia-smi Introduction",
        url: "https://docs.nvidia.com/deploy/nvidia-smi/index.html",
      },
      {
        text: "Set up NVIDIA Account",
        url: "https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=",
      },
      {
        text: "Accessing GPU using Docker Containers",
        url: "https://youtu.be/-Y4T71UDcMY?si=1eOjZfarM4_8DzQX",
        thumbnail: "https://img.youtube.com/vi/-Y4T71UDcMY/0.jpg",
      },
      {
        text: "Generate API Key",
        url: "https://youtu.be/yBNt4qSnn0k?si=QUuS7KKsixDsP9AS",
      },
      {
        text: "NVIDIA Container Toolkit Guide",
        url: "https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",
      },
      {
        text: "Pull Docker Images",
        url: "https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/pullcontainer.html",
      },
      {
        text: "GitHub - Docker NVIDIA Basics",
        url: "https://github.com/schoenemeyer/docker-nvidia-basics/blob/master/README.md",
      },
      {
        text: "How to Pull NVIDIA Images",
        url: "https://youtu.be/9nr1Zf5PHmM?si=HG3MLS7sFf9MqSgH",
        thumbnail: "https://img.youtube.com/vi/9nr1Zf5PHmM/0.jpg",
      },
      {
        text: "Running Docker Containers",
        url: "https://youtu.be/hJLNs5zEasw?si=cxZZ-rgYS9-c4dYf",
        thumbnail: "https://img.youtube.com/vi/hJLNs5zEasw/0.jpg",
      },
    ],
  },
];

export default function ResourcePage() {
  return (
    <ExperimentPageLayout unit="unit-1" experiment="t2" title="Resources">
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

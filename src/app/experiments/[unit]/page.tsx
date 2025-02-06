import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Instagram, Twitter, Linkedin, User, Menu } from "lucide-react";

// This would typically come from a database or API
const unitData = {
  "unit-1": {
    title: "Unit-1",
    subtitle: "Introduction to System Software Engineering",
    experiments: [
      {
        id: "t1",
        title: "T1: Accessing DGX A100",
        href: "/experiments/unit-1/t1",
      },
      {
        id: "t2",
        title: "T2: Working with Docker Images and NGC Containers.",
        href: "/experiments/unit-1/t2",
      },
      {
        id: "t3",
        title: "T3: Installation and Pulling Specific NGC Packages ",
        href: "/experiments/unit-1/t3",
      },
    ],
  },
  "unit-2": {
    title: "Unit-2",
    subtitle: "Scheduling and Resource Management",
    experiments: [
      {
        id: "t1",
        title: "T1: Process Scheduling",
        href: "/experiments/unit-2/t1",
      },
      {
        id: "t2",
        title: "T2: Resource Allocation",
        href: "/experiments/unit-2/t2",
      },
      {
        id: "t3",
        title: "T3: Memory Management",
        href: "/experiments/unit-2/t3",
      },
    ],
  },
  "unit-3": {
    title: "Unit-3",
    subtitle: "Introduction to IDE/Exploratory Programming",
    experiments: [
      {
        id: "t1",
        title: "T1: IDE Setup and Configuration",
        href: "/experiments/unit-3/t1",
      },
      {
        id: "t2",
        title: "T2: Code Navigation and Debugging",
        href: "/experiments/unit-3/t2",
      },
      {
        id: "t3",
        title: "T3: Version Control Integration",
        href: "/experiments/unit-3/t3",
      },
    ],
  },
  "unit-4": {
    title: "Unit-4",
    subtitle: "System Software for Accelerated Computing",
    experiments: [
      {
        id: "t1",
        title: "T1: GPU Architecture Overview",
        href: "/experiments/unit-4/t1",
      },
      {
        id: "t2",
        title: "T2: CUDA Programming Basics",
        href: "/experiments/unit-4/t2",
      },
      {
        id: "t3",
        title: "T3: Parallel Computing Patterns",
        href: "/experiments/unit-4/t3",
      },
    ],
  },
  "unit-5": {
    title: "Unit-5",
    subtitle: "GPU Programming",
    experiments: [
      {
        id: "t1",
        title: "T1: GPU Memory Management",
        href: "/experiments/unit-5/t1",
      },
      {
        id: "t2",
        title: "T2: Kernel Optimization",
        href: "/experiments/unit-5/t2",
      },
      {
        id: "t3",
        title: "T3: Advanced GPU Programming",
        href: "/experiments/unit-5/t3",
      },
    ],
  },
};

export default function UnitPage({ params }: { params: { unit: string } }) {
  const unit =
    params.unit in unitData
      ? unitData[params.unit as keyof typeof unitData]
      : null;

  if (!unit) {
    return <div>Unit not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Image
            src="/srm-logo.svg"
            alt="SRM Logo"
            width={140}
            height={60}
            className="h-auto w-auto max-w-[30vw] md:max-w-[150px]"
            priority
          />

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-secondary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-secondary"
            >
              About us
            </Link>
            <Link
              href="/course-outcome"
              className="text-sm font-medium text-gray-700 hover:text-secondary"
            >
              Course Outcome
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-secondary"
            >
              Contact us
            </Link>
          </div>

          {/* Profile and Mobile Navigation */}
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-gray-700 hover:text-secondary">
              <User size={24} />
              <span className="sr-only">Login</span>
            </Link>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-lg font-medium hover:text-secondary"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-secondary"
                    >
                      About us
                    </Link>
                    <Link
                      href="/course-outcome"
                      className="text-lg font-medium hover:text-secondary"
                    >
                      Course Outcome
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium hover:text-secondary"
                    >
                      Contact us
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">
              {unit.title}
            </h1>
            <p className="text-gray-600 text-center mb-12">{unit.subtitle}</p>

            <div className="space-y-4">
              {unit.experiments.map((experiment) => (
                <Link
                  key={experiment.id}
                  href={experiment.href}
                  className="block p-6 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-lg transition-colors"
                >
                  <h2 className="text-lg font-medium">{experiment.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-secondary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/course-outcome" className="hover:text-secondary">
                    Course Outcome
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-secondary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="hover:text-secondary">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-secondary">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>
              © 2025 Virtual Lab for Software Engineering in AI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

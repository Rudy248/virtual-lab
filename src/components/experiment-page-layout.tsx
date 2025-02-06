import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExperimentNav } from "./experiment-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Instagram, Twitter, Linkedin, User, Menu } from "lucide-react";

interface ExperimentPageLayoutProps {
  children: React.ReactNode;
  unit: string;
  experiment: string;
  title: string;
}

export function ExperimentPageLayout({
  children,
  unit,
  experiment,
  title,
}: ExperimentPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
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

      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          <ExperimentNav unit={unit} experiment={experiment} />
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
              <div className="max-w-2xl mx-auto">{children}</div>
            </div>
          </main>
        </div>
      </div>

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

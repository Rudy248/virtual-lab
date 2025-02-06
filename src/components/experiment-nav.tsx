"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperimentNavProps {
  unit: string;
  experiment: string;
}

export function ExperimentNav({ unit, experiment }: ExperimentNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "Aim",
      href: `/experiments/${unit}/${experiment}/aim`,
    },
    {
      title: "Objective",
      href: `/experiments/${unit}/${experiment}/objective`,
    },
    {
      title: "Theory",
      href: `/experiments/${unit}/${experiment}/theory`,
    },
    {
      title: "Procedure",
      href: `/experiments/${unit}/${experiment}/procedure`,
    },
    {
      title: "Simulation",
      href: `/experiments/${unit}/${experiment}/simulation`,
    },
    {
      title: "Resources",
      href: `/experiments/${unit}/${experiment}/resource`,
    },
    {
      title: "List of Experiments",
      href: "/experiments",
    },
  ];

  const NavContent = () => (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block px-4 py-2 text-sm rounded-lg transition-colors",
            pathname === item.href
              ? "bg-white/10 text-white font-medium"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          )}
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="my-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-[#4475F2]">
              <div className="mt-8">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block w-64 bg-[#4475F2] p-6 rounded-lg">
        <NavContent />
      </div>
    </>
  );
}

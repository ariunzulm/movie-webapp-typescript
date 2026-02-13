"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ModeToggle } from "./ModeToggle";
import { Search, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-linear-to-b from-black/80 to-transparent backdrop-blur-sm">
        {isOpen ? (
          <ChevronDown className="border p-1.5 border-zinc-200 rounded-xl w-8 h-8 transition-all cursor-pointer" />
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-2xl">Pine Movie</span>
          </Link>
        )}
        <div className="flex gap-3 items-center md:justify-center">
          <InputGroup
            className={cn(
              "border relative border-zinc-200 rounded-xl md:flex mx-auto justify-center focus-within:border-zinc-500",
              isOpen ? "flex-1 md:min-w-94.75" : "w-10 md:min-w-94.75",
            )}
          >
            <InputGroupInput
              placeholder="Search..."
              className={cn(
                "transition-all text-white",
                isOpen ? "block w-full text-white" : "hidden md:block",
              )}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 text-white/90 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="md:hidden absolute right-2" /> : null}
            </Button>
            <InputGroupAddon
              className="h-8 w-8 cursor-pointer flex items-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="md:hidden absolute right-2" /> : null}
              <Link href="/searchPage">
                <Search />
              </Link>
            </InputGroupAddon>
          </InputGroup>
          <div className={cn(isOpen && "sm:hidden")}>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

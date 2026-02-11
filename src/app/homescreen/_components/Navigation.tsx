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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-5 lg:px-8">
          {isOpen ? (
            <ChevronDown className="border p-1.5 border-zinc-200 rounded-xl w-8 h-8 transition-all cursor-pointer" />
          ) : (
            <div className="flex">
              <a
                href="#"
                className="-m-1.5 p-1.5 flex flex-row items-center gap-2 text-gray-700 italic font-bold"
              >
                <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
              </a>
            </div>
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
                  "transition-all",
                  isOpen ? "block w-full" : "hidden md:block",
                )}
              />
              <InputGroupAddon
                className="h-8 pr-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="md:hidden absolute right-2" /> : null}
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <div className={cn(isOpen && "sm:hidden")}>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

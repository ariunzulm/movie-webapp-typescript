import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronDown, Search } from "lucide-react";

export default function Navigation() {
  return (
    <div className="flex flex-col  max-w-360 mx-auto bg-white">
      <section className="w-full flex items-center justify-between py-3 px-5 md:px-12 xl:px-16 xl:gap-4">
        <img src="/Logo.svg" alt="logo" className="xl:h-10" />

        <div className="flex gap-3 ">
          <img
            src="/search-icon.svg"
            alt="search icon"
            className="cursor-pointer "
          />
          <img src="/nightmode-icon.svg" alt="nightmode icon" />
        </div>

        <div className="flex gap-3 xl:gap-4 items-center justify-center md:hidden">
          <Button
            variant="link"
            className="text-sm py-2 px-3 font-medium border border-zinc-200 hover:bg-gray-50 cursor-pointer"
          >
            <ChevronDown />
            Genre
          </Button>

          <InputGroup className="min-w-94.75">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <img
            src="/nightmode-icon.svg"
            alt="nightmode icon"
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>
      </section>
    </div>
  );
}

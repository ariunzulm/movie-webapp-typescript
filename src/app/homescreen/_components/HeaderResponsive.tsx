import { Search } from "lucide-react";
import { useState } from "react";
import { SquareChevronRight } from "lucide-react";
import { Menu } from "lucide-react";
import { SquareX } from "lucide-react";

const navigation = [<SquareChevronRight />];
export default function HeaderResponsive() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-50">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex flex-col lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src="https://p1.hiclipart.com/preview/365/513/290/movie-logo-photographic-film-movie-camera-cinema-movie-projector-video-cameras-cinema-camera-circle-png-clipart.jpg"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span>Movie Z</span>
            </a>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div> */}
        </nav>
        <dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg;hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Movie</span>
              <img
                src="https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg"
                alt=""
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <SquareX aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    href={item.href}
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </dialog>
      </header>
    </div>
  );
}

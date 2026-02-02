import { Star } from "lucide-react";
import Navigation from "./homescreen/_components/Nativagation";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
    </div>
  );
}
const HeroSection = () => {
  return (
    <div className="flex flex-col max-w-360 mx-auto w-full bg-white">
      <div className="md:hidden">
        <div className="relative w-full">
          <img
            src="/scroll-1.jpg"
            alt="wicked poster"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -traslate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <section className="px-5 py-3 space-y-4 flex justify-between">
        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="text-sm leading-5 text-gray-500">Now Playing:</p>
            <h3 className="text-2xl font-semibold text-gray-900">Wicked</h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <Star fill="#FDE047" className="text-amber-200" />
          <p className="text-lg font-semibold text-gray-900">6.9</p>3
          <p className="text-base text-gray-400">/10</p>
        </div>
      </section>
      <p className="text-sm text-gray-900 px-5 leading-relaxed">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </p>

      <section className="px-5 py-3 ">
        <Button
          variant="link"
          className="bg-black text-white text-sm py-2 px-3 w-fit font-semibold"
        >
          <Play />
          Watch Trailer
        </Button>
      </section>

      <section className="hidden md:block relative w-full">
        <div className="relative w-full h-125 lg:h-150 xl:h-170">
          <img
            src="/scroll-1.jpg"
            alt="wicked poster"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start">
            <div className="max-w-360 text-white mx-auto w-full px-8 md:px-12 xl:px-16">
              <p className="text-sm lg:text-base xl:text-lg font-medium leading-relaxed">
                Now Playing:
              </p>
              <h3 className="text-4xl lg:text-6xl xl:text-7xl font-semibold  leading-tight">
                Wicked
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                6.9
              </p>
              3
              <p className="text-lg lg:text-xl xl:text-xl text-gray-300">/10</p>
            </div>
            <p className="text-sm lg:text-base xl:text-lg text-white leading-relaxed">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
            <section className="px-5 py-3 ">
              <Button
                variant="link"
                className="bg-black text-white text-sm py-2 px-3 w-fit font-semibold"
              >
                <Play />
                Watch Trailer
              </Button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
/* <UpcomingCarousel />*/

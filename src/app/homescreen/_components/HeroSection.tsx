import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";


export default function HeroSection() {
  return (
    <div className="w-full max-w-360 mx-auto bg-white">
      {/* --------------------------------------mobile*/}
      <div className="xl:hidden">
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

      <div className="px-5 py-3 space-y-4 flex justify-between xl:hidden">
        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="text-sm leading-5 text-[#09090B]">Now Playing:</p>
            <h3 className="text-2xl font-semibold leading-8 text-gray-900">
              Wicked
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <Star fill="#FDE047" className="text-amber-200" />
          <p className="text-lg font-semibold text-gray-900">6.9</p>
          <p className="text-base text-gray-400">/10</p>
        </div>
      </div>
      <p className="text-sm font-normal text-gray-900 px-5 leading-relaxed w-90 xl:hidden">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </p>

      <div className="px-4 py-5 flex gap-2 xl:hidden">
        <Button
          variant="link"
          className="bg-black text-white text-sm w-fit font-medium"
        >
          <Play />
          Watch Trailer
        </Button>
      </div>
      {/* -------------------------------------desktop */}
      <div className="hidden xl:block relative  w-full h-150 overflow-hidden">
        <img
          src="/scroll-1.jpg"
          alt="wicked poster"
          className="absolute w-full h-full inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col px-16 max-w-150 mt-44.5 ml-35">
          <div className="px-5 py-3 space-y-4 flex flex-col">
            <div className="flex gap-4 text-white">
              <div>
                <p className="text-base leading-5 ">Now Playing:</p>
                <h3 className="text-[36px] font-extrabold leading-8">Wicked</h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-base font-semibold text-white">6.9</p>
              <p className="text-xl text-gray-400">/10</p>
            </div>
          </div>
          <p className="text-[12px] font-normal text-white px-5 leading-relaxed w-93">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <div className="px-4 py-5 flex gap-2">
            <Button
              variant="link"
              className="bg-white text-black text-sm w-fit font-medium"
            >
              <Play />
              Watch Trailer
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -traslate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}

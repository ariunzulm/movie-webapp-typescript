import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carouselData from "../moviesData/carouselData";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";

export function UpcomingCarousel() {
  return (
    <Carousel className="w-full max-w-360">
      <CarouselContent>
        {carouselData.map((data, index) => {
          const { id, movieName, rating, description, posterImage } = data;
          return (
            <CarouselItem key={index}>
              <div>
                <div className="w-full max-w-360 mx-auto bg-white">
                  {/* --------------------------------------mobile*/}
                  <div className="xl:hidden">
                    <div className="relative w-full">
                      <img
                        src={posterImage}
                        alt={`${movieName}poster`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-5 py-3 space-y-4 flex justify-between xl:hidden">
                    <div className="flex flex-col items-start gap-4">
                      <div>
                        <p className="text-sm leading-5 text-[#09090B]">
                          Now Playing:
                        </p>
                        <h3 className="text-2xl font-semibold leading-8 text-gray-900">
                          {movieName}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5">
                      <Star fill="#FDE047" className="text-amber-200" />
                      <p className="text-lg font-semibold text-gray-900">
                        {rating}
                      </p>
                      <p className="text-base text-gray-400">/10</p>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-900 px-5 leading-relaxed w-90 xl:hidden">
                    {description}
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
                </div>
                {/* -------------------------------------desktop */}
                <div className="hidden xl:block relative  w-full h-150 overflow-hidden">
                  <img
                    src={posterImage}
                    alt={`${movieName}poster`}
                    className="absolute w-full h-full inset-0 object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col px-16 max-w-150 mt-44.5 ml-35">
                    <div className="px-5 py-3 space-y-4 flex flex-col">
                      <div className="flex gap-4 text-white">
                        <div>
                          <p className="text-base leading-5 ">Now Playing:</p>
                          <h3 className="text-[36px] font-extrabold leading-8">
                            {movieName}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1.5">
                        <Star fill="#FDE047" className="text-amber-200" />
                        <p className="text-base font-semibold text-white">
                          {rating}
                        </p>
                        <p className="text-xl text-gray-400">/10</p>
                      </div>
                    </div>
                    <p className="text-[12px] font-normal text-white px-5 leading-relaxed w-93">
                      {description}
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
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

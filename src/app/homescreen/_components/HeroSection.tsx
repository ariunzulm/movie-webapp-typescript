import { Button } from "@/components/ui/button";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
import { useState } from "react";
import carouselMoviesData from "../moviesData/carouselMoviesData";

type HeroCarouselProps = {
  current: number;
  data: {
    id: number;
    movieName: string;
    description: string;
    rating: number;
    posterImage: string;
  };
  prevSlide?: () => void;
  nextSlide?: () => void;
};
export default function HeroCarousel({ data, current }: HeroCarouselProps) {
  const [slide, setSlide] = useState(carouselMoviesData);
  const [index, setIndex] = useState(0);

  const handleNextLide = () => {
    setIndex(index + 1);
  };
  const { id, movieName, rating, description, posterImage } = data;
  return (
    <div className="max-w-360 mx-auto relative bg-white ">
      <div className="xl:hidden ">
        <div className="relative w-full h-61.5">
          <img
            src={posterImage}
            alt={`${movieName}poster`}
            className="w-full h-full object-cover"
          />

          <CarouselPrevious className="absolute top-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 right-2" />
        </div>

        <div className="absolute bottom-1/4 left-1/2 flex justify-center gap-2 mt-4 ">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-red-400" : "bg-red/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-3 space-y-4 flex justify-between xl:hidden">
        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="text-sm leading-5 text-[#09090B]">Now Playing:</p>
            <h3 className="text-2xl font-semibold leading-8 text-gray-900">
              {movieName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <Star fill="#FDE047" className="text-amber-200" />
          <p className="text-lg font-semibold text-gray-900">{rating}</p>
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

      <div className="hidden xl:block relative h-150  w-full overflow-hidden">
        <div className="relative w-full ">
          <img
            src={posterImage}
            alt={`${movieName}poster`}
            className="absolute w-full h-150 inset-0 object-cover"
          />
          <CarouselPrevious className="absolute top-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 right-2" />
        </div>

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
              <p className="text-base font-semibold text-white">{rating}</p>
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}

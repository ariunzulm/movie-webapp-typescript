import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import carouselData from "../moviesData/carouselMoviesData";
import { useState } from "react";
import HeroCarousel from "./HeroSection";

type HeroCarouselProps = {
  data: {
    id: number;
    movieName: string;
    description: string;
    rating: number;
    posterImage: string;
  };
  onClick: string;
};
export function UpcomingCarousel({ data }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const handleApiReady = (api: CarouselApi) => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  };

  return (
    <div className="w-full relative">
      <Carousel setApi={handleApiReady} className="w-full max-w-360">
        <CarouselContent>
          {carouselData.map((data, i) => {
            return (
              <CarouselItem key={i}>
                <HeroCarousel data={data} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import carouselData from "../moviesData/carouselMoviesData";
import { useState } from "react";
import HeroCarousel from "./HeroSection";
import { HeroMovieCard } from "./HeroMovieCard";

export function UpcomingCarousel() {
  const [current, setCurrent] = useState(0);

  const handleApiReady = (api: CarouselApi) => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  };

  return (
    <div className="w-full relative mt-20">
      <Carousel setApi={handleApiReady} className="w-full">
        <CarouselContent>
          {carouselData.map((data, i) => {
            return (
              <CarouselItem key={i}>
                <HeroMovieCard({ data, current }: HeroCarouselProps) />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

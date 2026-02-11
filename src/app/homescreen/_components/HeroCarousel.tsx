import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroCarouselCard from "./HeroCarouselCard";
import { Movie } from "@/lib/_homescreenLib/types";

type HeroCarouselProps = {
  movies: Movie[];
};

const HeroCarousel = async ({ movies }: HeroCarouselProps) => {
  return (
    <div className="w-full h-fit relative mt-15">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie) => {
            return (
              <CarouselItem key={movie.id} className="border-none">
                <HeroCarouselCard
                  movieName={movie.title}
                  description={movie.overview}
                  posterImage={movie.backdrop_path}
                  rating={movie.vote_average}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-15">
          <CarouselPrevious />
        </div>
        <div className="absolute top-1/2 -right-8">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
export default HeroCarousel;

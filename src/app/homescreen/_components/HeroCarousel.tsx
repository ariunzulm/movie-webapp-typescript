import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroCarouselCard from "./HeroCarouselCard";
import { Movie } from "@/lib/types";

type HeroCarouselProps = {
  movies: Movie[];
};

const HeroCarousel = async ({ movies }: HeroCarouselProps) => {
  return (
    <div className="w-full h-fit relative ">
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
                  date={movie.release_date}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-15 bg-black/30 border border-gray-200 hover:bg-black/60 backdrop-blur-sm">
          <CarouselPrevious className="bg-transparent text-white border border-gray-200 w-8 h-8 rounded-full" />
        </div>
        <div className="absolute top-1/2 -right-8 bg-black/30 hover:bg-black/60 backdrop-blur-sm">
          <CarouselNext className="bg-transparent text-white" />
        </div>
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
